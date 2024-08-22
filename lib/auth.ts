import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

// import prisma from "@/libs/prismadb"
import { error } from "console";
import bcrypt from "bcrypt";
import dbConncet from "./dbConnect";
import UserModel from "./Models/userModel";

export const config = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      credentials: {
        email: {
          type: "email",
        },
        password: {
          type: "password",
        },
      },
      async authorize(credentials) {
        await dbConncet();
        if (!credentials) return null;

        if (!credentials?.email || !credentials.password) {
          throw error("Incorrect email or password");
        }

        const user = await UserModel.findOne({
          email: credentials.email,
        });

        if (user) {
          const isMatch = await bcrypt.compare(
            credentials.password as string,
            user.password
          );

          if (isMatch) {
            return user;
          }
        }

        return null;
        if (!user || !user?.hashedPassword) {
          throw error("Incorrect email or password");
        }
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/Login",
    newUser: "/Register",
    error: "/Login",
  },
  callbacks: {
    authorized({ request, auth }: any) {
      const protectedPaths = [
        /\/Checkout/,
        /\/Payment/,
        /\/Place-order/,
        /\/Profile/,
        /\/Order\/(.*)/,
        /\/Admin/,
      ];

      const { pathname } = request.nexturl;
      if (protectedPaths.some((p) => p.test(pathname))) return !!auth;
      return true;
    },
    async jwt({ user, trigger, session, token }: any) {
      if (user) {
        token.user = {
          _id: user._id,
          email: user.email,
          name: user.name,
          isAdmin: user.isAdmin,
        };
      }

      if (trigger === "update" && session) {
        token.user = {
          ...token.user,
          email: session.user.email,
          name: session.user.name,
        };
      }

      return token;
    },
    session: async ({ session, token }: any) => {
      if (token) {
        session.user = token.user;
      }
      return session;
    },
  },
};
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth(config);
