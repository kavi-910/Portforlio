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
            name: "js",
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

import { ScrollArea } from '@/components/ui/scroll-area';
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

        className='="min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
        <div className="container mx-auto">
            <Tabs 
                defaultValue="experience"
                className="flex flex-col xl:flex-row gap-[60px]"
            >
                <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                    <TabsTrigger value="experience">Experience</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                    <TabsTrigger value="about">About me</TabsTrigger>
                </TabsList>

                {/* content */}
                <div className="min-h-[70vh] w-full">
                    {/* experience */}
                    <TabsContent value='experience' className="w-full" >
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{experience.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                        </div>
                    </TabsContent>
                    {/* education */}
                    <TabsContent value='education' className="w-full" >
                        education
                    </TabsContent>
                </div>
                    {/* skills */}
                    <TabsContent value='skills' className="w-full" >
                        skills
                    </TabsContent>
                    {/* about */}
                    <TabsContent value='about' className="w-full" >
                        about
                    </TabsContent>
            </Tabs>
        </div>
    </motion.div>
    );
}

export default Resume;