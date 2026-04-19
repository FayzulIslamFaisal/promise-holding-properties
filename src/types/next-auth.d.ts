import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    user: {
      id: string;
      name: string;
      phone: string;
      email?: string;
      image?: string;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    name: string;
    phone: string;
    email?: string;
    image?: string;
    accessToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
    user?: any;
  }
}
