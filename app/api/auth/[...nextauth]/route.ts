import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";

// @ts-expect-error — Next.js 16 validator not compatible with Auth.js v5 yet
export const { GET, POST } = NextAuth(authOptions);
