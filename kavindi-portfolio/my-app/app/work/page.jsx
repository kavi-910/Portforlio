"use client";

import { delay, easeIn, motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

import { Autoplay, Pagination, Navigation, Mousewheel } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";


const projects = [
    {
    num: "01",
    category: "AI & Web",
    title: "Sri Ayu — AI-Driven Ayurvedic Wellness Platform",
    description:
      "Personalized Ayurvedic wellness recommendations with ML (symptom intake → herb/formulation matching). Privacy-first design; 2024–2025 (ongoing). Watch the demo and explore the project.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Python" },
      { name: "FastAPI" },
      { name: "scikit-learn" }
    ],
    image: "/assets/work/sri-ayu-1.png",
    live: "https://www.youtube.com/watch?v=-Xa89k38jSU",     
    github: "https://github.com/Sachinthana-Pathiranage/Sri-Ayu-Ayurvedic-Care/tree/Kavindi"    
   
  },
  {
    num: "02",
    category: "ML",
    title: "Prefina — AI Recommendations for Apparel eCommerce",
    description:
      "Real-time, contextual recommendations for Shopify apparel merchants using privacy-preserving UUID tracking and a scalable microservices design. Includes from-scratch ML algos (Linear/Logistic Regression, KNN, SVM, K-means, Hierarchical). 2024; 2025 (ongoing).",
    stack: [
      { name: "Python" },
      { name: "PyTorch" },
      { name: "scikit-learn" },
      { name: "FastAPI" },
      { name: "Docker" }
    ],
    image: "/assets/work/prefina-4.png",
    live: "",     
    github: "https://github.com/kavi-910/Prefina_Recommendation_System"   
  },
  {
  num: "03",
  category: "Web",
  title: "Portfolio Website",
  description:
    "Responsive personal portfolio built with Next.js, Tailwind CSS, Framer Motion animations, shadcn/ui components, and a Swiper project carousel.",
  stack: [
    { name: "next.js" },
    { name: "tailwind" },
    { name: "framer-motion" },
    { name: "shadcn-ui" },
    { name: "swiper" }
  ],
  image: "/assets/work/portfolio.png", 
  live: "https://portforlio-2ttz.vercel.app/", 
  github: "https://github.com/kavi-910/Portforlio" 
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const idx = swiper.realIndex ?? swiper.activeIndex;
    setProject(projects[idx]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: {delay:2.4, duration:0.4, ease:"easeIn"} }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* LEFT */}
          <div className="min-w-0 xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none xl:mx-0 mx-[20px]">
            <div className="flex flex-col gap-[30px]">
              {/* number (use fill color so hover is visible) */}
              <div className="text-8xl leading-none font-extrabold text-white transition-colors duration-300">
                {project.num}
              </div>

              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white transition-colors duration-500 capitalize">
                {project.category} project
              </h2>

              {/* project description */}
              <p className="text-white/60 max-w-[50ch] break-words">{project.description}</p>

              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-l text-luminousPink max-w-[50ch]">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>

              {/* border */}
              <div className="border border-white/20" />

              {/* buttons */}
              <div className="flex items-center gap-4">
                <Link href={project.live || "#"}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-luminousPink" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github || "#"}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-luminousPink" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT (Swiper) */}
          <div className="w-full xl:w-[60%]">
            <Swiper
              modules={[Autoplay, Pagination, Navigation, Mousewheel]}
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              grabCursor={false}
              loop
              autoplay={{ delay: 4000, disableOnInteraction: false }}  // auto-swipe
              pagination={{ clickable: true }}
              navigation
              mousewheel={{ forceToAxis: true, sensitivity: 1 }}

              // slider-buttons colors & sizes
              style={{
                "--swiper-theme-color": "#FFFFFF",                 
                "--swiper-pagination-color": "#FFFFFF",            // bullets active
                "--swiper-pagination-bullet-inactive-color": "#fff",
                "--swiper-pagination-bullet-inactive-opacity": "0.4",
                "--swiper-pagination-bullet-size": "8px",
                "--swiper-navigation-color": "#FFFFFF",            // arrows
                "--swiper-navigation-size": "34px",
                }}
                className="h-[320px] sm:h-[420px] xl:h-[520px] mb-12"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  {/* make each slide fill the swiper height */}
                  <div className="absolute top-0 bottom-0 h-full w-full overflow-hidden bg-black/10">
                  <div className="relative w-full h-full">
                    {/* show an image or any content */}
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      draggable={false}
                      onDragStart={(e) => e.preventDefault()}
                      className="object-cover select-none"
                      priority={index === 0}
                    />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
