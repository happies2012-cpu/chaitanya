// ============================================
// TEST DATA & MOCK API RESPONSES
// ============================================

// ============================================
// 1. USER TEST DATA
// ============================================

export const testUsers = {
    // Admin User
    admin: {
        id: 'user_001',
        email: 'admin@horizoneb1.com',
        password: 'Admin@123',
        name: 'Sarah Johnson',
        role: 'admin',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
        createdAt: '2024-01-15T10:00:00Z',
        lastLogin: '2025-12-25T08:30:00Z',
    },

    // Regular User
    user: {
        id: 'user_002',
        email: 'john.doe@example.com',
        password: 'User@123',
        name: 'John Doe',
        role: 'user',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
        createdAt: '2024-03-20T14:30:00Z',
        lastLogin: '2025-12-24T16:45:00Z',
    },

    // Developer User
    developer: {
        id: 'user_003',
        email: 'dev@horizoneb1.com',
        password: 'Dev@123',
        name: 'Alex Chen',
        role: 'developer',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
        createdAt: '2024-02-10T09:15:00Z',
        lastLogin: '2025-12-25T07:00:00Z',
    },

    // Manager User
    manager: {
        id: 'user_004',
        email: 'manager@horizoneb1.com',
        password: 'Manager@123',
        name: 'Emily Rodriguez',
        role: 'manager',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
        createdAt: '2024-01-05T11:20:00Z',
        lastLogin: '2025-12-25T09:15:00Z',
    },
};

// ============================================
// 2. CONTACT FORM TEST DATA
// ============================================

export const testContactSubmissions = [
    {
        id: 'contact_001',
        name: 'Michael Brown',
        email: 'michael.brown@techcorp.com',
        subject: 'Web Development Project Inquiry',
        message: 'Hi, I\'m interested in developing a custom e-commerce platform for my business. Can we schedule a consultation?',
        status: 'new',
        createdAt: '2025-12-25T10:30:00Z',
    },
    {
        id: 'contact_002',
        name: 'Lisa Wang',
        email: 'lisa.wang@startup.io',
        subject: 'Mobile App Development',
        message: 'We need a React Native app for both iOS and Android. Looking for a team with experience in fintech.',
        status: 'in_progress',
        createdAt: '2025-12-24T15:20:00Z',
    },
    {
        id: 'contact_003',
        name: 'David Martinez',
        email: 'david@designstudio.com',
        subject: 'UI/UX Design Services',
        message: 'Need help redesigning our SaaS dashboard. Do you offer design-only services?',
        status: 'replied',
        createdAt: '2025-12-23T09:45:00Z',
    },
];

// ============================================
// 3. SERVICES TEST DATA
// ============================================

export const testServices = [
    {
        id: 'service_001',
        title: 'Web Development',
        slug: 'web-development',
        description: 'Custom web applications built with modern technologies for optimal performance and user experience.',
        icon: 'Code',
        price: {
            starting: 5000,
            currency: 'USD',
        },
        features: [
            'React & Next.js Development',
            'Node.js Backend',
            'API Integration',
            'Database Design',
            'Responsive Design',
            'SEO Optimization',
        ],
        deliveryTime: '4-8 weeks',
        category: 'development',
    },
    {
        id: 'service_002',
        title: 'Mobile Development',
        slug: 'mobile-development',
        description: 'Native and cross-platform mobile apps that deliver seamless experiences on iOS and Android.',
        icon: 'Smartphone',
        price: {
            starting: 8000,
            currency: 'USD',
        },
        features: [
            'React Native',
            'iOS & Android',
            'App Store Deployment',
            'Push Notifications',
            'Offline Support',
            'Analytics Integration',
        ],
        deliveryTime: '6-12 weeks',
        category: 'development',
    },
    {
        id: 'service_003',
        title: 'UI/UX Design',
        slug: 'ui-ux-design',
        description: 'Beautiful, intuitive interfaces designed with user needs and business goals in mind.',
        icon: 'Palette',
        price: {
            starting: 3000,
            currency: 'USD',
        },
        features: [
            'User Research',
            'Wireframing',
            'Prototyping',
            'Design Systems',
            'Usability Testing',
            'Brand Guidelines',
        ],
        deliveryTime: '2-4 weeks',
        category: 'design',
    },
];

// ============================================
// 4. PROJECTS/PORTFOLIO TEST DATA
// ============================================

