import { Project } from "@/models/project";

export const projects: Project[] = [
  {
    title: "Move Mentor",
    description: {
      short:
        "A personal fitness tracker that helps users log workouts, track nutrition, and visualize progress through a focused, customizable dashboard.",
      about: [
        "Move Mentor is a personal fitness application designed to help users build consistency and clarity around their health goals. It brings workouts, nutrition, and progress tracking into a single, distraction-free experience focused on daily decision making rather than raw data overload.",
        "The app emphasizes visibility and momentum. Users can quickly see where they stand, what they’ve completed, and what needs attention, without navigating through cluttered charts or unnecessary configuration. The goal is to make tracking feel supportive instead of burdensome.",
        "Move Mentor was built as a real-world product, not a demo. It prioritizes usability, data integrity, and a clear separation between user-facing features and underlying systems, allowing it to grow as requirements evolve.",
      ],
      howItWasBuilt: [
        "Move Mentor was built as a modern full-stack web application using Next.js for routing, server rendering, and API routes. Tailwind CSS was used to rapidly design a responsive UI with a bento-inspired layout that adapts cleanly across screen sizes.",
        "Prisma powers the data layer, providing a strongly typed interface to the database and enabling safe, predictable schema evolution as features expanded. OAuth authentication was integrated to handle user identity securely while keeping the onboarding experience fast and familiar.",
        "The application separates concerns between data access, business logic, and UI rendering, making it easier to iterate on features like progress tracking and dashboard composition without tightly coupling components.",
      ],
      keyFeatures: [
        "OAuth authentication with secure session handling",
        "Personalized bento-style dashboard that adapts to user data",
        "Workout logging with structured exercise entries",
        "Nutrition tracking tied to daily goals",
        "Real-time progress indicators and summaries",
        "Goal-driven insights to highlight trends over time",
        "Responsive design optimized for desktop and mobile",
        "Strongly typed data models with Prisma for reliability",
      ],
    },
    images: {},
    tags: ["React", "Next.js", "Prisma", "PostgreSQL", "Docker"],
    slug: "move-mentor",
    live: "",
    github: { monorepo: "https://github.com/Travisaurus-Rex/move-mentor" },
  },
  {
    title: "Bazaar API",
    description: {
      short:
        "A multi-tenant marketplace backend focused on domain modeling, data integrity, and scalable application architecture.",
      about: [
        "Bazaar API is a production-style backend built to model the real mechanics of an online marketplace. It handles authentication, product management, carts, orders, and reviews while enforcing clear domain boundaries and role-based access.",
        "The project focuses on translating business rules into clean, maintainable backend logic. Buyers, sellers, and admins each have defined capabilities, and every feature is backed by persistent data, validation, and authorization. The goal was not to build a demo API, but a backend that reflects how real commerce systems behave.",
        "Bazaar API was also built to be extended. Its structure supports future features like moderation, search, payments, and media uploads without needing architectural rewrites.",
      ],
      howItWasBuilt: [
        "The API is built using Nest.js with a modular architecture that separates concerns by domain. Each feature area lives in its own module with controllers handling routing and services encapsulating business logic.",
        "Prisma is used as the database layer, providing type-safe access to PostgreSQL and enforcing relational integrity across users, products, carts, orders, and reviews. DTOs and validation pipes ensure all incoming data is validated at the boundary.",
        "Authentication is handled using JWTs, with guards applied at the route level to enforce access rules. Role-based authorization determines what actions buyers, sellers, and admins are allowed to perform.",
        "The project supports local development with Docker and uses Prisma migrations to manage schema changes in a repeatable way.",
      ],
      keyFeatures: [
        "Role-based access for buyers, sellers, and admins",
        "One persistent cart per user with server-side state",
        "Order creation with item snapshots and total calculation",
        "Review system restricted to verified purchases",
        "Modular Nest.js architecture with clear domain boundaries",
        "Type-safe database access with Prisma",
        "DTO-based validation and guarded routes",
        "Marketplace-ready data model supporting future expansion",
      ],
    },
    images: {},
    tags: ["TypeScript", "Nest.js", "Prisma", "PostgreSQL", "Docker"],
    slug: "bazaar",
    live: "",
    github: {
      monorepo:
        "https://github.com/Travisaurus-Rex/bazaar-api/tree/nest-migration",
    },
  },
  {
    title: "Dough Lab",
    description: {
      short:
        "A focused React app that calculates pizza dough formulas from pan geometry and style using type-safe logic and baker’s percentages.",
      about: [
        "Dough Lab is a small, logic-driven React application built to explore how clear domain modeling and type safety can simplify real-world calculations. Instead of focusing on visual polish, the project emphasizes predictable data flow, explicit math, and reusable abstractions. It turns geometric inputs and style rules into precise ingredient breakdowns while keeping the codebase readable and easy to reason about.",
      ],
      howItWasBuilt: [
        "The app is structured around a simple calculation pipeline that separates concerns cleanly. Pan geometry is modeled with discriminated unions to ensure only valid dimensions are accepted. Style rules are mapped to density values, which feed into a single calculation function that derives total dough weight and ingredient ratios using baker’s percentages. Global state is managed with a lightweight store, and shared UI controls are implemented as generic, strongly typed components to avoid duplication.",
      ],
      keyFeatures: [
        "Geometry-aware dough calculations using discriminated unions",
        "Style-based dough density modeling",
        "Baker’s percentage ingredient breakdown",
        "Metric and imperial output rendered side by side",
        "Global state with minimal, focused subscriptions",
        "Reusable, type-safe form controls",
        "Explicit, readable calculation pipeline over “magic” abstractions",
      ],
    },
    images: {},
    tags: ["React", "TypeScript", "Zustand", "Vite"],
    slug: "doughlab",
    live: "",
    github: {
      monorepo: "https://github.com/Travisaurus-Rex/dough-lab",
    },
  },
  {
    title: "Omni Outdoor Living",
    description: {
      short:
        "An e-commerce platform for outdoor lifestyle products, built to bring Meyer Distributing’s massive inventory to retail users.",
      about: [
        "Omni Outdoor Living extends Meyer Distributing’s product ecosystem to direct-to-consumer audiences, providing a full-featured e-commerce experience for outdoor and RV gear.",
        "The platform emphasizes performance, mobile-first design, and shared codebases across domains for maintainability.",
      ],
      howItWasBuilt: [
        "Developed using Blazor and C# on the .NET framework, backed by SQL Server and Entity Framework for ORM. Stripe integration powers secure checkout.",
        "Reusable architecture supports multiple branded sites (including Omni Garage) while maintaining separate theming and analytics.",
      ],
      keyFeatures: [
        "Custom filtering system for large product catalogs",
        "Responsive design optimized for all devices",
        "Shared architecture with sibling sites to reduce duplication",
        "Secure checkout and Stripe integration",
      ],
    },
    images: {
      mainDesktop: "/projects/omnioutdoorliving.com_.jpg",
      mainMobile: "/projects/omnioutdoorliving.com_mobile.jpg",
      thumbnail: "/projects/omnioutdoorliving_thumbnail.png",
    },
    tags: ["Blazor", "C#", ".NET", "SQL Server", "Stripe"],
    slug: "omni-outdoor-living",
    live: "https://omnioutdoorliving.com/",
  },
  {
    title: "Omni Garage",
    description: {
      short:
        "A B2C platform for automotive tools and accessories, built with a shared architecture to Omni Outdoors.",
      about: [
        "Omni Garage delivers a streamlined e-commerce experience focused on automotive tools and garage equipment. It shares backend systems with Omni Outdoor Living while maintaining its own brand identity and UX design.",
        "Its architecture allows centralized inventory management and reporting across multiple retail sites, making it scalable and cost-efficient.",
      ],
      howItWasBuilt: [
        "Built with Blazor and C# on a shared .NET backend and SQL Server database. The front end was customized to reflect a more industrial theme and user journey tailored for mechanics and DIYers.",
        "Stripe integrations and modular components were reused across sibling platforms for faster iteration cycles.",
      ],
      keyFeatures: [
        "Distinct branding and layout for automotive products",
        "Shared backend with Omni Outdoor Living for maintainability",
        "Stripe integration for secure payments and analytics",
        "Optimized performance through shared caching and services",
      ],
    },
    images: {
      mainDesktop: "/projects/omnigarage.com_.jpg",
      mainMobile: "/projects/omnigarage.com_mobile1.jpg",
      thumbnail: "/projects/omnigarage_thumbnail.png",
    },
    tags: ["Blazor", "C#", ".NET", "SQL Server", "Stripe"],
    slug: "omni-garage",
    live: "https://omnigarage.com/",
  },
  {
    title: "Meyer Online",
    description: {
      short:
        "A B2B ordering platform for automotive dealers, connecting thousands of customers to Meyers live inventory network.",
      about: [
        "Meyer Online is Meyer Distributing’s central B2B portal, supporting complex search, live warehouse data, and mobile-first design. It replaced legacy ordering systems with a unified modern web platform.",
        "The system provides access to real-time pricing, dealer-specific tools, and warehouse fulfillment visibility across hundreds of brands and product lines.",
      ],
      howItWasBuilt: [
        "Developed using Angular and Ionic for a shared codebase across desktop and mobile, powered by a .NET backend and SQL Server database.",
        "Barcode scanning, deep filtering, and warehouse-level tracking were implemented to optimize usability and reliability for dealers nationwide.",
      ],
      keyFeatures: [
        "24/7 live inventory access across distribution centers",
        "Dealer tools including returns, tracking, and ETA updates",
        "Cross-platform support via Ionic",
        "Advanced search and filtering with legacy system compatibility",
      ],
    },
    images: {
      mainDesktop: "/projects/meyeronline_1.jpg",
      mainMobile: "/projects/meyeronline_mobile1.png",
      thumbnail: "/projects/meyeronline_thumbnail.png",
    },
    tags: ["Angular", "Ionic", "C#", ".NET", "SQL Server"],
    slug: "meyer-online",
    live: "https://online.meyerdistributing.com/",
    android:
      "https://play.google.com/store/apps/details?id=com.meyerdistributing.online&hl=en",
    ios: "https://apps.apple.com/us/app/meyer-online/id1487143055",
  },
  {
    title: "Not by the Cover",
    description: {
      short:
        "A book discovery app that helps readers find new titles based on substance, not appearance.",
      about: [
        "Not by the Cover was inspired by the idea that book discovery should focus on story, not marketing. The app introduces users to books through genres, tags, and short summaries without revealing cover art — letting curiosity drive exploration rather than aesthetics.",
        "It blends frontend presentation with an expressive GraphQL backend, letting users browse, filter, and reveal titles dynamically with smooth transitions and contextual data fetching.",
      ],
      howItWasBuilt: [
        "The frontend is built with React and styled using Tailwind CSS, consuming a Node.js + Express backend that serves GraphQL queries. The API layer handles book metadata, recommendations, and progressive content exposure.",
        "State is managed with React Context and Apollo Client, and all interactions are optimized for fast client-side navigation with lazy loading for details and images.",
      ],
      keyFeatures: [
        "Genre-based book discovery without visual bias",
        "Dynamic 'reveal' interactions built with GraphQL queries",
        "Responsive layout optimized for mobile and desktop",
        "Extensible backend design that could integrate with AI-driven book recommendations",
      ],
    },
    images: {
      mainDesktop: "",
      mainMobile: "",
    },
    tags: ["React", "Node.js", "GraphQL", "Tailwind"],
    github: {
      frontend: "https://github.com/Travisaurus-Rex/not-by-the-cover-frontend",
      backend: "https://github.com/Travisaurus-Rex/not-by-the-cover",
    },
    slug: "not-by-the-cover",
    live: "https://main.dw74p0jh6b26k.amplifyapp.com/",
  },
  {
    title: "ListMate",
    description: {
      short:
        "A real-time, shareable list-making app designed for seamless collaboration and simplicity.",
      about: [
        "ListMate makes creating, sharing, and tracking lists effortless. Whether managing tasks, groceries, or team checklists, it syncs changes instantly across devices using web sockets.",
        "Users can invite collaborators, mark items complete, or delete them with intuitive swipe gestures. Authentication and data storage are powered by Supabase, ensuring security and reliability.",
      ],
      howItWasBuilt: [
        "Built with React Native and Expo for cross-platform deployment, ListMate uses Supabase for both authentication and real-time data updates via channels.",
        "Socket.io ensures collaborative editing, while styled components and custom hooks manage dynamic UI updates. The backend enforces row-level security to isolate user data.",
      ],
      keyFeatures: [
        "Real-time list updates via Supabase subscriptions",
        "Cross-platform design (Android + iOS) using React Native",
        "Secure multi-user collaboration with granular access rules",
        "Offline support and optimistic UI updates for smooth UX",
      ],
    },
    images: {
      mainDesktop: "",
      mainMobile: "",
    },
    tags: ["React Native", "Expo", "Supabase", "Socket.io"],
    github: {
      monorepo: "https://github.com/Travisaurus-Rex/shopping-list",
    },
    slug: "listmate",
    live: "",
  },
  {
    title: "Snipr",
    description: {
      short:
        "A modern, privacy-conscious URL shortener built with Go and React, featuring analytics and RESTful API support.",
      about: [
        "Snipr was built to explore backend performance patterns in Go while providing a clean React frontend for users to create and manage short links.",
        "It focuses on simplicity, speed, and transparency — users can shorten URLs, track click metrics, and manage links through a responsive dashboard.",
      ],
      howItWasBuilt: [
        "The backend is written in Go using the Fiber framework, with PostgreSQL for persistent storage. The API is structured with RESTful endpoints supporting both public and authenticated requests.",
        "The React frontend consumes the Go API, featuring a minimalist design with server state handled via React Query. Authentication uses JWT tokens with secure cookie storage.",
      ],
      keyFeatures: [
        "Fast URL shortening with Go and Fiber",
        "Analytics dashboard with click tracking and referrer insights",
        "JWT-based authentication and role-based link management",
        "Responsive UI built with React and Tailwind CSS",
      ],
    },
    images: {
      mainDesktop: "",
      mainMobile: "",
    },
    tags: ["Go", "React", "PostgreSQL", "Tailwind"],
    github: {
      frontend: "https://github.com/Travisaurus-Rex/snipr-react",
      backend: "https://github.com/Travisaurus-Rex/snipr",
    },
    slug: "snipr",
    live: "",
  },
];
