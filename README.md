# 🚀 Next.js 16 Starter Kit — Auth.js (NextAuth v5) + Prisma + Shadcn UI

A modern, full-stack starter kit for building production-ready Next.js 16 applications with:

- 🧩 **Auth.js (NextAuth v5)** for authentication  
- 🪄 **Prisma ORM** for database access  
- 💅 **shadcn/ui** for beautiful, accessible components  
- ⚡ **App Router** & **TypeScript** support  

---

## 📦 Tech Stack

| Layer | Tool |
|-------|------|
| Framework | [Next.js 16](https://nextjs.org/) |
| UI Components | [shadcn/ui](https://ui.shadcn.com/) |
| Authentication | [Auth.js (NextAuth v5)](https://authjs.dev/) |
| Database ORM | [Prisma](https://www.prisma.io/) |
| Adapter | [@auth/prisma-adapter](https://authjs.dev/reference/adapter/prisma) |
| Language | TypeScript |
| Styling | Tailwind CSS |

---

## 🛠️ Setup Guide

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/masum184e/nextjs-starter-template-typescript-prisma-next-auth.git
cd nextjs-starter-template-typescript-prisma-next-auth
```
### 2️⃣ Install Dependencies

Since Next.js 16 isn’t yet listed in Auth.js peer deps, use:
```bash
npm install --legacy-peer-deps
```

### 3 Run PostgreSQL in Docker


```bash
docker run -d --name postgres-db -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=mydb -p 5432:5432 postgres:16
```

### 3️⃣ Setup Environment Variables

Create a `.env` file in your project root:

```env
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/mydb?schema=public

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

NEXTAUTH_SECRET=your_random_secret
NEXTAUTH_URL=http://localhost:3000

```