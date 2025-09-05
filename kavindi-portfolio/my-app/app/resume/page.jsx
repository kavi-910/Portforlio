"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Brain, Code2, Cloud, Globe, Database, Wrench } from "lucide-react";

/* ---------------- About / Experience / Education ---------------- */
const about = {
  title: "About me",
  description:
    "AI & Data Science undergrad from Sri Lanka focused on machine learning building recommendation engines and predictive models, then delivering them as reliable, privacy-aware services. I also craft thoughtful, accessible UIs that turn those models into smooth, real-world experiences; open to internships and freelance.",
  info: [
    { fieldName: "Name", fieldValue: "Kavindi Wijesundara" },
    { fieldName: "Phone", fieldValue: "(+94) 740 605 197" },
    { fieldName: "Age", fieldValue: "22" },
    { fieldName: "Experience", fieldValue: "2+ Years" },
    { fieldName: "Nationality", fieldValue: "Sinhala" },
    { fieldName: "Email", fieldValue: "kavindiwijesundara910@gmail.com" },
    { fieldName: "Languages", fieldValue: "English, Sinhala" },
  ],
};

const experience = {
  icon: "",
  title: "My Experience",
  description:
    "I am an undergraduate pursuing a 12-month, full-time internship in Machine Learning, Artificial Intelligence, and Data Science (immediate start). My primary interest is applied ML and data, and I’m open to adjacent technical responsibilities across the stack. Remote or on-site",
  items: [],
};

const education = {
  icon: "",
  title: "My Education",
  description:
    "I’m pairing a strong foundation in Physical Science with a focused degree in AI & Data Science. My studies emphasise statistics, algorithms, and practical machine-learning projects—everything from data wrangling to model deployment.",
  items: [
    { university: "Univercity of kelaniya", degree: "Physical Science", duration: "2024 - 2027" },
    { university: "Informatics Institute of technology", degree: "AI and Data Science", duration: "2024 - 2027" },
    { university: "Visakha Vidyalaya", degree: "Physical Science", duration: "2013 - 2022" },
  ],
};

/* ---------------- Technical Skills---------------- */
const techSkills = {
  title: "My Skills",
  blurb:
    "I work across applied ML and data, ship models to production, and build the interfaces and infra around them.",
  groups: [
    {
      icon: <Brain className="h-5 w-5" />,
      title: "AI/ML & Data Science",
      items: [
        "TensorFlow","PyTorch","OpenCV","Pandas","NumPy","Matplotlib","Seaborn",
        "Scikit-learn","Computer Vision",
      ],
    },
    {
      icon: <Code2 className="h-5 w-5" />,
      title: "Programming Languages",
      items: ["Python","Java","C++","JavaScript","HTML5","CSS3","SQL"],
    },
    {
      icon: <Cloud className="h-5 w-5" />,
      title: "Big Data & Cloud",
      items: ["Apache Spark","AWS","Azure","Docker"],
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Web Development",
      items: ["React","Next.js","Node.js","FastAPI","Flask","Streamlit","REST APIs"],
    },
    {
      icon: <Database className="h-5 w-5" />,
      title: "Databases",
      items: ["MySQL","MongoDB"],
    },
    {
      icon: <Wrench className="h-5 w-5" />,
      title: "Tools & Others",
      items: ["Git","Jupyter","Tableau","Google Colab"],
    },
  ],
};

/* ---------------- Small UI helpers ---------------- */
function Pill({ label }) {
  return (
    <span
      className="inline-flex items-center rounded-full border border-white/10 px-3 py-1 text-sm text-white/80 hover:text-white hover:border-luminousPink/40 hover:bg-luminousPink/10 transition-colors"
    >
      {label}
    </span>
  );
}

// Card-less “panel” to avoid the missing module
function SkillsGroup({ icon, title, items }) {
  return (
    <div className="rounded-xl bg-[#232329] border border-white/10 overflow-hidden">
      <div className="px-4 py-3 border-b border-white/10">
        <div className="flex items-center gap-2 text-base">
          <span className="text-luminousPink">{icon}</span>
          <span>{title}</span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex flex-wrap gap-2">
          {items.map((it) => (
            <Pill key={it} label={it} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TechSkills() {
  return (
    <div className="flex flex-col gap-6 pb-20">
      <div className="text-center xl:text-left">
        <h3 className="text-4xl font-bold">{techSkills.title}</h3>
        <p className="text-white/60 mt-2 max-w-[700px] mx-auto xl:mx-0">{techSkills.blurb}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {techSkills.groups.map((g) => (
          <SkillsGroup key={g.title} icon={g.icon} title={g.title} items={g.items} />
        ))}
      </div>
    </div>
  );
}

/* ---------------- Page ---------------- */
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto pt-[10px] ">
        <Tabs defaultValue="experience" className="flex flex-col xl:items-start xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col self-start xl:sticky xl:top-0 w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="w-full min-h-[70vh] px-5">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>

                <ScrollArea className="h-[400px] xl:h-[420px] pr-4">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-luminousPink">{item.duration}</span>
                        <h3 className="pb-8 text-xl max-w-[260px] max-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-luminousPink" />
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <ScrollBar orientation="vertical" />
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left pb-20">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>

                <ScrollArea className="h-[400px] xl:h-[420px] pr-4">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-luminousPink">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] max-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-luminousPink" />
                          <p className="text-white/60">{item.university}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <ScrollBar orientation="vertical" />
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full">
              <TechSkills />
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
