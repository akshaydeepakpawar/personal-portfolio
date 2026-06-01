import project1 from "../assets/myprojects/Project-1.webp";
import project2 from "../assets/myprojects/Project-2.webp";
import project3 from "../assets/myprojects/Project-3.webp";

export const Hero_content = `
Full Stack Developer skilled in JavaScript, TypeScript, and Next.js, with a strong foundation in Data Structures and Algorithms. Hands-on experience in building
scalable web applications and developing efficient APIs using modern technologies. Proficient in database design, clean architecture, and writing high-quality,
maintainable code. Eager to contribute to real-world applications and grow as a software engineer.`;

export const About_text = `
I’m a Full Stack Developer who enjoys building real-world applications from scratch and understanding how things work under the hood. I’ve worked on projects like a coding platform with real-time code execution and an AI chat application integrating multiple models.

I like solving problems, improving performance, and writing code that’s clean and easy to maintain. Along the way, I’ve developed a strong interest in backend systems, APIs, and scalable architecture.

Currently, I’m focused on sharpening my problem-solving skills and building projects that push me beyond my comfort zone as I work toward becoming a better software engineer.
`;
export const EXPERIENCES = [
  {
    year: "2023",
    role: "Full Stack Developer",
    company: "Prodigy InfoTech",
    description: `Developed responsive user interfaces using React.js, improving overall user experience and application performance Built and integrated RESTful APIs to enable efficient communication between frontend and backend systems Collaborated on feature implementation, debugging, and code optimization, ensuring clean and maintainable code`,
    technologies: [
      "Javascript",
      "React.js",
      "Express.js",
      "mongoDB",
      "Frame Motions",
    ],
    cretificate:
      "https://www.linkedin.com/in/akshay-pawar-5b4b5819a/overlay/Position/2223215646/treasury/?profileId=ACoAAC7M8lgBfHALKa0slgCn7Eupo4Q7_u57DoA",
  },
];

export const PROJECTS = [
{
title: "Full-Stack Coding Platform",
image: project1, // replace with actual screenshot
description:
"A full-stack coding platform inspired by LeetCode, built with Next.js and TypeScript. Users can solve coding problems, run code in real-time, and track their progress. Includes secure authentication, submission history, and admin features for managing problems and test cases.",
technologies: [
"Next.js",
"TypeScript",
"React",
"Node.js",
"PostgreSQL",
"Prisma",
"Clerk",
"Judge0 API",
"Tailwind CSS",
],
link: "https://leetcode-nextjs-clone-vafh.vercel.app/",
github: "https://github.com/akshaydeepakpawar/leetcode-nextjs-clone",
},
{
title: "AI Chat Application",
image: project2,
description:
"A full-stack AI chat application with real-time streaming responses. Integrated 30+ AI models using OpenRouter with dynamic model selection. Features include authentication, chat history, search, and persistent message storage using Prisma and PostgreSQL.",
technologies: [
"Next.js",
"React",
"Prisma",
"PostgreSQL",
"OpenRouter API",
"AI SDK",
"Tailwind CSS",
"shadcn/ui",
],
link: "https://t3-chat-t395.vercel.app/",
github: "https://github.com/akshaydeepakpawar/t3-chat",
},
{
title: "StackSpend",
image: project3,
description:
"StackSpend is a full-stack AI spend auditing platform that helps developers, startups, and engineering teams analyze their AI tool subscriptions and identify cost-saving opportunities. Users can generate personalized audit reports, receive AI-generated insights, track historical audits, export reports as PDFs, and share results through public report links. Built with Next.js, PostgreSQL, Prisma, OpenRouter, and GitHub Actions CI/CD.",
technologies: [
  "Next.js",
  "JavaScript",
  "PostgreSQL",
  "Prisma ORM",
  "Tailwind CSS",
  "OpenRouter",
  "Resend",
  "Vitest",
  "GitHub Actions",
  "Vercel"
],
link: "https://stackspend-kappa.vercel.app/",
github: "https://github.com/akshaydeepakpawar/stackspend",
},
];


export const CONTACT = {
  address: `Navi Mumbai, Maharashtra, India`,
  phoneNo: "+91 9326182557 ",
  email: "ap3690700@gmail.com",
};
