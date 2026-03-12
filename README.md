# Promise Holding Properties

A Next.js 15 frontend for Promise Assets — property listings, services, and customer portal.

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env.local
# Edit .env.local with your values

# 3. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## API Architecture

### Overview

The frontend consumes a Laravel backend API at `https://spider.promiseassets.com/api`.

Full Swagger documentation: [https://spider.promiseassets.com/api/documentation](https://spider.promiseassets.com/api/documentation)

### Directory Structure

```
src/
├── types/
│   └── api.ts              # All API request/response TypeScript types
├── lib/
│   ├── api-client.ts        # Centralized HTTP client (fetch wrapper)
│   ├── auth-context.tsx      # React auth context & useAuth() hook
│   └── utils.ts             # General utilities (cn, etc.)
├── services/
│   ├── index.ts             # Re-exports all services
│   ├── auth.service.ts      # Authentication endpoints
│   └── content.service.ts   # Public content endpoints
├── hooks/
│   ├── index.ts             # Re-exports all hooks
│   ├── use-api.ts           # Generic data-fetching hook
│   └── use-content.ts       # Content-specific hooks
├── app/
│   ├── (root)/              # Public pages
│   └── (customer)/          # Protected pages (requires auth)
└── components/
middleware.ts                 # Route protection for /dashboard/*
.env.example                  # Environment variable template
```

### Layer Responsibilities

```
┌─────────────────────────────────────────────────────┐
│  Components / Pages                                  │
│  Use hooks or call services directly                 │
├─────────────────────────────────────────────────────┤
│  Hooks (src/hooks/)                                  │
│  useApi(), useHeaderBanners(), useTestimonials()...  │
│  Manage loading/error state for client components    │
├─────────────────────────────────────────────────────┤
│  Services (src/services/)                            │
│  authService, contentService                         │
│  Map endpoints to typed function calls               │
├─────────────────────────────────────────────────────┤
│  API Client (src/lib/api-client.ts)                  │
│  fetch wrapper, auth header injection, error class   │
└─────────────────────────────────────────────────────┘
```

---

## API Endpoints Reference

### Authentication (`authService`)

| Method | Endpoint                              | Description                          | Auth |
| ------ | ------------------------------------- | ------------------------------------ | ---- |
| POST   | `/check-phone-exists`                 | Check if phone number is registered  | No   |
| POST   | `/login`                              | Login with phone + password          | No   |
| GET    | `/refresh-token`                      | Refresh auth token                   | Yes  |
| POST   | `/google-login`                       | Login via Google OAuth               | No   |
| POST   | `/check-user-exists-by-google-login`  | Check if Google user exists          | No   |
| POST   | `/google-new-user`                    | Complete profile for new Google user | No   |
| GET    | `/profile`                            | Get authenticated user profile       | Yes  |
| POST   | `/logout`                             | Logout and invalidate token          | Yes  |

### Public Content (`contentService`)

| Method | Endpoint          | Description                   | Auth |
| ------ | ----------------- | ----------------------------- | ---- |
| GET    | `/header-banners` | Active header banners         | No   |
| GET    | `/managements`    | Management team members       | No   |
| GET    | `/our-services`   | Company services              | No   |
| GET    | `/our-values`     | Company values                | No   |
| GET    | `/testimonials`   | Customer testimonials         | No   |
| GET    | `/why-choose-us`  | Why choose us stats/counters  | No   |

---

## Usage Examples

### Server Component (recommended for SEO-critical pages)

```tsx
import { contentService } from "@/services";

export default async function HomePage() {
  const { data: banners } = await contentService.getHeaderBanners();
  const { data: testimonials } = await contentService.getTestimonials();

  return (
    <>
      <HeroBanner banners={banners} />
      <TestimonialsSection testimonials={testimonials} />
    </>
  );
}
```

### Client Component (for interactive/dynamic content)

```tsx
"use client";

import { useTestimonials } from "@/hooks";

export function TestimonialSlider() {
  const { data, isLoading, error } = useTestimonials();

  if (isLoading) return <Skeleton />;
  if (error) return <ErrorMessage error={error} />;

  const testimonials = data?.data ?? [];

  return (
    <div>
      {testimonials.map((t) => (
        <TestimonialCard key={t.id} testimonial={t} />
      ))}
    </div>
  );
}
```

### Authentication

```tsx
"use client";

import { useAuth } from "@/lib/auth-context";

export function LoginForm() {
  const { login } = useAuth();

  async function handleSubmit(formData: FormData) {
    await login({
      phone: formData.get("phone") as string,
      password: formData.get("password") as string,
    });
  }

  return <form onSubmit={handleSubmit}>...</form>;
}
```

---

## Adding New API Endpoints

When the backend adds new endpoints, follow these steps:

1. **Add types** in `src/types/api.ts`
2. **Add service method** in the appropriate `src/services/*.service.ts` (or create a new service file)
3. **Re-export** from `src/services/index.ts` if new service file
4. **(Optional)** Add a convenience hook in `src/hooks/`

---

## Environment Variables

| Variable                       | Description                  | Default                                  |
| ------------------------------ | ---------------------------- | ---------------------------------------- |
| `NEXT_PUBLIC_API_BASE_URL`     | Backend API base URL         | `https://spider.promiseassets.com/api`   |
| `NEXT_PUBLIC_GOOGLE_CLIENT_ID` | Google OAuth client ID       | —                                        |
| `NEXT_PUBLIC_AUTH_COOKIE_NAME` | Cookie name for auth token   | `php_token`                              |

---

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **UI:** Radix UI / Shadcn
- **Animations:** Framer Motion
- **Maps:** React Leaflet
- **Backend API:** Laravel (spider.promiseassets.com)
