import Image from "next/image";
import { client, urlfor } from "../lib/sanity";
import Link from "next/link";

async function getData() {
  const query = `*[_type == 'heroImage'][0]`;
  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const data = await getData();
  return (
    <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      <div className="mb-8 flex flex-wrap justify-between md:mb-16">
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">
            Style Meets Fantasy in Art.
          </h1>

          <p className="max-w-mid leading-relaxed text-gray-500 xl:text-lg">
            Experience stunning art pieces curated to inspire, elevate creativity, and connect with the community through our SHOP.
          </p>
        </div>

        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
          <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top lg:ml-0">
            <Image
              src={urlfor(data.image2).url()}
              alt="Abstract lady"
              className="h-full w-full object-cover object-center"
              width={500}
              height={500}
              priority
            />
          </div>

          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <Image
              src={urlfor(data.image1).url()}
              alt="Walter white"
              className="h-full w-full object-cover object-center"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
            <Link
              href="/Abstract"
              className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
            >
              Abstract
            </Link>

            <Link
              href="/Culture"
              className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
            >
              Culture
            </Link>

            <Link
              href="/Beautiful"
              className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
            >
              Beautiful
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
