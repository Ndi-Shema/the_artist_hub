"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { client } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

interface Article {
  title: string;
  content: any[];
  image?: { asset: { url: string } };
  externalLink?: string;
  createdAt?: string;
}

export default function ArticlePage() {
  const { slug } = useParams();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticle() {
      if (!slug) return;
      setLoading(true);
      try {
        const query = `*[_type == "article" && slug.current == $slug][0] {title, content, image{asset->{url}}, externalLink, createdAt}`;
        const data = await client.fetch(query, { slug });
        setArticle(data);
      } catch (error) {
        console.error("Error fetching article:", error);
      }
      setLoading(false);
    }
    fetchArticle();
  }, [slug]);

  if (loading) return <p>Loading...</p>;
  if (!article) return <p>Article not found.</p>;

  return <div>{/* Article Content Here */}</div>;
}
