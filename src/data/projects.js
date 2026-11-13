import skincareImg from "../assets/skincare.webp";

/*
  All project info lives here. The card on the home page and the detail page
  both read from this one array.

  To add a project: copy one object, give it a unique `slug` (it becomes the URL:
  /projects/your-slug), and fill in the fields.

  NOTE: `overview`, `features` and `role` below are starter text based on your
  existing descriptions. Replace them with your real details.
*/
export const projects = [
  {
    slug: "library-dashboard",
    title: "Library Dashboard",
    desc: "Real-time analytics dashboard intergrate with database",
    tags: ["Php", "MySQL"],
    color: "#60a5fa",
    year: "2024",
    type: "Web app",
    role: "Full-stack developer",
    link: "https://github.com/baikimhouy/Library_dashboard_php",
    live: "", // add a live demo URL if you have one
    overview: [
      "A dashboard for managing and analysing library data, built with PHP and backed by a MySQL database.",
      "Replace this paragraph with what problem it solves, who it is for, and what you learned building it.",
    ],
    features: [
      "Analytics views driven by data stored in MySQL",
      "Server-side PHP pages connected to the database",
      "Add your own highlights here (login, search, charts, CRUD...)",
    ],
    images: [], // import screenshots at the top of this file and list them here
  },
  {
    slug: "eternal-shine-mobile-app",
    title: "Eternal shine mobile app",
    desc: "Eternal Shine is a skincare and beauty e-commerce mobile application built with Flutter and Dart. The app focuses on a clean shopping experience where users can explore skincare products.",
    tags: ["Flutter", "Dart"],
    color: "#3b82f6",
    year: "2026",
    type: "Mobile app",
    role: "Mobile developer",
    link: "https://github.com/Vuthy-Tourn/flutter_assignment",
    live: "",
    overview: [
      "Eternal Shine is a skincare and beauty e-commerce mobile application built with Flutter and Dart.",
      "The app focuses on a clean shopping experience where users can explore skincare products.",
    ],
    features: [
      "Browse and explore skincare products",
      "Clean, simple shopping flow",
      "Cross-platform build with Flutter",
    ],
    images: [skincareImg],
  },
  {
    slug: "pos-system-java-swing",
    title: "POS System — Java Swing",
    desc: "Point-of-sale system built with Java Swing for managing sales and inventory.",
    tags: ["Java", "Swing"],
    color: "#bfdbfe",
    year: "2025",
    type: "Desktop app",
    role: "Developer",
    link: "https://github.com/Vuthy-Tourn/assignment-java-swing",
    live: "",
    overview: [
      "A point-of-sale desktop application built with Java Swing for managing sales and inventory.",
      "Replace this paragraph with how it works and what you built yourself.",
    ],
    features: [
      "Sales management",
      "Inventory management",
      "Desktop UI built with Java Swing",
    ],
    images: [],
  },
  {
    slug: "nova-studio-clothing-store",
    title: "Nova Studio E-commerce Clothing Store",
    desc: "E-commerce clothing store with Laravel, and admin dashboard.",
    tags: ["Laravel", "MySQL", "Bootstrap"],
    color: "#3b82f6",
    year: "2025",
    type: "Web app",
    role: "Full-stack developer",
    link: "https://github.com/Vuthy-Tourn/clothing-store",
    live: "",
    overview: [
      "An e-commerce clothing store built with Laravel, including an admin dashboard for managing the shop.",
      "Replace this paragraph with the story behind the project.",
    ],
    features: [
      "Storefront for browsing clothing",
      "Admin dashboard",
      "Laravel + MySQL backend, Bootstrap UI",
    ],
    images: [],
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
