export const projects = [
    {
      title: 'Not by the Cover',
      description: {
        short: 'A book discovery app that helps readers find new titles based on substance, not appearance. Instead of displaying cover art upfront, the app introduces books through their genres and a one-sentence summary, encouraging more thoughtful, unbiased exploration. Users can browse, reveal, and learn more about books only after engaging with the core details that matter most.',
        about: ['', ''],
        howItWasBuilt: [''],
        keyFeatures: ['First paragraph', 'second paragraph']
      },
      image: '',
      tags: ['React', 'Node.js', 'GraphQL'],
      github: 'https://github.com/Travisaurus-Rex/not-by-the-cover',
      slug: '',
      live: '',
      featured: true
    },
    {
      title: 'ListMate',
      description: {
        short: 'A real-time, shareable list-making app designed for seamless collaboration and simplicity. Users can create multiple lists, add or remove items, mark them as completed, and share lists with others for real-time updates via web sockets. The UI is clean and responsive, with support for both light and dark mode. The app uses Supabase for authentication and data storage, and React Native for a cross-platform mobile experience. Features include swipe-to-delete, state-aware loading indicators, and row-level security for user data protection.',
        about: ['', ''],
        howItWasBuilt: [''],
        keyFeatures: ['First paragraph', 'second paragraph'],
      },
      image: '',
      tags: ['React Native', 'Expo', 'Socket.io', 'Supabase'],
      github: 'https://github.com/Travisaurus-Rex/shopping-list',
      slug: '',
      live: '',
      featured: true
    },
    {
      title: 'Omni Outdoor Living',
      description: {
        short: 'A consumer-facing e-commerce platform for grills, patio furniture, and RV accessories, designed to bring Meyer Distributing’s product catalog directly to end users through a fast, mobile-friendly shopping experience.',
        about: [
          'Omni Outdoor Living was built as part of Meyer Distributing’s push into the direct-to-consumer space. The site offers a wide catalog of outdoor lifestyle products and accessories, powered by real-time inventory data and Stripe-based payment processing.',
          'We designed and implemented a flexible architecture using reusable components across multiple domains. This allowed Omni Outdoor Living to share a codebase and backend services with its sibling site, Omni Garage, while maintaining a distinct look and brand identity.'
        ],
        howItWasBuilt: [
          'The site was built using Blazor and C# on the .NET framework, backed by a SQL Server database and Entity Framework for ORM. Responsive design was a priority from the beginning, with careful attention to mobile UI patterns and performance optimization.',
          'Stripe was integrated for payment processing, and a dynamic filtering system was developed to help users navigate a large and varied product catalog across categories like grills, RV accessories, and outdoor furniture.'
        ],
        keyFeatures: [
          'Custom filtering system for navigating a large inventory of products by brand, category, and attributes',
          'Fully responsive interface tailored for mobile, tablet, and desktop users',
          'Reusable architecture shared with Omni Garage to reduce duplication and accelerate feature development',
          'Secure checkout experience with Stripe payment integration and customer-friendly cart functionality'
        ]
      },
      image: '/omni_outdoors.png',
      tags: ['Blazor', 'C#', '.NET', 'SQL Server', 'Stripe'],
      slug: 'omni-outdoor-living',
      github: '',
      live: 'https://omnioutdoorliving.com/',
      featured: false
    },
    {
      title: 'Omni Garage',
      description: {
        short: 'An e-commerce site tailored for automotive enthusiasts and DIYers, offering tools, truck accessories, and garage equipment through a streamlined, mobile-friendly shopping experience.',
        about: [
          'Omni Garage was developed as a sibling site to Omni Outdoor Living, with both platforms built on a shared codebase and backend services. Despite this, Omni Garage stands apart with its own branding, product categories, and design choices that reflect the needs of a more utility-driven customer base.',
          'This site targets a different slice of Meyer Distributing’s catalog—focusing on practical gear for garages, trucks, and workspaces—and was built to serve both hobbyists and small business owners looking for high-quality, reliable tools and parts.'
        ],
        howItWasBuilt: [
          'The frontend was built with Blazor and C#, connected to a .NET backend and SQL Server database. Shared services between Omni Garage and Outdoor Living include the cart, inventory system, and checkout pipeline, but Omni Garage features customized category layouts, unique marketing assets, and a separate Stripe integration for tracking performance by domain.',
          'We also implemented a flexible product filtering system optimized for large inventories, which included brand filtering for Meyer’s proprietary truck accessory line, ProMaxx.'
        ],
        keyFeatures: [
          'Distinct UI theme and category structure focused on automotive and garage-related gear',
          'Integrated Stripe checkout with custom reporting hooks per domain',
          'Filterable product catalog with support for brands like ProMaxx and other major equipment manufacturers',
          'Shared architecture with Omni Outdoor Living, enabling faster development cycles and easier maintenance across projects'
        ]
      },
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop',
      tags: ['Blazor', 'C#', '.NET', 'SQL Server', 'Stripe'],
      slug: 'omni-garage',
      github: '',
      live: 'https://omnigarage.com/',
      featured: false
    },
    {
      title: 'Meyer Online',
      description: {
        short: 'A robust B2B platform enabling dealers to browse, order, and manage Meyer Distributing’s expansive product catalog across multiple warehouses—all from desktop or mobile.',
        about: [
          'Meyer Online is the primary digital portal for thousands of automotive, outdoor, and industrial dealers across North America. It was built to replace an aging legacy system and introduce modern e-commerce standards to Meyer’s internal systems and dealer-facing tools.',
          'This project focused on creating a seamless experience across web and mobile, offering real-time inventory lookup, deep filtering tools, and user account features tailored for high-volume B2B operations.'
        ],
        howItWasBuilt: [
          'The web platform was developed using Angular and Ionic, backed by a .NET API and SQL Server database. Entity Framework was used to streamline data modeling and ORM access. The mobile app was built using the same codebase, with platform-specific adaptations where needed.',
          'Key challenges included implementing robust filtering by vehicle year/make/model, real-time inventory querying across multiple warehouses, barcode scanning integration, and managing legacy data with minimal disruption to active users.'
        ],
        keyFeatures: [
          '24/7 ordering with real-time inventory across multiple distribution centers',
          'Advanced search by year, make, model; keyword; part number; or product category',
          'Barcode scanning for instant product lookup, reordering previous purchases, and initiating returns',
          'Custom dealer tools including return submissions, cutoff time visibility, and delivery ETA tracking',
          '“Clearance Center” for browsing discounted overstock and submitting custom offers on slow-moving inventory',
          'Shared codebase between desktop and mobile using Ionic for consistent UX and faster releases'
        ]
      },
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      tags: ['Angular', 'Ionic', 'C#', '.NET', 'SQL Server', 'Entity Framework'],
      slug: 'meyer-online',
      github: '',
      live: 'https://online.meyerdistributing.com/',
      featured: false
    }
  ];