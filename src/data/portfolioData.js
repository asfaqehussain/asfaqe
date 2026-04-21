export const personalInfo = {
    name: "Asfaqe Hussain",
    title: "Software Engineer",
    tagline: "Building scalable mobile apps with real-time, offline-first & AI-driven systems",
    email: "asfaqeh@gmail.com",
    location: "Ahmedabad, Gujarat, India",
    bio: "Software Engineer with about 5 years of experience building production-grade mobile applications. Specializing in cross-platform mobile development with React Native, real-time systems, offline-first architecture, and AI-driven features with end-to-end deployment on Android and iOS.",
    resumeUrl: "https://drive.google.com/file/d/154BzwlHeNJbSFRA3-rS3qcAGQE3xk7in/view?usp=sharing",
    social: {
        github: "https://github.com/asfaqehussain",
        linkedin: "https://linkedin.com/in/asfaqehussain",
    },
    currentOrg: {
        name: "Bacancy Technology Pvt. Ltd.",
        role: "Software Engineer - Mobile",
        duration: "Feb 2025 - Present",
        responsibilities: [
            "Developing scalable cross-platform mobile applications using React Native.",
            "Working on real-time systems, offline-first architecture, and AI-driven features.",
            "Managing end-to-end development and deployment for Android and iOS.",
        ],
    },
};



export const projects = [
    {
        id: 1,
        title: "Field Service Management Platform",
        description: "Offline-first mobile app for managing work orders, inspections, and real-time technician workflows with GPS tracking and backend integration.",
        image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=800",
        tags: ["React Native", "Node.js", "Express", "SQLite", "React Query"],
        github: "#",
        live: "https://apps.apple.com/ca/app/total-service-mobile-tsm/id6761250341",
    },
    {
        id: 2,
        title: "AI Productivity Platform",
        description: "AI-powered mobile app integrating tasks, notes, email, and chat with real-time updates and intelligent automation.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
        tags: ["React Native", "AI", "WebSockets", "React Query"],
        github: "#",
        live: "https://apps.apple.com/gb/app/warpspeed/id6744610457",
    },
    {
        id: 3,
        title: "Gold Trading & Delivery Platform",
        description: "Real-time tracking and delivery system with background location tracking, navigation, and live driver updates.",
        image: "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?w=800",
        tags: ["React Native", "WebSockets", "Google Maps", "Background Location"],
        github: "#",
        live: "https://play.google.com/store/apps/details?id=com.goldbank.premiumcollection.app",
    },
    {
        id: 4,
        title: "Collabstr Mobile App",
        description: "Influencer marketplace app with real-time messaging, creator profiles, and Stripe-based payment integration.",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
        tags: ["React Native", "Redux", "Stripe", "WebSockets", "AWS S3"],
        github: "#",
        live: "https://collabstr.com",
    },
    {
        id: 5,
        title: "OtterBoutMyDay",
        description: "Subscription-based lifestyle app with in-app purchases via React Native IAP and real-time features using Socket.IO. Optimized API calls and rendering logic, improving performance by 30%.",
        image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800",
        tags: ["React Native", "React Native IAP", "Socket.IO", "Subscriptions"],
        github: "#",
        live: "https://apps.apple.com",
        liveAlt: "https://play.google.com",
    },
    {
        id: 6,
        title: "Neta App",
        description: "Social-first mobile app with RevenueCat subscription management, Instagram Stories & WhatsApp sharing, remote config, and rich animations. Improved performance by 40% through refactoring and reusable components.",
        image: "https://images.unsplash.com/photo-1611162616305-c69b3396de6c?w=800",
        tags: ["React Native", "RevenueCat", "Animations", "Remote Config", "Social Sharing"],
        github: "#",
        live: "https://play.google.com",
    },
    {
        id: 7,
        title: "Hotel Management App",
        description: "Enterprise hotel management app with a ticketing system for inspection issues, offline support via local storage, push notifications, and encrypted data handling using CryptoJS.",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
        tags: ["React Native", "Redux", "Firebase", "Local Storage", "CryptoJS"],
        github: "#",
        live: "#",
    },
];


export const experience = [
    {
        id: 1,
        company: "Bacancy Technology Pvt. Ltd.",
        role: "Software Engineer - Mobile",
        location: "Ahmedabad",
        duration: "Feb 2025 – Present",
        current: true,
        highlights: [
            "Developing scalable cross-platform mobile applications using React Native.",
            "Working on real-time systems, offline-first architecture, and AI-driven features.",
            "Managing end-to-end development and deployment for Android and iOS.",
        ],
    },
    {
        id: 2,
        company: "WebMavericks SoftCoders Pvt. Ltd.",
        role: "Frontend Engineer",
        location: "Jaipur",
        duration: "Oct 2023 – Jan 2025",
        current: false,
        highlights: [
            "Built and maintained cross-platform mobile apps with React Native.",
            "Implemented in-app purchases using RevenueCat and React Native IAP for subscription monetization.",
            "Integrated real-time features via Socket.IO and improved app performance by up to 40%.",
        ],
    },
    {
        id: 3,
        company: "WeblineIndia Pvt. Ltd.",
        role: "Jr. Developer",
        location: "Ahmedabad",
        duration: "Aug 2021 – Sept 2023",
        current: false,
        highlights: [
            "Developed mobile applications for Android & iOS with robust functionality and user-friendly interfaces.",
            "Collaborated in an agile team environment, enhancing project delivery and timely releases.",
            "Optimized app performance through clean code practices, achieving 30% reduction in load times and 20% increase in user retention.",
        ],
    },
];

export const skills = [
    { category: "Mobile Development", items: ["React Native", "JavaScript", "TypeScript"] },
    { category: "State & Data", items: ["Redux", "Zustand", "React Query"] },
    { category: "Backend & APIs", items: ["Node.js", "Express", "REST APIs", "GraphQL"] },
    { category: "Real-time & Features", items: ["WebSockets", "Offline-first", "Background Location", "Push Notifications"] },
    { category: "Payments", items: ["Stripe", "RevenueCat", "React Native IAP"] },
    { category: "Tools", items: ["Android Studio", "Xcode", "Firebase", "CI/CD", "Git", "Cursor", "Claude"] },
];



export const awards = [
    {
        title: "Employee of the Quarter",
        org: "Bacancy Technology Pvt. Ltd.",
        year: "2026",
        description: "Recognized for ownership, performance, and contribution to mobile application development.",
    },
];

