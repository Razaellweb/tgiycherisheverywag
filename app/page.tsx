"use client";
import React from "react";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../components/ui/accordion";
import { Card } from "../components/ui/card";
import { Avatar } from "../components/ui/avatar";
import { Separator } from "../components/ui/separator";
import { Badge } from "../components/ui/badge";
import { cn } from "../lib/utils";

const features = [
  {
    title: "Unlimited Free Storage",
    description: "Store every wag, bark, and belly rub with no limits. Your dog’s memories are safe and sound, forever.",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="16" fill="#fbbf24"/><path d="M10 22v-4a6 6 0 1112 0v4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><rect x="12" y="22" width="8" height="4" rx="2" fill="#fff"/></svg>
    ),
  },
  {
    title: "Effortless Organization",
    description: "Create albums, add tags, and find any moment in a tail wag. Organization has never been this fun.",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="16" fill="#34d399"/><path d="M10 12h12v8H10z" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/><circle cx="16" cy="16" r="2" fill="#fff"/></svg>
    ),
  },
  {
    title: "Seamless Uploads",
    description: "Upload from your phone, computer, or cloud. Relive memories anytime, anywhere.",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="16" fill="#60a5fa"/><path d="M16 10v8m0 0l-4-4m4 4l4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
  },
  {
    title: "Safe & Private",
    description: "Your dog’s photos are yours alone. Private, secure, and always accessible.",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="16" fill="#f472b6"/><path d="M16 20a4 4 0 100-8 4 4 0 000 8z" stroke="#fff" strokeWidth="2"/><path d="M12 16v4h8v-4" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
  },
];

const testimonials = [
  {
    name: "Samantha P.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Tgiy made it so easy to keep all of Max’s puppy pics in one place. The albums are adorable!",
    dog: "Max",
  },
  {
    name: "Carlos R.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "I love how playful and simple the app feels. Uploading from my phone is a breeze.",
    dog: "Luna",
  },
  {
    name: "Jessie K.",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    text: "Finally, a place just for my dog’s memories. The privacy features give me peace of mind.",
    dog: "Charlie",
  },
];

const faqs = [
  {
    q: "Is tgiy really free?",
    a: "Yes! Tgiy is free forever for all dog owners and pet lovers.",
  },
  {
    q: "How do I upload my dog’s photos?",
    a: "You can upload directly from your device or connect your favorite cloud service.",
  },
  {
    q: "Are my photos private?",
    a: "Absolutely. Only you can access your dog’s memories unless you choose to share them.",
  },
  {
    q: "Can I organize photos by albums or tags?",
    a: "Yes! Create albums, add tags, and find any moment in seconds.",
  },
];

const socialProof = [
  {
    label: "Loved by 10,000+ dog parents",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="12" fill="#fbbf24"/><path d="M8 12l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
  },
  {
    label: "4.9/5 average rating",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="12" fill="#60a5fa"/><path d="M12 7l2.09 4.26L18 12.27l-3.91 3.81L15.18 21 12 17.27 8.82 21l1.09-4.92L6 12.27l3.91-.01L12 7z" stroke="#fff" strokeWidth="2"/></svg>
    ),
  },
  {
    label: "Featured in PupLife Magazine",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="12" fill="#34d399"/><path d="M8 16h8M8 12h8M8 8h8" stroke="#fff" strokeWidth="2"/></svg>
    ),
  },
];