export const testProjects = [
    {
        id: 'project_001',
        title: 'E-Commerce Platform',
        client: 'TechMart Inc.',
        description: 'A full-featured e-commerce platform with inventory management, payment processing, and analytics.',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800',
        tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
        category: 'Web Development',
        completedAt: '2024-11-15',
        stats: {
            users: '50K+',
            revenue: '$2M+',
            uptime: '99.9%',
        },
    },
    {
        id: 'project_002',
        title: 'Fitness Tracking App',
        client: 'FitLife',
        description: 'Mobile app for tracking workouts, nutrition, and health metrics with AI-powered recommendations.',
        image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800',
        tags: ['React Native', 'Firebase', 'TensorFlow', 'Redux'],
        category: 'Mobile Development',
        completedAt: '2024-10-20',
        stats: {
            downloads: '100K+',
            rating: '4.8/5',
            activeUsers: '25K',
        },
    },
    {
        id: 'project_003',
        title: 'SaaS Dashboard Redesign',
        client: 'DataViz Pro',
        description: 'Complete UI/UX redesign of analytics dashboard with improved data visualization and user flow.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
        tags: ['Figma', 'Design System', 'User Research', 'Prototyping'],
        category: 'UI/UX Design',
        completedAt: '2024-12-01',
        stats: {
            userSatisfaction: '95%',
            taskCompletion: '+40%',
            timeOnTask: '-30%',
        },
    },
];

// ============================================
// 5. BLOG/NEWS TEST DATA
// ============================================

export const testBlogPosts = [
    {
        id: 'post_001',
        title: 'The Future of Web Development in 2025',
        slug: 'future-of-web-development-2025',
        excerpt: 'Explore the latest trends and technologies shaping the future of web development.',
        content: 'Full blog post content here...',
        author: {
            name: 'Sarah Johnson',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
            role: 'Tech Lead',
        },
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
        category: 'Technology',
        tags: ['Web Development', 'Trends', 'AI', 'Next.js'],
        publishedAt: '2025-12-20T10:00:00Z',
        readTime: '8 min read',
        views: 1250,
    },
    {
        id: 'post_002',
        title: 'Building Accessible Web Applications',
        slug: 'building-accessible-web-applications',
        excerpt: 'A comprehensive guide to creating inclusive digital experiences for all users.',
        content: 'Full blog post content here...',
        author: {
            name: 'Alex Chen',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
            role: 'Senior Developer',
        },
        image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800',
        category: 'Development',
        tags: ['Accessibility', 'WCAG', 'Best Practices'],
        publishedAt: '2025-12-18T14:30:00Z',
        readTime: '12 min read',
        views: 890,
    },
];

// ============================================
// 6. TESTIMONIALS TEST DATA
// ============================================

export const testTestimonials = [
    {
        id: 'testimonial_001',
        name: 'Jennifer Lee',
        role: 'CEO',
        company: 'TechStart Inc.',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jennifer',
        rating: 5,
        text: 'Working with GuideSoft was an absolute pleasure. They delivered our project on time and exceeded our expectations. The attention to detail and communication throughout the process was outstanding.',
        project: 'E-Commerce Platform',
        date: '2024-11-20',
    },
    {
        id: 'testimonial_002',
        name: 'Robert Kim',
        role: 'Product Manager',
        company: 'FitLife',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Robert',
        rating: 5,
        text: 'The mobile app they built for us has been a game-changer. User engagement is up 200% and the feedback has been overwhelmingly positive. Highly recommend!',
        project: 'Fitness Tracking App',
        date: '2024-10-25',
    },
    {
        id: 'testimonial_003',
        name: 'Maria Garcia',
        role: 'Design Director',
        company: 'DataViz Pro',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria',
        rating: 5,
        text: 'Their UI/UX expertise transformed our product. The new design is not only beautiful but also significantly improved our user metrics. A true partnership!',
        project: 'Dashboard Redesign',
        date: '2024-12-05',
    },
];

// ============================================
// 7. FAQ TEST DATA
// ============================================

export const testFAQs = [
    {
        id: 'faq_001',
        question: 'What is your typical project timeline?',
        answer: 'Project timelines vary based on scope and complexity. A typical web application takes 4-8 weeks, mobile apps 6-12 weeks, and design projects 2-4 weeks. We provide detailed timelines during the consultation phase.',
        category: 'General',
    },
    {
        id: 'faq_002',
        question: 'Do you offer ongoing support and maintenance?',
        answer: 'Yes! We offer comprehensive support and maintenance packages to ensure your application runs smoothly. This includes bug fixes, security updates, performance optimization, and feature enhancements.',
        category: 'Services',
    },
    {
        id: 'faq_003',
        question: 'What technologies do you work with?',
        answer: 'We specialize in modern web technologies including React, Next.js, Node.js, TypeScript, and Tailwind CSS. For mobile, we use React Native. We also work with various databases, cloud platforms, and third-party integrations.',
        category: 'Technical',
    },
    {
        id: 'faq_004',
        question: 'How do you handle project communication?',
        answer: 'We believe in transparent communication. You\'ll have a dedicated project manager, regular video calls, access to our project management tools, and daily updates on progress. We\'re available via email, Slack, or your preferred communication channel.',
        category: 'Process',
    },
    {
        id: 'faq_005',
        question: 'What is your pricing structure?',
        answer: 'We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Pricing depends on project scope, complexity, and timeline. Contact us for a detailed quote tailored to your needs.',
        category: 'Pricing',
    },
];

