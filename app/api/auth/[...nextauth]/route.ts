import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    // Add other providers if needed
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Redirect to homepage (or another protected page) after sign in
      return baseUrl;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
