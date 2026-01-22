"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, ArrowRight } from "lucide-react";

const projects = [
    {
        title: "Power Technos",
        url: "https://www.powertechnos.com/",
        image: "/img/powertechnos.png",
        description: "Industrial Tech Solutions",
        color: "from-blue-50 to-indigo-100"
    },
    {
        title: "Celtic Shades",
        url: "https://celticshades.ca/",
        image: "/img/celticshades.png",
        description: "Premium Window Treatments",
        color: "from-gray-50 to-slate-100"
    },
    {
        title: "Aarohya",
        url: "https://aarohya.com/",
        image: "/img/aarohya.png",
        description: "Modern E-Commerce Store",
        color: "from-orange-50 to-red-100"
    },
    {
        title: "Quinte Malayalee Association",
        url: "https://quintemalayaleeassociation.ca/",
        image: "/img/qma.png",
        description: "Community Portal",
        color: "from-teal-50 to-teal-100"
    },
    {
        title: "Igen Properties",
        url: "https://igenproperties.org/",
        image: "/img/igen.png",
        description: "Property Management System",
        color: "from-purple-50 to-fuchsia-100"
    },
    {
        title: "Revive Hospital",
        url: "https://revivehospital.cloud/login",
        image: "/img/Revive.png",
        description: "Hospital Management Software",
        color: "from-cyan-50 to-sky-100"
    },
    {
        title: "Agro Green Venture",
        url: "https://agrogreenventure.in/",
        image: "/img/aagrogreenventure.png",
        description: "Agricultural Innovation Platform",
        color: "from-green-50 to-emerald-100"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight text-gray-900"
                >
                    Selected Works
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100"
                        >
                            <div className={`h-64 overflow-hidden relative bg-gradient-to-br ${project.color} p-8 flex items-center justify-center`}>
                                <div className="relative w-full h-full shadow-lg rounded-xl overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover object-top"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
                            </div>

                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-1">{project.title}</h3>
                                        <p className="text-sm text-gray-500 font-medium">{project.description}</p>
                                    </div>
                                </div>

                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors group-hover:gap-3"
                                >
                                    Visit Website <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