// ============================================
// 8. TEAM MEMBERS TEST DATA
// ============================================

export const testTeamMembers = [
    {
        id: 'team_001',
        name: 'Sarah Johnson',
        role: 'Tech Lead & Co-Founder',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
        bio: '10+ years of experience in full-stack development. Passionate about building scalable applications.',
        skills: ['React', 'Node.js', 'System Architecture', 'Team Leadership'],
        social: {
            linkedin: 'https://linkedin.com/in/sarahjohnson',
            github: 'https://github.com/sarahjohnson',
            twitter: 'https://twitter.com/sarahj_dev',
        },
    },
    {
        id: 'team_002',
        name: 'Alex Chen',
        role: 'Senior Developer',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
        bio: 'Specializes in mobile development and cloud infrastructure. AWS certified solutions architect.',
        skills: ['React Native', 'AWS', 'DevOps', 'Mobile Development'],
        social: {
            linkedin: 'https://linkedin.com/in/alexchen',
            github: 'https://github.com/alexchen',
        },
    },
    {
        id: 'team_003',
        name: 'Emily Rodriguez',
        role: 'Lead Designer',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
        bio: 'Award-winning UI/UX designer with a focus on accessibility and user-centered design.',
        skills: ['UI/UX Design', 'Figma', 'Design Systems', 'User Research'],
        social: {
            linkedin: 'https://linkedin.com/in/emilyrodriguez',
            dribbble: 'https://dribbble.com/emilyrodriguez',
        },
    },
];

// ============================================
// 9. MOCK API RESPONSES
// ============================================

export const mockAPIResponses = {
    // Login Success
    loginSuccess: {
        success: true,
        message: 'Login successful',
        data: {
            user: testUsers.user,
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyXzAwMiIsImlhdCI6MTcwMzUwMDAwMH0.example',
            expiresIn: 3600,
        },
    },

    // Login Error
    loginError: {
        success: false,
        message: 'Invalid email or password',
        error: 'INVALID_CREDENTIALS',
    },

    // Contact Form Success
    contactSuccess: {
        success: true,
        message: 'Thank you for your message! We\'ll get back to you within 24 hours.',
        data: {
            id: 'contact_004',
            status: 'received',
        },
    },

    // Contact Form Error
    contactError: {
        success: false,
        message: 'Failed to send message. Please try again.',
        error: 'SUBMISSION_FAILED',
    },

    // Get Services
    getServices: {
        success: true,
        data: testServices,
        total: testServices.length,
    },

    // Get Projects
    getProjects: {
        success: true,
        data: testProjects,
        total: testProjects.length,
    },
};

// ============================================
// 10. FORM VALIDATION TEST CASES
// ============================================

export const testFormData = {
    // Valid Login
    validLogin: {
        email: 'john.doe@example.com',
        password: 'User@123',
    },

    // Invalid Login - Wrong Password
    invalidPassword: {
        email: 'john.doe@example.com',
        password: 'wrongpassword',
    },

    // Invalid Login - Invalid Email
    invalidEmail: {
        email: 'notanemail',
        password: 'User@123',
    },

    // Valid Contact Form
    validContact: {
        name: 'Test User',
        email: 'test@example.com',
        subject: 'Test Inquiry',
        message: 'This is a test message with sufficient length to pass validation.',
    },

    // Invalid Contact - Missing Fields
    invalidContact: {
        name: '',
        email: 'test@example.com',
        subject: '',
        message: 'Short',
    },
};

// ============================================
// 11. STATISTICS TEST DATA
// ============================================

export const testStatistics = {
    overview: {
        totalProjects: 127,
        activeClients: 45,
        teamMembers: 12,
        yearsExperience: 10,
        clientSatisfaction: 98,
        projectsCompleted: 127,
        codeQuality: 95,
        onTimeDelivery: 99,
    },

    monthlyMetrics: [
        { month: 'Jan', projects: 8, revenue: 45000 },
        { month: 'Feb', projects: 10, revenue: 52000 },
        { month: 'Mar', projects: 12, revenue: 68000 },
        { month: 'Apr', projects: 9, revenue: 48000 },
        { month: 'May', projects: 11, revenue: 61000 },
        { month: 'Jun', projects: 13, revenue: 72000 },
    ],
};

// ============================================
// 12. EXPORT ALL TEST DATA
// ============================================

export const testData = {
    users: testUsers,
    contacts: testContactSubmissions,
    services: testServices,
    projects: testProjects,
    blog: testBlogPosts,
    testimonials: testTestimonials,
    faqs: testFAQs,
    team: testTeamMembers,
    api: mockAPIResponses,
    forms: testFormData,
    stats: testStatistics,
};

export default testData;
