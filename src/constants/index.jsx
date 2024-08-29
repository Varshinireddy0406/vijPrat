import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Services", href: './components/services' },
  { label: "About Us", href:'./components/Herosection' },
  { label: "Pricing", href: './components/pricing'},
  { label: "Testimonials", href: './components/testimonials' },
];



export const testimonials = [
  {
    user: "Alexander Reed",
    role: "CTO",
    company: "Stellar Enterprises",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Sophia Turner",
    role: "VP of Technology",
    company: "BlueWave Innovations",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life.",
  },
  {
    user: "Benjamin Carter",
    role: "Head of IT",
    company: "Quantum Solutions",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Victoria Mitchell",
    role: "IT Director",
    company: "Fusion Tech Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Jonathan Blake",
    role: "Chief Information Officer",
    company: "Visionary Systems",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Olivia Bennett",
    role: "IT Manager",
    company: "Synergy Networks",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];


export const services = [
  {
    icon: <BotMessageSquare />,
    text: "IT Consulting",
    description:
      "Strategic advice to help you leverage technology for business success. Our experts work closely with you to identify and implement the best technology solutions tailored to your business goals",
  },
  {
    icon: <Fingerprint />,
    text: "Software Development",
    description:
      "Custom software solutions tailored to meet your specific business needs. From concept to deployment, we build scalable and efficient software that enhances your operational efficiency",
  },
  {
    icon: <ShieldHalf />,
    text: "Cybersecurity",
    description:
      "Protecting your digital assets with advanced security solutions. We provide comprehensive security measures and proactive threat management to safeguard your critical information.",
  },
  {
    icon: <BatteryCharging />,
    text: "Cloud Solutions",
    description:
      "Empowering your business with scalable and flexible cloud services. Our cloud solutions are designed to optimize your resources, reduce costs, and enhance accessibility and collaboration",
  },
  {
    icon: <PlugZap />,
    text: "Data Analytics",
    description:
      "Turning your data into actionable insights to drive informed decisions. Utilize advanced analytics to uncover trends, improve strategies, and make data-driven decisions that propel your business forward",
  },
  {
    icon: <GlobeLock />,
    text: "IT Infrastructure Management",
    description:
      "Ensuring the efficiency and reliability of your IT systems with proactive management and support. We maintain and optimize your IT infrastructure to ensure seamless performance and minimize downtime",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
