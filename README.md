# LearnHub Dashboard

A modern learning dashboard built for the Frontend Internship Challenge.

## Tech Stack

* Next.js (App Router)
* TypeScript
* Supabase
* Tailwind CSS
* Framer Motion
* Lucide React

## Features

* Bento Grid Dashboard Layout
* Dynamic Course Data from Supabase
* Server Component Data Fetching
* Animated Progress Bars
* Framer Motion Staggered Animations
* Hero Section with Learning Streak
* Weekly Activity Chart
* Responsive Design (Desktop, Tablet, Mobile)
* Loading Skeletons
* Error Handling
* Sidebar Navigation with Active State Animation

## Database Schema

### courses

| Column     | Type      |
| ---------- | --------- |
| id         | uuid      |
| title      | text      |
| progress   | integer   |
| icon_name  | text      |
| created_at | timestamp |

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Installation

```bash
npm install
npm run dev
```

## Live Demo

https://learnhub-dashboard-d5f36s0fe-pavitraganesan1403-5650s-projects.vercel.app/dashboard

## GitHub Repository

https://github.com/Pavitra03-stud/learnhub-dashboard

## Architecture

* Next.js App Router used for routing and Server Components.
* Supabase used as the PostgreSQL backend.
* Data fetched securely using Server Components.
* Framer Motion used for animations and micro-interactions.
* Tailwind CSS used for responsive styling and layout.

## Challenges Faced

* Implementing responsive sidebar behavior across desktop, tablet, and mobile layouts.
* Creating staggered Framer Motion animations without layout shifts.
* Dynamically rendering Lucide icons from Supabase data.
* Managing Server Component data fetching with loading and error states.

## Author

Pavitra GV
