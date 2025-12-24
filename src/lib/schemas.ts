import { z } from 'zod';

export const loginSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const admissionSchema = z.object({
    fullName: z.string().min(2, 'Full name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(10, 'Valid phone number is required'),
    course: z.string().min(1, 'Course selection is required'),
    previousEducation: z.string().min(1, 'Previous education details are required'),
});

export const resultSchema = z.object({
    studentId: z.string().min(1, 'Student ID is required'),
    semester: z.string().min(1, 'Semester is required'),
    subject: z.string().min(1, 'Subject is required'),
    marks: z.number().min(0).max(100),
    grade: z.string().length(1),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type AdmissionInput = z.infer<typeof admissionSchema>;
export type ResultInput = z.infer<typeof resultSchema>;
