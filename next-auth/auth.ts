import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { getUserFromDb } from "./lib/getUser";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          const user = await getUserFromDb(
            credentials.email,
            credentials.password
          );

          if (user) {
            return user; // If a user is found, return it
          }

          // Return null if user is not found, NextAuth will handle it as a failed login
          return null;
        } catch (error) {
          console.error("Error in authorize function:", error);
          return null; // Returning null to signify no user found (or error)
        }
      },
    }),
    Google,
  ],
  // pages: {
  //   signIn: "/login",
  // },
  // callbacks: {
  //   authorized({ auth, request: { nextUrl } }) {
  //     const isLoggedIn = !!auth?.user;
  //     const isOnDashboard = nextUrl.pathname === "/";
  //     if (isOnDashboard) {
  //       if (isLoggedIn) return true;
  //       return false; // Redirect unauthenticated users to login page
  //     } else if (isLoggedIn) {
  //       return Response.redirect(new URL("/", nextUrl));
  //     }
  //     return true;
  //   },
  // },
});