function DogPhotoCollage() {
  // Playful dog photo collage for hero visual
  const photos = [
    "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=facearea&w=400&q=80",
    "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=facearea&w=400&q=80",
    "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=facearea&w=400&q=80",
    "https://images.unsplash.com/photo-1518715308788-3005759c61c5?auto=format&fit=facearea&w=400&q=80",
    "https://images.unsplash.com/photo-1518715308788-3005759c61c5?auto=format&fit=facearea&w=400&q=80",
  ];
  return (
    <div className="relative flex flex-row gap-2 md:gap-4 justify-center items-center mt-6 md:mt-0">
      {photos.map((src, i) => (
        <img
          key={i}
          src={src}
          alt="Happy dog photo"
          className={cn(
            "rounded-2xl shadow-lg border-4 border-white object-cover w-20 h-20 md:w-32 md:h-32 transition-transform duration-300",
            i % 2 === 0 ? "-rotate-6 hover:rotate-0" : "rotate-6 hover:rotate-0",
            "hover:scale-105 focus:scale-105"
          )}
          style={{ zIndex: 10 - i }}
        />
      ))}
      <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-300 via-pink-300 to-blue-300 rounded-full px-4 py-1 text-xs font-semibold text-gray-800 shadow-md animate-pulse" aria-label="Cherish Every Wag">Cherish Every Wag</span>
    </div>
  );
}

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-blue-50 text-gray-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-4 md:px-12 py-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm sticky top-0 z-30">
        <Link href="/" className="flex items-center gap-2" aria-label="tgiy home">
          <span className="inline-block bg-gradient-to-tr from-yellow-400 via-pink-400 to-blue-400 rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold shadow-md">🐶</span>
          <span className="font-extrabold text-xl tracking-tight text-gray-900 dark:text-white">tgiy</span>
        </Link>
        <div className="flex gap-2 md:gap-4">
          <Link href="/signin" className="text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors">Sign In</Link>
          <Button asChild className="bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 text-gray-900 font-bold shadow-lg hover:scale-105 focus:scale-105 transition-transform">
            <Link href="/signup" aria-label="Start Organizing Free">Start Organizing Free</Link>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-12 pt-12 pb-8 md:pt-24 md:pb-16 gap-8 md:gap-16">
        <div className="flex-1 max-w-xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white mb-4 drop-shadow-lg">
            Cherish Every Wag
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400">Organize Your Dog’s Memories Effortlessly</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-200 mb-6">
            Tgiy is the fun, easy way for dog owners and pet lovers to store, organize, and relive every adorable moment with their furry friends. Upload, organize, and access your dog’s photos anytime, anywhere—free forever!
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 text-gray-900 font-bold shadow-xl hover:scale-105 focus:scale-105 transition-transform text-lg px-8 py-4">
            <Link href="/signup" aria-label="Start Organizing Free">Start Organizing Free</Link>
          </Button>
          <div className="mt-6 flex flex-wrap gap-4">
            {socialProof.map((proof, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 rounded-full px-4 py-2 shadow-sm">
                {proof.icon}
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">{proof.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <DogPhotoCollage />
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 md:px-12 py-12 md:py-20 bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-3xl mx-2 md:mx-12 shadow-xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-10">Why Dog Parents Love tgiy</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <Card key={i} className="flex flex-col items-center p-6 bg-white/90 dark:bg-gray-900/90 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="mb-4 animate-bounce-slow">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">{feature.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-center">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-4 md:px-12 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900 dark:text-white">How It Works</h2>
          <ol className="space-y-6">
            <li className="flex items-start gap-4">
              <Badge className="bg-yellow-400 text-gray-900 font-bold text-lg w-10 h-10 flex items-center justify-center rounded-full">1</Badge>
              <div>
                <h4 className="font-bold text-lg">Sign Up Free</h4>
                <p className="text-gray-700 dark:text-gray-300">Create your tgiy account in seconds—no credit card needed.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Badge className="bg-pink-400 text-gray-900 font-bold text-lg w-10 h-10 flex items-center justify-center rounded-full">2</Badge>
              <div>
                <h4 className="font-bold text-lg">Upload Your Dog’s Photos</h4>
                <p className="text-gray-700 dark:text-gray-300">Add photos from your phone, computer, or cloud. Organize them instantly.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Badge className="bg-blue-400 text-gray-900 font-bold text-lg w-10 h-10 flex items-center justify-center rounded-full">3</Badge>
              <div>
                <h4 className="font-bold text-lg">Relive Every Wag</h4>
                <p className="text-gray-700 dark:text-gray-300">Browse, search, and share your favorite moments anytime, anywhere.</p>
              </div>
            </li>
          </ol>
        </div>
        <div className="flex-1 flex justify-center">
          <img src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=facearea&w=400&q=80" alt="Dog with phone" className="rounded-3xl shadow-2xl w-64 h-64 object-cover border-4 border-white dark:border-gray-900 animate-float" />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 md:px-12 py-16 md:py-24 bg-gradient-to-br from-blue-100 via-yellow-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-3xl mx-2 md:mx-12 shadow-xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-10">What Dog Parents Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Card key={i} className="flex flex-col items-center p-8 bg-white/90 dark:bg-gray-900/90 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <Avatar src={t.avatar} alt={`Photo of ${t.name}`} className="w-16 h-16 mb-4 border-4 border-yellow-300 shadow-md" />
              <p className="text-lg text-gray-700 dark:text-gray-200 text-center mb-4">“{t.text}”</p>
              <span className="font-bold text-gray-900 dark:text-white">{t.name}</span>
              <span className="text-sm text-gray-500">Dog parent to {t.dog}</span>
            </Card>
          ))}
        </div>
      </section>

      {/* App Download Section */}
      <section className="px-4 md:px-12 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 flex flex-col items-start">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 dark:text-white">Take tgiy Everywhere</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Access your dog’s memories on the go. Download tgiy for iOS and Android.</p>
          <div className="flex gap-4">
            <Button className="bg-black text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:scale-105 focus:scale-105 transition-transform" asChild>
              <a href="#" aria-label="Download on the App Store">
                <span className="inline-block mr-2"></span> App Store
              </a>
            </Button>
            <Button className="bg-green-500 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:scale-105 focus:scale-105 transition-transform" asChild>
              <a href="#" aria-label="Get it on Google Play">
                <span className="inline-block mr-2">▶</span> Google Play
              </a>
            </Button>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img src="https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=facearea&w=400&q=80" alt="Dog with app on phone" className="rounded-3xl shadow-2xl w-64 h-64 object-cover border-4 border-white dark:border-gray-900 animate-float-reverse" />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 md:px-12 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 dark:text-white text-center">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}> 
                <AccordionTrigger className="text-lg font-bold text-gray-900 dark:text-white">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-gray-700 dark:text-gray-300">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Conversion Block */}
      <section className="px-4 md:px-12 py-16 md:py-24 flex flex-col items-center bg-gradient-to-r from-yellow-300 via-pink-300 to-blue-300 rounded-3xl mx-2 md:mx-12 shadow-xl">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 text-center">Ready to Cherish Every Wag?</h2>
        <p className="text-lg text-gray-800 mb-8 text-center max-w-xl">Start organizing your dog’s memories for free. Unlimited storage, joyful design, and total privacy—just for dog parents like you.</p>
        <Button asChild size="lg" className="bg-white text-yellow-500 font-bold shadow-xl hover:scale-105 focus:scale-105 transition-transform text-lg px-8 py-4">
          <Link href="/signup" aria-label="Start Organizing Free">Start Organizing Free</Link>
        </Button>
      </section>

      {/* Footer */}
      <footer className="px-4 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-600 dark:text-gray-400 mt-8">
        <div className="flex items-center gap-2">
          <span className="inline-block bg-gradient-to-tr from-yellow-400 via-pink-400 to-blue-400 rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold">🐶</span>
          <span className="font-bold text-lg">tgiy</span>
        </div>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-blue-500 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-blue-500 transition-colors">Terms of Service</Link>
          <a href="mailto:support@tgiy.app" className="hover:text-blue-500 transition-colors">Contact</a>
        </div>
        <span className="text-sm">© {new Date().getFullYear()} tgiy. All rights reserved.</span>
      </footer>
    </main>
  );
}

// Animations
// Add these to your global CSS (e.g., globals.css):
// .animate-bounce-slow { animation: bounce 2.5s infinite; }
// .animate-float { animation: float 3s ease-in-out infinite alternate; }
// .animate-float-reverse { animation: float 3s ease-in-out infinite alternate-reverse; }
// @keyframes float { 0% { transform: translateY(0); } 100% { transform: translateY(-16px); } }
