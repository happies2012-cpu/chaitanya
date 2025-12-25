# 🧪 Test Data & Usage Guide

## Overview
This file contains comprehensive test data for all components and pages in the application.

---

## 📋 Available Test Data

### 1. **User Accounts**

#### Test Users for Login
```typescript
// Admin User
Email: admin@guidesoft.com
Password: Admin@123

// Regular User
Email: john.doe@example.com
Password: User@123

// Developer
Email: dev@guidesoft.com
Password: Dev@123

// Manager
Email: manager@guidesoft.com
Password: Manager@123
```

---

### 2. **Contact Form Test Data**

#### Valid Submission
```typescript
Name: Michael Brown
Email: michael.brown@techcorp.com
Subject: Web Development Project Inquiry
Message: Hi, I'm interested in developing a custom e-commerce platform...
```

#### Test Scenarios
- ✅ Valid submission with all fields
- ❌ Missing required fields
- ❌ Invalid email format
- ❌ Message too short (< 10 characters)

---

### 3. **Services Data**

Available test services:
1. **Web Development** - Starting at $5,000
2. **Mobile Development** - Starting at $8,000
3. **UI/UX Design** - Starting at $3,000
4. **Cloud Solutions** - Starting at $6,000
5. **Digital Marketing** - Starting at $2,500
6. **Security & Compliance** - Starting at $7,500

---

### 4. **Projects/Portfolio**

Sample projects:
1. **E-Commerce Platform** - TechMart Inc.
2. **Fitness Tracking App** - FitLife
3. **SaaS Dashboard Redesign** - DataViz Pro

Each includes:
- Client name
- Description
- Technologies used
- Completion date
- Project statistics

---

### 5. **Blog Posts**

Sample articles:
1. "The Future of Web Development in 2025"
2. "Building Accessible Web Applications"

Each includes:
- Author information
- Read time
- View count
- Tags and categories

---

### 6. **Testimonials**

3 sample testimonials from:
- Jennifer Lee (CEO, TechStart Inc.)
- Robert Kim (Product Manager, FitLife)
- Maria Garcia (Design Director, DataViz Pro)

All with 5-star ratings and detailed feedback.

---

### 7. **Team Members**

Sample team:
1. Sarah Johnson - Tech Lead & Co-Founder
2. Alex Chen - Senior Developer
3. Emily Rodriguez - Lead Designer

Each with:
- Bio
- Skills
- Social media links

---

### 8. **FAQs**

5 frequently asked questions covering:
- Project timelines
- Support & maintenance
- Technologies
- Communication
- Pricing

---

## 🚀 How to Use Test Data

### Import in Your Component

```typescript
import testData from '@/TEST_DATA';

// Use specific data
const users = testData.users;
const services = testData.services;
const projects = testData.projects;
```

### Example: Login Form

```typescript
import { testUsers } from '@/TEST_DATA';

// Test login with admin user
const handleLogin = async () => {
  const response = await login(
    testUsers.admin.email,
    testUsers.admin.password
  );
};
```

### Example: Contact Form

```typescript
import { testFormData } from '@/TEST_DATA';

// Pre-fill form with test data
const [formData, setFormData] = useState(testFormData.validContact);
```

### Example: Display Services

```typescript
import { testServices } from '@/TEST_DATA';

export function ServicesGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {testServices.map((service) => (
        <ServiceCard key={service.id} {...service} />
      ))}
    </div>
  );
}
```

---

## 🧪 Mock API Responses

### Login Success
```typescript
import { mockAPIResponses } from '@/TEST_DATA';

// Simulate successful login
const mockLogin = () => {
  return Promise.resolve(mockAPIResponses.loginSuccess);
};
```

### Contact Form Success
```typescript
// Simulate contact form submission
const mockContactSubmit = () => {
  return Promise.resolve(mockAPIResponses.contactSuccess);
};
```

---

## 📊 Statistics & Metrics

```typescript
import { testStatistics } from '@/TEST_DATA';

// Display overview stats
const stats = testStatistics.overview;
// {
//   totalProjects: 127,
//   activeClients: 45,
//   teamMembers: 12,
//   yearsExperience: 10,
//   ...
// }

// Display monthly metrics
const monthly = testStatistics.monthlyMetrics;
// [
//   { month: 'Jan', projects: 8, revenue: 45000 },
//   ...
// ]
```

---

## 🎯 Testing Scenarios

### Scenario 1: User Authentication
```typescript
// Test successful login
await login(testUsers.user.email, testUsers.user.password);
// Expected: Success response with token

// Test failed login
await login(testFormData.invalidEmail.email, 'wrongpass');
// Expected: Error response
```

### Scenario 2: Form Validation
```typescript
// Test valid contact form
submitContact(testFormData.validContact);
// Expected: Success

// Test invalid contact form
submitContact(testFormData.invalidContact);
// Expected: Validation errors
```

### Scenario 3: Data Display
```typescript
// Test services display
const services = testServices;
// Expected: Array of 3+ services

// Test projects display
const projects = testProjects;
// Expected: Array of 3+ projects
```

---

## 🔧 Customizing Test Data

### Add New User
```typescript
export const customUser = {
  id: 'user_005',
  email: 'custom@example.com',
  password: 'Custom@123',
  name: 'Custom User',
  role: 'custom',
  // ... other fields
};
```

### Add New Service
```typescript
export const customService = {
  id: 'service_004',
  title: 'Custom Service',
  slug: 'custom-service',
  description: 'Description here',
  // ... other fields
};
```

---

## 📝 Best Practices

1. **Use Realistic Data**: All test data mimics real-world scenarios
2. **Cover Edge Cases**: Include both valid and invalid data
3. **Keep It Updated**: Update test data as features change
4. **Document Changes**: Add comments for custom test data
5. **Use TypeScript**: Leverage type safety for test data

---

## 🎨 UI Testing with Test Data

### Example: Testimonials Carousel
```typescript
import { testTestimonials } from '@/TEST_DATA';

export function TestimonialsCarousel() {
  return (
    <div className="carousel">
      {testTestimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.id} {...testimonial} />
      ))}
    </div>
  );
}
```

### Example: Team Grid
```typescript
import { testTeamMembers } from '@/TEST_DATA';

export function TeamGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {testTeamMembers.map((member) => (
        <TeamMemberCard key={member.id} {...member} />
      ))}
    </div>
  );
}
```

---

## 🚦 Quick Reference

| Data Type | Import | Count |
|-----------|--------|-------|
| Users | `testUsers` | 4 |
| Contacts | `testContactSubmissions` | 3 |
| Services | `testServices` | 3 |
| Projects | `testProjects` | 3 |
| Blog Posts | `testBlogPosts` | 2 |
| Testimonials | `testTestimonials` | 3 |
| FAQs | `testFAQs` | 5 |
| Team Members | `testTeamMembers` | 3 |

---

## 📞 Support

If you need additional test data or have questions:
1. Check the `TEST_DATA.ts` file for all available data
2. Review the examples in `CODE_EXAMPLES.tsx`
3. Refer to component documentation

---

**All test data is production-ready and can be used for development, testing, and demonstrations!**
