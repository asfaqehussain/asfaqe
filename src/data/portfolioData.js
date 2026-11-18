export const personalInfo = {
    name: "Asfaqe Hussain",
    title: "Software Engineer",
    tagline: "Building scalable mobile apps with real-time, offline-first & AI-driven systems",
    email: "asfaqeh@gmail.com",
    phone: "+91 7733 9493 69",
    location: "Ahmedabad, Gujarat, India",
    education: "B.Tech Computer Science, Chartered Institute of Technology, RTU Kota, 2017–2021",
    bio: "Mobile software engineer with 5+ years building React Native and TypeScript apps for Android and iOS. Focused on offline-first architecture, real-time systems, maps, and end-to-end delivery.",
    resumeUrl: "/resume.pdf",
    social: {
        github: "https://github.com/asfaqehussain",
        linkedin: "https://www.linkedin.com/in/asfaqehussain/",
    },
    currentOrg: {
        name: "Bacancy Technology Pvt. Ltd.",
        role: "Sr. Software Engineer",
        duration: "Feb 2025 - Present",
        responsibilities: [
            "Owned end-to-end React Native delivery, including architecture decisions.",
            "Set engineering standards across the mobile workflow.",
            "Worked with product, design, backend, and clients through production.",
            "Managed Android and iOS releases, signing, and store reviews.",
        ],
    },
};



export const projects = [
    {
        id: 1,
        title: "Site Service Mobile",
        description: "Field app for inspectors and technicians. Run building and device inspections, capture violations and photos, manage dispatches, and sync with Site Service Cloud.",
        image: "/work/ssm-icon.jpg",
        fit: "contain",
        wash: "radial-gradient(circle at 50% 42%, #8fd0ae 0%, #2f8a5e 58%, #1c5c40 100%)",
        tags: ["React Native", "Offline-first", "Inspections", "SQLite"],
        links: [
            { href: "https://apps.apple.com/cm/app/site-service-mobile-ssm/id6761701384", label: "App Store" },
            { href: "https://siteservicesoftware.com", label: "Site" },
        ],
    },
    {
        id: 8,
        title: "Total Service Mobile",
        description: "Offline-first field service app for elevator and HVAC work orders. SQLite sync, GPS-stamped actions, and Node.js APIs.",
        image: "/work/tsm-icon.jpg",
        fit: "contain",
        wash: "radial-gradient(circle at 50% 42%, #c4b2ff 0%, #6d4aff 58%, #4318c9 100%)",
        tags: ["React Native", "SQLite", "React Query", "Node.js"],
        links: [
            { href: "https://apps.apple.com/us/app/total-service-mobile-tsm/id6761250341", label: "App Store" },
        ],
    },
    {
        id: 2,
        title: "warpSpeed",
        description: "Personal AI workspace for email, calendar, tasks, notes, and messenger. Summaries, smart replies, task generation, and WebSocket chat on iOS and Android.",
        image: "/work/warp.png",
        icon: "/work/warp.png",
        fit: "contain",
        wash: "radial-gradient(circle at 50% 40%, #7a5cf0 0%, #2a12a8 62%, #16086a 100%)",
        tags: ["React Native", "AI", "WebSockets", "React Query"],
        links: [
            { href: "https://iamwarpspeed.com/", label: "Site" },
        ],
    },
    {
        id: 3,
        title: "Gold Bank Driver",
        description: "Driver app for Gold Bank’s Premium Collection pickups. Real-time tracking with WebSockets, background location, maps, multi-stop routing, and geofencing.",
        image: "/work/gold-driver-icon.png",
        fit: "contain",
        wash: "radial-gradient(circle at 50% 42%, #6e6554 0%, #3a3836 55%, #222222 100%)",
        tags: ["React Native", "WebSockets", "Maps", "Background location"],
        links: [
            { href: "https://goldbank.co.uk/", label: "Site" },
            { href: "https://play.google.com/store/apps/details?id=com.goldbank.premiumcollection.app&hl=en_IN", label: "Google Play" },
        ],
    },
    {
        id: 4,
        title: "Collabstr",
        description: "Creator marketplace app built from the ground up, with 100K+ downloads. Real-time chat, Stripe payments, and flows for discovery, listings, and ratings.",
        image: "/work/collabstr.svg",
        icon: "/work/collabstr.svg",
        fit: "contain",
        wash: "radial-gradient(circle at 50% 45%, #fff1f4 0%, #ffc6d2 58%, #ff9aaf 100%)",
        tags: ["React Native", "Redux", "Stripe", "WebSockets"],
        links: [
            { href: "https://collabstr.com/", label: "Site" },
            { href: "https://apps.apple.com/us/app/collabstr/id6503245507", label: "App Store" },
        ],
    },
    {
        id: 5,
        title: "OtterBoutMyDay",
        description: "Child therapy app for speech, occupational, and physical therapy notes and home exercises. Subscriptions via in-app purchase, with a 30% gain in API and render performance.",
        image: "/work/otter-shot.png",
        icon: "/work/otter-icon.jpg",
        fit: "cover",
        tags: ["React Native", "In-app purchases", "Socket.IO", "Subscriptions"],
        links: [
            { href: "https://apps.apple.com/us/app/otterboutmyday/id6479358174", label: "App Store" },
            { href: "https://otterboutmyday.com/", label: "Site" },
        ],
    },
    {
        id: 9,
        title: "Sugar Wallet",
        description: "Savings app that turns deposits from $1 into 24k gold. Rewards, referrals, live price charts, and OTP sign-in, including screens in the React Native WebView app.",
        image: "/work/sugar-icon.png",
        fit: "contain",
        wash: "radial-gradient(circle at 50% 45%, #e7fffd 0%, #91e5e7 58%, #49c4c8 100%)",
        tags: ["Next.js", "Redux-Saga", "React Query", "Chart.js"],
        links: [
            { href: "https://www.sugarwallet.co.nz/", label: "Site" },
            { href: "https://play.google.com/store/apps/details?id=com.sugar.wallet&hl=en_IN", label: "Google Play" },
        ],
    },
    {
        id: 11,
        title: "Vivjoa",
        description: "Product site for Vivjoa, covering the treatment, the savings program, and how patients start an online visit.",
        image: "/work/vivjoa-logo.png",
        fit: "contain",
        wash: "radial-gradient(circle at 50% 48%, #f7f2fc 0%, #dccaf0 60%, #b89ad8 100%)",
        tags: ["Web"],
        links: [
            { href: "https://vivjoa.com/", label: "Site" },
        ],
    },
    {
        id: 6,
        title: "Neta App",
        description: "Social-first mobile app with RevenueCat subscription management, Instagram Stories & WhatsApp sharing, remote config, and rich animations. Improved performance by 40% through refactoring and reusable components.",
        fit: "cover",
        tags: ["React Native", "RevenueCat", "Animations", "Remote Config", "Social Sharing"],
        links: [],
    },
    {
        id: 7,
        title: "Hotel Management App",
        description: "Ticketing workflow for hotel inspection issues, with offline support and push notifications.",
        fit: "cover",
        tags: ["React Native", "Redux", "Firebase", "CryptoJS"],
        links: [],
    },
    {
        id: 10,
        title: "Dosage",
        description: "Medication scheduling and reminders, with offline access and PDF downloads for sharing healthcare information.",
        fit: "cover",
        tags: ["React Native", "Redux", "SQL", "Firebase"],
        links: [],
    },
];


