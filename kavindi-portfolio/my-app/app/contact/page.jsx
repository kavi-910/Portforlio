"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Select, SelectContent, SelectLabel, SelectGroup, SelectTrigger, SelectItem, SelectValue } from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "(+94) 740 605 197",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "kavindiwijesunara910@gmail.com",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Address",
        description: "18/1, D.W.Rupasinghe Rd, Nugegoda."
    },
];

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {

  const [service, setService] = useState("");
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ 
                opacity: 1, 
                transition: {delay:2.4, duration:0.4, ease:"easeIn"},
            }}
            className="py-6"
        >
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row gap-[30px]">
                {/* form */}
                <div className="xl:w-[54%] order-2 xl:order-none">
                    <form 
                        action="https://formspree.io/f/myzdbozv"
                        method="POST"
                        className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
                    >
                        <h3 className="text-4xl text-luminousPink">Let's work together</h3>
                        <p className="text-white/60 sm:max-w-[70ch] break-words">I’m an AI & Data Science undergrad available for projects and internships. Share your idea, and I’ll follow up with a plan.
                        </p>
                        {/* input */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input name="firstname" placeholder="Firstname"/>
                            <Input name="lastname" placeholder="Lastname"/>
                            <Input name="email" type="email" placeholder="Email address"/>
                            <Input name="phone" placeholder="Phone number"/>
                        </div>
                        {/* select */}
                        <Select value={service} onValueChange={setService}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Select a service</SelectLabel>
                                    <SelectItem value="Web Develpment">Web Development</SelectItem>
                                    <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                                    <SelectItem value="AI & Machine Learning">AI & Machine Learning</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <input type="hidden" name="service" value={service} />
                        {/* textarea */}
                        <Textarea
                            name="message" 
                            className="h-[200px]" 
                            placeholder="Type your message here."
                        />
                        {/* btn */}
                        <Button size="md" className="max-w-40">
                            Send message
                        </Button>
                    </form>
                </div>
                {/* info */}
                <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                    <ul className="flex flex-col gap-10">
                        {info.map((item, index)=> {
                            return (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-luminousPink rounded-md flex items-center justify-center">
                                        <div>{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className="text-xl">{item.description}</h3>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
        </motion.section>
    );
}

