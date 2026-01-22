"use client";

import { motion } from "framer-motion";

export default function Contact() {
    return (
        <footer className="bg-white text-gray-900 py-20 border-t border-gray-100">
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your project?</h2>
                    <p className="text-gray-600 mb-8 text-lg">Let's create something amazing together.</p>
                    <a
                        href="mailto:contact@example.com"
                        className="inline-block bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors"
                    >
                        Get in Touch
                    </a>

                    <div className="mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                        <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
                        <div className="flex gap-6 mt-4 md:mt-0">
                            <a href="#" className="hover:text-black transition-colors">Privacy</a>
                            <a href="#" className="hover:text-black transition-colors">Terms</a>
                            <a href="#" className="hover:text-black transition-colors">Twitter</a>
                            <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
