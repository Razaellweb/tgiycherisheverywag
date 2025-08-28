import type { Metadata } from "next";

const metadata: Metadata = {
  title: "tgiy – Cherish Every Wag: Organize Your Dog’s Memories Effortlessly",
  description: "Tgiy is the fun, easy way for dog owners and pet lovers to store, organize, and relive every adorable moment with their furry friends. Upload, organize, and access your dog’s photos anytime, anywhere—free forever!",
  openGraph: {
    title: "tgiy – Cherish Every Wag: Organize Your Dog’s Memories Effortlessly",
    description: "Tgiy is the fun, easy way for dog owners and pet lovers to store, organize, and relive every adorable moment with their furry friends. Upload, organize, and access your dog’s photos anytime, anywhere—free forever!",
    images: [
      {
        url: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=facearea&w=800&q=80",
        width: 800,
        height: 600,
        alt: "Happy dog photo",
      },
    ],
    type: "website",
    locale: "en_US",
    url: "https://tgiy.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "tgiy – Cherish Every Wag: Organize Your Dog’s Memories Effortlessly",
    description: "Tgiy is the fun, easy way for dog owners and pet lovers to store, organize, and relive every adorable moment with their furry friends. Upload, organize, and access your dog’s photos anytime, anywhere—free forever!",
    images: [
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=facearea&w=800&q=80"
    ],
  },
  metadataBase: new URL("https://tgiy.app"),
  keywords: [
    "dog photo storage",
    "pet memories",
    "dog albums",
    "dog photo organizer",
    "dog lovers app",
    "pet photo app",
    "free dog photo storage",
    "tgiy",
  ],
};

export default metadata;
