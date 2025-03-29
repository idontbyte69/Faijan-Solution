import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth/next";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Please enter both email and password");
        }

        try {
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email
            },
            include: {
              role: true
            }
          });

          if (!user || !user?.password) {
            throw new Error("No user found with this email");
          }

          const isCorrectPassword = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (!isCorrectPassword) {
            throw new Error("Invalid password");
          }

          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role.name,
            permissions: user.role.permissions
          };
        } catch (error) {
          console.error('Authorization error:', error);
          throw error;
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.permissions = user.permissions;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
        session.user.permissions = token.permissions as string[];
      }
      return session;
    }
  },
  pages: {
    signIn: "/auth/login",
    error: "/auth/login"
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60 // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
  useSecureCookies: process.env.NODE_ENV === "production",
  cookies: {
    sessionToken: {
      name: process.env.NODE_ENV === "production" ? "__Secure-next-auth.session-token" : "next-auth.session-token",
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production"
      }
    }
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }; 