import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/auth/signin", // Redirect unauthenticated users here
  },
});

export const config = {
  // List the routes you want to protect
  matcher: ["/artwork/:path*", "/education/:path*"],
};