export const experience = [
    {
        id: 1,
        company: "Bacancy Technology Pvt. Ltd.",
        logo: "/brands/bacancy.svg",
        role: "Sr. Software Engineer",
        location: "Ahmedabad",
        duration: "Feb 2025 – Present",
        current: true,
        highlights: [
            "Owned end-to-end React Native delivery, including architecture decisions.",
            "Set engineering standards and led technical discussions across the mobile workflow.",
            "Worked with product, design, backend, and clients from requirements through production.",
            "Managed Android and iOS releases, signing, and store review issues.",
        ],
    },
    {
        id: 2,
        company: "WebMavericks SoftCoders Pvt. Ltd.",
        logo: "/brands/webmavericks.jpg",
        role: "Frontend Engineer",
        location: "Jaipur",
        duration: "Oct 2023 – Jan 2025",
        current: false,
        highlights: [
            "Led delivery across 6+ mobile application projects.",
            "Wrote technical estimates from project requirements.",
            "Turned client requirements into implementation plans.",
            "Shipped 4+ apps to the App Store and Google Play, including review fixes.",
        ],
    },
    {
        id: 3,
        company: "WeblineIndia Pvt. Ltd.",
        logo: "/brands/webline.svg",
        role: "Jr. Software Developer",
        location: "Ahmedabad",
        duration: "Aug 2021 – Sept 2023",
        current: false,
        highlights: [
            "Built cross-platform React Native apps for Android and iOS.",
            "Delivered features with cross-functional teams in an agile setup.",
            "Cut load times by 30% through rendering, API usage, and cleaner code.",
        ],
    },
];

export const skills = [
    { category: "Core", items: ["React Native", "React.js", "TypeScript", "JavaScript", "Next.js"] },
    { category: "Architecture", items: ["Offline-first", "Real-time systems", "Clean architecture", "Modularization"] },
    { category: "State & Data", items: ["Redux", "Zustand", "TanStack Query", "REST APIs", "GraphQL"] },
    { category: "Backend", items: ["Node.js", "Express"] },
    { category: "Mobile", items: ["Maps", "Background location", "Push notifications", "Deep linking"] },
    { category: "Payments", items: ["Stripe", "RevenueCat", "React Native IAP"] },
    { category: "Testing & Tools", items: ["Jest", "Firebase", "Sentry", "Postman", "Git", "Android Studio", "Xcode", "CI/CD", "NX"] },
];



export const awards = [
    {
        title: "Employee of the Quarter",
        org: "Bacancy Technology Pvt. Ltd.",
        year: "Q1 2026",
        description: "Recognized for ownership, performance, and contribution to mobile application development.",
        certificate: "https://drive.google.com/file/d/1Ul_UYmY1TrjxhZiSpTsZ5ox_dtNavkbe/view?usp=drivesdk",
    },
];
