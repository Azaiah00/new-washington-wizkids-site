# 🔐 Phase 2: Better-Auth Integration Guide

This guide will walk you through adding Better-Auth authentication to the Washington WizKids site.

## What is Better-Auth?

Better-Auth is a modern authentication library for Next.js that provides:
- Email/password authentication
- Social login (Google, GitHub, etc.)
- Session management
- Protected routes
- TypeScript support

## Installation

```bash
npm install better-auth
```

## Step 1: Database Setup

Choose your database (Supabase recommended for ease of use):

### Option A: Supabase (Recommended)

1. Create a free account at [supabase.com](https://supabase.com)
2. Create a new project
3. Get your connection string from Settings > Database
4. Add to `.env.local`:

```env
DATABASE_URL=postgresql://...
```

### Option B: PostgreSQL (Self-hosted)

1. Install PostgreSQL locally or use a hosted service
2. Create a database named `wizkids`
3. Add connection string to `.env.local`

## Step 2: Better-Auth Configuration

Create `lib/auth.ts`:

```typescript
import { betterAuth } from "better-auth"
import { prisma } from "./prisma"

export const auth = betterAuth({
  database: prisma,
  emailAndPassword: {
    enabled: true,
  },
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60, // 5 minutes
    },
  },
})

export type Session = typeof auth.$Infer.Session
```

## Step 3: Create Auth API Route

Create `app/api/auth/[...all]/route.ts`:

```typescript
import { auth } from "@/lib/auth"
import { toNextJsHandler } from "better-auth/next-js"

export const { GET, POST } = toNextJsHandler(auth.handler)
```

## Step 4: Create Auth Components

### Sign Up Component

Create `app/components/auth/SignUpForm.tsx`:

```typescript
'use client'

import { useState } from 'react'
import { signUp } from '@/lib/auth-client'

export default function SignUpForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    await signUp.email({
      email,
      password,
      name,
    })
    
    // Redirect to dashboard
    window.location.href = '/dashboard'
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block font-bold">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block font-bold">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      
      <div>
        <label htmlFor="password" className="block font-bold">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      
      <button
        type="submit"
        className="w-full bg-wizards-red text-white py-2 rounded font-bold hover:bg-wizards-navy"
      >
        Sign Up
      </button>
    </form>
  )
}
```

### Login Component

Create `app/components/auth/LoginForm.tsx`:

```typescript
'use client'

import { useState } from 'react'
import { signIn } from '@/lib/auth-client'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    await signIn.email({
      email,
      password,
    })
    
    // Redirect to dashboard
    window.location.href = '/dashboard'
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block font-bold">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      
      <div>
        <label htmlFor="password" className="block font-bold">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      
      <button
        type="submit"
        className="w-full bg-wizards-red text-white py-2 rounded font-bold hover:bg-wizards-navy"
      >
        Log In
      </button>
    </form>
  )
}
```

## Step 5: Protected Routes

Create middleware for protected routes at `middleware.ts`:

```typescript
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { auth } from './lib/auth'

export async function middleware(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: request.headers,
  })

  // Protect premium routes
  if (request.nextUrl.pathname.startsWith('/premium')) {
    if (!session) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  // Protect dashboard
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    if (!session) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/premium/:path*', '/dashboard/:path*'],
}
```

## Step 6: Update InsiderSection

Replace the placeholder in `app/components/InsiderSection.tsx`:

```typescript
import Link from 'next/link'

// ... in the component JSX, replace the placeholder div with:

<div className="lg:w-1/2 mt-8 lg:mt-0">
  <div className="bg-gray-100 p-8 rounded-lg">
    <h3 className="text-2xl font-bold text-wizards-navy mb-4">
      Join the Insider Club
    </h3>
    <p className="text-gray-600 mb-6">
      Get exclusive access to premium content, betting insights, and insider analysis.
    </p>
    <Link
      href="/signup"
      className="block w-full bg-wizards-red text-white py-3 rounded-lg font-bold text-center hover:bg-wizards-navy transition"
    >
      Sign Up Now
    </Link>
    <p className="text-center mt-4 text-sm text-gray-600">
      Already a member?{' '}
      <Link href="/login" className="text-wizards-red font-semibold hover:underline">
        Log In
      </Link>
    </p>
  </div>
</div>
```

## Step 7: Create Auth Pages

### Sign Up Page: `app/signup/page.tsx`

```typescript
import SignUpForm from '@/app/components/auth/SignUpForm'

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-anton text-wizards-navy mb-6 text-center">
            BECOME AN INSIDER
          </h1>
          <SignUpForm />
        </div>
      </div>
    </div>
  )
}
```

### Login Page: `app/login/page.tsx`

```typescript
import LoginForm from '@/app/components/auth/LoginForm'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-anton text-wizards-navy mb-6 text-center">
            WELCOME BACK
          </h1>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
```

### Dashboard Page: `app/dashboard/page.tsx`

```typescript
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-anton text-wizards-navy mb-8">
          Welcome, {session.user.name}!
        </h1>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-2">Your Tokens</h2>
            <p className="text-3xl font-anton text-wizards-red">0</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-2">Membership</h2>
            <p className="text-lg font-semibold text-wizards-navy">Free Tier</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-2">Next Drop</h2>
            <p className="text-lg">Coming Soon</p>
          </div>
        </div>
      </div>
    </div>
  )
}
```

## Step 8: Update Header

Add login/logout buttons to `app/components/Header.tsx`:

```typescript
// Add this import at the top
import { auth } from '@/lib/auth'

// In the component, get session:
const session = await auth.api.getSession({
  headers: await headers(),
})

// Add to desktop nav (before or after existing links):
{session ? (
  <>
    <Link href="/dashboard" className="nav-link">
      Dashboard
    </Link>
    <form action="/api/auth/signout" method="POST">
      <button type="submit" className="nav-link">
        Log Out
      </button>
    </form>
  </>
) : (
  <Link href="/login" className="nav-link">
    Log In
  </Link>
)}
```

## Testing Authentication

1. Start dev server: `npm run dev`
2. Navigate to `/signup`
3. Create an account
4. Check database to see user created
5. Try logging in at `/login`
6. Access `/dashboard` (should work when logged in)
7. Log out and try `/dashboard` (should redirect to login)

## Security Checklist

- [ ] Database credentials in `.env.local` (not committed to git)
- [ ] HTTPS enabled in production
- [ ] CSRF protection enabled (Better-Auth handles this)
- [ ] Password requirements enforced
- [ ] Email verification (optional but recommended)
- [ ] Rate limiting on auth endpoints

## Next: Phase 3

Once authentication is working, you can move on to:
- Stripe integration for paid subscriptions
- Token system for merch redemption
- Premium content gates
- User roles and permissions

---

**Need help?** Check the [Better-Auth docs](https://www.better-auth.com/docs)

