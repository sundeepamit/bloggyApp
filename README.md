<div align="center">

<br/>

```
  ██████╗ ██╗      ██████╗  ██████╗  ██████╗██╗   ██╗
  ██╔══██╗██║     ██╔═══██╗██╔════╝ ██╔════╝╚██╗ ██╔╝
  ██████╔╝██║     ██║   ██║██║  ███╗██║  ███╗╚████╔╝ 
  ██╔══██╗██║     ██║   ██║██║   ██║██║   ██║ ╚██╔╝  
  ██████╔╝███████╗╚██████╔╝╚██████╔╝╚██████╔╝  ██║   
  ╚═════╝ ╚══════╝ ╚═════╝  ╚═════╝  ╚═════╝   ╚═╝   
```

### A full-stack blog platform — write, share, and manage your stories.

<br/>

[![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)](https://mongoosejs.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Better Auth](https://img.shields.io/badge/Better_Auth-FF6B35?style=for-the-badge&logo=auth0&logoColor=white)](https://better-auth.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)

<br/>

[🚀 Live Demo](#) · [🐛 Report Bug](https://github.com/sundeepamit/bloggyApp/issues) · [✨ Request Feature](https://github.com/sundeepamit/bloggyApp/issues)

<br/>

</div>

---

## 📌 Table of Contents

- [About The Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Key Technical Decisions](#-key-technical-decisions)
- [Server Actions](#-server-actions)
- [Roadmap](#-roadmap)
- [Author](#-author)

---

## 🎯 About The Project

**BloggyApp** is a production-ready, full-stack blogging platform built with the **Next.js 16 App Router**. It demonstrates real-world patterns used in modern web development — server components, server actions, type-safe database queries, session-based authentication, and protected routing — all wrapped in a clean, responsive UI.

This project was built from scratch to deeply understand the full-stack Next.js development model, moving beyond tutorials and building something that works end-to-end.

> _"The best way to learn full-stack development is to build something real — with real auth, real data, and real problems to solve."_

---

## ✨ Features

### Core
- 🔐 **Authentication** — Secure sign up & login via Better Auth (email + password)
- 📝 **Create Posts** — Write blog posts with a title, content, and image URL
- ✏️ **Edit Posts** — Update existing blog posts with a pre-filled form
- 🗑️ **Delete Posts** — Remove posts with server-side ownership verification
- 📖 **Post Detail View** — Full blog post page with dynamic routing
- 🏠 **Public Feed** — Browse all posts from all authors, sorted newest first

### UX & Security
- 🧑‍💻 **Personal Dashboard** — See only your own posts in a protected area
- 🛡️ **Protected Routes** — Auth-guarded pages with automatic redirect to `/login`
- 🔒 **Server-side Authorization** — Mutations verify ownership via session, not just client
- 🌙 **Dark / Light Mode** — System-aware theming with `next-themes`
- 🔔 **Toast Notifications** — Real-time feedback on all user actions via Sonner
- 📱 **Fully Responsive** — Mobile-first 3-column grid layout
- ⚡ **Fast Initial Load** — Data fetched on the server via React Server Components
- 🚫 **404 Handling** — Invalid post IDs show a proper Not Found page

---

## 🛠 Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org/) | App Router, Server & Client Components |
| [TypeScript](https://www.typescriptlang.org/) | End-to-end type safety |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first styling |
| [shadcn/ui](https://ui.shadcn.com/) | Accessible, composable UI components |
| [Lucide React](https://lucide.dev/) | Icon library |
| [Sonner](https://sonner.emilkowal.ski/) | Toast notifications |
| [next-themes](https://github.com/pacocoursey/next-themes) | Dark/light mode |

### Backend
| Technology | Purpose |
|---|---|
| [Next.js Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations) | Type-safe server-side mutations |
| [Better Auth](https://better-auth.com/) | Modern session-based authentication |
| [Mongoose](https://mongoosejs.com/) | MongoDB ODM with schema validation |
| [MongoDB](https://www.mongodb.com/) | NoSQL database for all app data |

---

## 🏗 Architecture

```
┌─────────────────────────────────────────────────────────┐
│                      Next.js 16                          │
│                                                         │
│  ┌────────────────────┐    ┌─────────────────────────┐  │
│  │  Server Components  │    │   Client Components     │  │
│  │  (data fetching,   │    │  (forms, toasts,        │  │
│  │   auth checks)     │    │   interactivity)        │  │
│  └─────────┬──────────┘    └─────────────────────────┘  │
│            │                                             │
│  ┌─────────▼───────────────────────────────────────┐    │
│  │              Server Actions (actions.ts)          │    │
│  │  createPost │ updatePost │ deletePost │ getPost   │    │
│  └─────────┬───────────────────────────────────────┘    │
│            │                                             │
└────────────┼─────────────────────────────────────────────┘
             │
┌────────────▼─────────────────────────────────────────────┐
│                        MongoDB                            │
│                                                          │
│      users ──────── sessions ──────── blogPosts          │
│      (Better Auth)  (Better Auth)    (Mongoose schema)   │
└──────────────────────────────────────────────────────────┘
```

---

## 📁 Project Structure

```
bloggyApp/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx              # Login page
│   │   └── signup/
│   │       └── page.tsx              # Signup page
│   ├── api/
│   │   └── auth/
│   │       └── [...all]/
│   │           └── route.ts          # Better Auth API handler
│   ├── dashboard/
│   │   ├── page.tsx                  # User's posts (protected)
│   │   └── [blogId]/
│   │       ├── page.tsx              # Single post view
│   │       └── edit/
│   │           └── page.tsx          # Edit post page
│   ├── create/
│   │   └── page.tsx                  # Create new post
│   ├── actions.ts                    # All Server Actions
│   ├── not-found.tsx                 # Global 404 page
│   ├── layout.tsx                    # Root layout
│   └── page.tsx                      # Public home feed
│
├── components/
│   ├── ui/                           # shadcn/ui components
│   └── web/
│       ├── Navbar.tsx
│       ├── BlogPostCard.tsx
│       ├── BlogPostDeleteButton.tsx
│       ├── BlogLike.tsx
│       └── EditBlog.tsx
│
├── lib/
│   ├── auth.ts                       # Better Auth server config
│   ├── auth-client.ts                # Better Auth client config
│   └── mongodb.ts                    # Mongoose connection helper
│
└── models/
    └── blogPost.ts                   # Mongoose BlogPost schema
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+
- **pnpm** (recommended) or npm/yarn
- **MongoDB** — [Atlas](https://cloud.mongodb.com/) cluster or local instance

### 1. Clone the repository

```bash
git clone https://github.com/sundeepamit/bloggyApp.git
cd bloggyApp
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Set up environment variables

```bash
cp .env.example .env.local
# Then fill in your values
```

### 4. Start the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) — you're good to go! 🎉

---

## 🔑 Environment Variables

```env
# ─── MongoDB ────────────────────────────────────────────
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/bloggyapp

# ─── Better Auth ────────────────────────────────────────
BETTER_AUTH_SECRET=your-random-secret-minimum-32-characters
BETTER_AUTH_URL=http://localhost:3000
```

> 💡 Generate a secure secret: `openssl rand -base64 32`

---

## 🔍 Key Technical Decisions

### Next.js 15+ Async Params
Route params are now a Promise in Next.js 15+ and must be awaited:
```ts
export default async function Page({ params }: { params: Promise<{ blogId: string }> }) {
  const { blogId } = await params
}
```

### MongoDB ObjectId Serialization
Mongoose documents cannot be passed to Client Components directly. All server actions serialize before returning:
```ts
return posts.map((post) => ({
  ...post,
  _id: post._id.toString(),
  authorId: post.authorId.toString(),
  createdAt: post.createdAt.toISOString(),
}))
```

### Server-side Ownership Verification
Delete and edit operations verify the session user matches the post author — entirely on the server:
```ts
if (authorId !== session.userId) {
  throw new Error('Unauthorized: You cannot delete this post')
}
await BlogPost.findByIdAndDelete(postId)
```

### ObjectId Validation Before DB Query
Prevents Mongoose `CastError` crashes on invalid URL params:
```ts
if (!mongoose.Types.ObjectId.isValid(id)) {
  notFound()
}
```

---

## ⚙️ Server Actions

All data mutations live in `app/actions.ts`:

| Action | Auth Required | Description |
|---|---|---|
| `getAllPost()` | ❌ | Fetch all posts, newest first |
| `getUserPost(userId)` | ✅ | Fetch posts by a specific user |
| `getPostById(id)` | ❌ | Fetch single post with ID validation |
| `createPost(data)` | ✅ | Create a new blog post |
| `updatePost(postId, data)` | ✅ | Update post (ownership verified) |
| `deletePostById(authorId, postId)` | ✅ | Delete post (ownership verified) |

---

## 🗺 Roadmap

- [x] Email/password authentication
- [x] Create, read, update, delete posts
- [x] Public feed & personal dashboard
- [x] Server-side authorization
- [x] Dark / light mode
- [x] Toast notifications
- [x] 404 handling with `notFound()`
- [ ] Image upload with Cloudinary
- [ ] Like / bookmark system
- [ ] Comment system
- [ ] User profile pages
- [ ] Search and filter posts
- [ ] Pagination / infinite scroll
- [ ] Deploy to Vercel

---

## 👨‍💻 Author

**Sundeep Amit**

[![GitHub](https://img.shields.io/badge/GitHub-sundeepamit-181717?style=for-the-badge&logo=github)](https://github.com/sundeepamit)

---

<div align="center">

If you found this helpful, please consider giving it a ⭐

<br/>

_Built with ❤️ and a lot of `console.log` debugging_

</div>