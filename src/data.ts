// @ts-ignore
import Code2 from 'lucide-react/dist/esm/icons/code-2';
// @ts-ignore
import Database from 'lucide-react/dist/esm/icons/database';
// @ts-ignore
import Globe from 'lucide-react/dist/esm/icons/globe';
// @ts-ignore
import Layout from 'lucide-react/dist/esm/icons/layout';
// @ts-ignore
import Smartphone from 'lucide-react/dist/esm/icons/smartphone';
// @ts-ignore
import Server from 'lucide-react/dist/esm/icons/server';
// @ts-ignore
import Cloud from 'lucide-react/dist/esm/icons/cloud';
// @ts-ignore
import CreditCard from 'lucide-react/dist/esm/icons/credit-card';
// @ts-ignore
import Wifi from 'lucide-react/dist/esm/icons/wifi';
// @ts-ignore
import Bot from 'lucide-react/dist/esm/icons/bot';

export const personalInfo = {
  name: "Eslam Abd_Elrahman Sapry Saber",
  title: "Mobile App Developer (Flutter)",
  email: "eslamelrahman2002@gmail.com",
  phone: "01025654637",
  location: "Mansoura, Egypt",
  linkedin: "https://www.linkedin.com/in/eslam-abdelrahman-sapry-ba1537336/",
  github: "https://github.com/Eslamabdelrahman2002",
  summary: "Results-driven Flutter Developer with 2+ years of experience delivering 6+ production-ready applications across E-Commerce, IoT, FinTech, and EdTech sectors. Expert in clean architecture, BLoC/Cubit state management, and complex integrations including payment gateways (MPGS, Apple Pay), IoT sensors, and AI-powered features. Proven ability to lead mobile development from concept to deployment on App Store and Google Play."
};

export const experiences = [
  {
    role: "Flutter Developer",
    company: "Abwab Digital",
    location: "Mansoura, Egypt",
    period: "3 Months – Present",
    details: [
      "Developed 4 production-ready mobile apps serving 10,000+ users",
      "Implemented Clean Architecture with BLoC/Cubit state management",
      "Integrated MPGS, Apple Pay & Google Pay payment solutions",
      "Built REST APIs with Dio, Firebase FCM, and offline support",
      "Published apps to App Store & Google Play Store"
    ]
  },
  {
    role: "Freelance Flutter Developer",
    company: "Mostaql",
    location: "Remote",
    period: "2 Months",
    details: [
      "Delivered complete mobile app independently with 5-star rating",
      "End-to-end development: requirements, architecture, deployment"
    ]
  },
  {
    role: "Flutter Development Trainee",
    company: "Rowad Masr Digital Initiative",
    location: "Remote",
    period: "2023 - 2024 (9 Months)",
    details: [
      "Completed intensive Flutter development training program",
      "Built multiple projects applying clean architecture principles",
      "Gained hands-on experience with state management and APIs"
    ]
  }
];

export const skills = [
  { name: "Flutter", icon: Smartphone },
  { name: "Dart", icon: Code2 },
  { name: "BLoC & Cubit", icon: Database },
  { name: "Clean Architecture", icon: Layout },
  { name: "REST APIs & Dio", icon: Globe },
  { name: "Firebase", icon: Cloud },
  { name: "MVVM", icon: Layout },
  { name: "Payment Integration", icon: CreditCard },
  { name: "IoT Integration", icon: Wifi },
  { name: "AI Integration", icon: Bot },
  { name: "Agora", icon: Server },
  { name: "Mapbox", icon: Globe },
];

export const projects = [
  {
    title: "HAUTE BOUTIQUE",
    subtitle: "Premium Gifts & Flowers E-Commerce",
    period: "01/2026 – 01/2026",
    description: "Luxury gifting app with custom gift builder, AI chatbot assistant, payment integration, and personalized gift cards.",
    tags: ["Flutter", "E-Commerce", "AI", "Payments"],
    image: "/images/haute-boutique.jpg",
    links: { appStore: true, playStore: true }
  },
  {
    title: "MOBEEN",
    subtitle: "Islamic Learning Platform",
    period: "06/2025 – 08/2025",
    description: "Quran learning app with teacher-student booking, Agora video/audio calls, Tafsir, and Qari recitations.",
    tags: ["Flutter", "Agora", "Booking", "EdTech"],
    image: "/images/mobeen.jpg",
    links: { appStore: false, playStore: false }
  },
  {
    title: "MOSHTARI",
    subtitle: "Classifieds & Services Marketplace",
    period: "11/2025 – 01/2025",
    description: "Smart marketplace with AI ad creator, cars, real estate, auctions, and service booking. Bilingual Arabic/English.",
    tags: ["Flutter", "AI", "Marketplace", "Bilingual"],
    image: "/images/moshtari.jpg",
    links: { appStore: true, playStore: false }
  },
  {
    title: "CHARGING GRID",
    subtitle: "Smart Power Bank Rental Platform",
    period: "02/2026 – 02/2026",
    description: "IoT power bank sharing with QR scanning, wallet payments, and Mapbox navigation to nearby stations.",
    tags: ["Flutter", "IoT", "QR Code", "Mapbox", "Payments"],
    image: "/images/charging-grid.jpg",
    links: { appStore: true, playStore: true }
  },
  {
    title: "SPEEDER",
    subtitle: "Car Wash Booking & Auto Shop",
    period: "02/2026 – 02/2026",
    description: "On-demand car wash booking with package selection and integrated e-commerce store for automotive products.",
    tags: ["Flutter", "Booking", "E-Commerce", "Auto"],
    image: "/images/speeder.jpg",
    links: { appStore: true, playStore: true }
  },
  {
    title: "OPHIUC",
    subtitle: "Smart Sleep Monitoring System",
    period: "01/2025 – 06/2025",
    description: "Graduation Project: IoT sleep tracking with real-time sensors, disorder detection, AI chatbot, and analytics dashboard.",
    tags: ["Flutter", "IoT", "AI", "Health", "Sensors"],
    image: "/images/ophiuc.jpg",
    links: { appStore: false, playStore: false }
  },
  {
    title: "TAVO",
    subtitle: "Restaurant Reservation System",
    period: "2026",
    description: "Dual-interface platform. User App: Reserves tables and specific time slots. Admin App: Restaurant managers put menus, manage tables and available times.",
    tags: ["Flutter", "Booking", "Restaurant", "Management"],
    image: "/images/tavo.jpg",
    links: { appStore: false, playStore: false }
  }
];

export const education = {
  degree: "Bachelor of Computer Science",
  department: "Software Engineering Department",
  institution: "Faculty of Computers and Information, Mansoura University",
  period: "2021 – 2025",
  gpa: "3.1 / 4.0",
  project: "OPHIUC - Smart Sleep Monitoring System. IoT-based sleep tracking with AI chatbot and disorder detection."
};