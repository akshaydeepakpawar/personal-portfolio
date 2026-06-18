import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, "Full name is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .optional(),
  subject: z
    .string()
    .min(1, "Subject is required"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
