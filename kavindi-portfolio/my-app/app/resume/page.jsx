"use client";

import {
    FaHtml5, 
    FaCss3, 
    FaJs,
    FaReact,
    FaFigma,
    FaNodeJs,
} from 'react-icons/fa';

import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';

// about data
const about = {
    title: 'About me',
    description: 'An AI-powered application designed to modernize and scale traditional Ayurvedic practices in Sri Lanka',
    info: [
        {
            fieldName: "Name",
            fieldValue: "Kavindi Wijesundara",
        },
        {
            fieldName: "Phone",
            fieldValue: "(+94) 740 605 197",
        },
        {
            fieldName: "Age",
            fieldValue: "22",
        },
        {
            fieldName: "Experience",
            fieldValue: "2+ Years",
        },
        {
            fieldName: "Nationality",
            fieldValue: "Sinhala"
        },
        {
            fieldName: "Email",
            fieldValue: "kavindiwijesundara910@gmail.com"
        },
        {
            fieldName: "Languages",
            fieldValue: "English, Sinhala"
        },
        
    ]
};

// experience data
const experience = {
    icon: '',
    title: 'My Experience',
    description: 'An AI-powered application designed to modernize and scale traditional Ayurvedic practices in Sri Lanka',
    items: [
        {
           company: "blah blah blah",
           position: "blah blah blah",
           duration: "Summer 2021", 
        },
        {
           company: "blah blah blah",
           position: "blah blah blah",
           duration: "2019 - 2021", 
        },
        {
           company: "blah blah blah",
           position: "blah blah blah",
           duration: "2020 - 2025", 
        },
        {
           company: "blah blah blah",
           position: "blah blah blah",
           duration: "2020 - 2025", 
        },
        {
           company: "blah blah blah",
           position: "blah blah blah",
           duration: "2020 - 2025", 
        },
        {
           company: "blah blah blah",
           position: "blah blah blah",
           duration: "2020 - 2025", 
        },
    ],
};

// education data
const education = {
    icon: '',
    title: 'My Education',
    description: 'An AI-powered application designed to modernize and scale traditional Ayurvedic practices in Sri Lanka',
    items: [
        {
           university: "Univercity of kelaniya",
           degree: "Physical Science",
           duration: "2024 - 2027", 
        },
        {
           university: "Informatics Institute of technology",
           degree: "AI and Data Science",
           duration: "2024 - 2027", 
        },
        {
           school: "Visakha Vidyalaya",
           stream: "Physical Science",
           duration: "2022", 
        },
        
    ],
};

// skills 
const skills = {
    title: "My skills",
    description: "An AI-powered application designed to modernize and scale traditional Ayurvedic practices in Sri Lanka",
    skillList:[
        {
            icon: <FaCss3 />,
            name: "Css3",
        },
        {
            icon: <FaHtml5 />,
            name: "Html5",
        },
        {
            icon: <FaReact />,
            name: "react.js",
        },
        {
            icon: <FaJs />,
            name: "javascript",
        },
        {
            icon: <FaNodeJs />,
            name: "node.js",
        },
        {
            icon: <FaFigma />,
            name: "figma",
        },
        {
            icon: <SiNextdotjs />,
            name: "next.js",
        },
        {
            icon: <SiTailwindcss />,
            name: "tailwind.css",
        },

    ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@/components/ui/tooltip';

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const Resume = () => {
    return (
    <motion.div 
        initial={{opacity: 0}} 
        animate={{
        opacity: 1,
        transition: {
            delay: 2.4,
            duration: 0.4,
            ease: "easeIn"},
        }}

        className="min-h-[80vh] flex justify-center py-12 xl:py-0"
    >
        <div className="container mx-auto  pt-[10px] ">
            <Tabs 
                defaultValue="experience"
                className="flex flex-col xl:items-start xl:flex-row gap-[60px]"
            >
                <TabsList className="flex flex-col self-start xl:sticky xl:top-0 w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                    <TabsTrigger value="experience">Experience</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                    <TabsTrigger value="about">About me</TabsTrigger>
                </TabsList>

                {/* content */}
                <div className="w-full min-h-[70vh] px-5">

                    {/* experience */}
                    <TabsContent value='experience' className="w-full" >
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{experience.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                            {experience.description}
                            </p>

                            <ScrollArea className="h-[400px] xl:h-[420px] pr-4">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {experience.items.map((item, index)=> {
                                        return (
                                            <li 
                                            key={index}
                                            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                            >
                                                <span className="text-luminousPink">{item.duration}</span>
                                                <h3 className="pb-8 text-xl max-w-[260px] max-h-[60px] text-center lg:text-left">
                                                    {item.position}
                                                </h3>
                                                <div className="flex items-center gap-3">
                                                    {/* dot */}
                                                    <span className="w-[6px] h-[6px] rounded-full bg-luminousPink"></span>
                                                    <p className="text-white/60">{item.company}</p>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                                <ScrollBar orientation="vertical" />
                            </ScrollArea>
                        </div>
                    </TabsContent>

                    {/* education */}
                    <TabsContent value='education' className="w-full" >
                           <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{education.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                            {education.description}
                            </p>

                            <ScrollArea className="h-[400px] xl:h-[420px] pr-4">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {education.items.map((item, index)=> {
                                        return (
                                            <li 
                                            key={index}
                                            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                            >
                                                <span className="text-luminousPink">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] max-h-[60px] text-center lg:text-left">
                                                    {item.degree}
                                                </h3>
                                                <div className="flex items-center gap-3">
                                                    {/* dot */}
                                                    <span className="w-[6px] h-[6px] rounded-full bg-luminousPink"></span>
                                                    <p className="text-white/60">{item.university}</p>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                                <ScrollBar orientation="vertical" />
                            </ScrollArea>
                        </div>
                    </TabsContent> 

                    {/* skills */}
                    <TabsContent value='skills' className="w-full" >
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ul className="pt-[10px] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 xl:gap-[30px] text-center">
                                    {skills.skillList.map((skill, index)=> {
                                        return (
                                        <li key={index}>
                                           <TooltipProvider delayDuration={100}>
                                              <Tooltip>
                                                <TooltipTrigger className="h-[140px] w-[140px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                    <div className="text-5xl group-hover:text-luminousPink transition-all duration-300">{skill.icon}</div>
                                                </TooltipTrigger>  
                                                <TooltipContent className="bg-white text-primary font-bold">
                                                    <p className="capitalize">{skill.name}</p>
                                                </TooltipContent>
                                              </Tooltip>  
                                           </TooltipProvider>
                                        </li>
                                        );
                                    })}
                                </ul>
                            </div>
                    </TabsContent> 

                    {/* about */}
                    <TabsContent value='about' className="w-full text-center xl:text-left" >
                        <div className="flex flex-col gap-[30px]">
                            <h3 className="text-4xl font-bold">{about.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                {about.info.map((item, index) => {
                                    return (
                                        <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                            <span className="text-white/60">{item.fieldName}</span>
                                            <span className="text-xl">{item.fieldValue}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div> 
                    </TabsContent> 
                </div>
            </Tabs> 
        </div> 
    </motion.div> 
    ); 
}

export default Resume; 