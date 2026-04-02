"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  features,
  platformTabs,
  socialProofStats,
  testimonials,
} from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Data arrays
  const navigationItems = [
    { label: "Features", href: "#features" },
    { label: "About", href: "#about" },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-yellow-900/20 via-orange-900/20 to-green-900/20 animate-pulse"></div>

      {/* Dynamic cursor effect */}
      <div
        className="fixed w-96 h-96 bg-linear-to-r from-yellow-400/30 to-yellow-600/20 rounded-full blur-3xl pointer-events-none z-0"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          transition: "all 0.3s ease-out",
        }}
      ></div>

      {/* Hero Section */}
      <section className="relative z-10 mt-24 pb-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div className="space-y-5 text-center lg:text-left">

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05]">
              <span className="block text-white">Build.</span>
              <span className="block font-light italic text-yellow-300">
                Publish.
              </span>
              <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(253,224,71,0.75)]">
                Grow.
              </span>
            </h1>

            {/* Bullets – clearer & bigger */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-base sm:text-lg text-gray-200">
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400" />
              <div>
                <p className="font-semibold text-white">AI Content Creation</p>
                <p className="text-gray-400 text-sm">
                  Generate blogs & posts using smart AI tools
                </p>
              </div>
            </li>

            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400" />
              <div>
                <p className="font-semibold text-white">One-Click Publishing</p>
                <p className="text-gray-400 text-sm">
                  Publish drafts instantly to your public feed
                </p>
              </div>
            </li>

            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400" />
              <div>
                <p className="font-semibold text-white">Live Analytics</p>
                <p className="text-gray-400 text-sm">
                  Track views, growth & engagement in real time
                </p>
              </div>
            </li>

            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400" />
              <div>
                <p className="font-semibold text-white">Creator Dashboard</p>
                <p className="text-gray-400 text-sm">
                  Manage posts, drafts & performance easily
                </p>
              </div>
            </li>
          </ul>

          {/* Description */}
          <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Creatify is an{" "}
            <span className="font-semibold text-yellow-300">
              AI-powered content publishing platform
            </span>{" "}
            where creators can write, publish, and analyze content —
            all from a single dashboard.
          </p>


            {/* CTA buttons – inline */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link href="/dashboard">
                <Button size="lg" variant="primary" className="rounded-full">
                  Start Free
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>

              <Link href="/feed">
                <Button variant="outline" size="lg" className="rounded-full">
                  Explore Feed
                </Button>
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <Image
              src="/banner-1.png"
              alt="Platform Banner"
              width={420}
              height={520}
              className="w-full max-w-sm object-cover rounded-full"
              priority
            />
          </div>

        </div>
      </section>

      {/* Features Grid */}
      <section
        id="features"
        className="relative z-10 mt-24 pb-12 px-4 sm:px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6">
              <span className="gradient-text-primary">Everything you need</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              From AI-powered writing assistance to advanced analytics,
              we&apos;ve built the complete toolkit for modern creators.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group transition-all duration-300 hover:scale-105 card-glass"
              >
                <CardContent className="p-6 sm:p-8">
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl mb-3 sm:mb-4 text-white">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base text-gray-400">
                    {feature.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Platform Showcase */}
      <section className="relative z-10 py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">
              <span className="gradient-text-primary">How it works</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Three powerful modules working together to supercharge your
              content creation.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/3">
              <div className="space-y-4">
                {platformTabs.map((tab, index) => (
                  <Button
                    key={index}
                    variant={activeTab === index ? "outline" : "ghost"}
                    onClick={() => setActiveTab(index)}
                    className="w-full justify-start h-auto p-6 "
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          activeTab === index
                            ? "bg-gradient-to-br from-yellow-500 to-orange-500"
                            : "bg-muted"
                        }`}
                      >
                        <tab.icon className="w-6 h-6" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-bold text-lg">{tab.title}</h3>
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            </div>

            <div className="lg:w-2/3">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">
                    {platformTabs[activeTab].title}
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-400">
                    {platformTabs[activeTab].description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {platformTabs[activeTab].features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-r from-gray-900/50 to-yellow-900/20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-12 sm:mb-16">
            <span className="gradient-text-primary">
              Loved by creators worldwide
            </span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-8">
            {socialProofStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black mb-2 gradient-text-accent">
                  {stat.metric}
                </div>
                <div className="text-gray-400 text-base sm:text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="relative z-10 py-16 sm:py-24 px-4 sm:px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">
              <span className="gradient-text-primary">What creators say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="transition-all duration-300 hover:shadow-lg card-glass"
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="mb-6 leading-relaxed text-gray-300">
                    &quot;{testimonial.content}&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12">
                      <Image
                        src={`https://images.unsplash.com/photo-${testimonial.imageId}?w=100&h=100&fit=crop&crop=face`}
                        alt={testimonial.name}
                        fill
                        className="rounded-full border-2 border-gray-700 object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {testimonial.role}
                      </div>
                      <Badge variant="secondary" className="mt-1">
                        {testimonial.company}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 mt-24 pb-12 px-4 sm:px-6" >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 sm:mb-8">
            <span className="gradient-text-primary">Ready to create?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto">
            Join thousands of creators who are already building their audience
            and growing their business with our AI-powered platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/dashboard">
              <Button
                size="xl"
                variant="primary"
                className="rounded-full text-white w-full"
              >
                Start Your Journey
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/feed">
              <Button
                variant="outline"
                size="xl"
                className="rounded-full w-full"
              >
                Explore the Feed
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="relative z-10 border-t py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            Made with ❤️ by{" "}
            <span className="text-foreground font-semibold">R & S</span>
          </p>
        </div>
      </footer> */}
    </div>
  );
};

export default Home;
