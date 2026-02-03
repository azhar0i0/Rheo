import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react'; // Assuming you're using lucide-react for the icon

const accordionData = [
    {
        title: 'Product Planning',
        desc: 'Turn raw ideas into clear, structured development blueprints.',
        details:
            'We help you define product scope, prioritize features, and create a realistic roadmap. This phase ensures alignment between business goals, user needs, and technical feasibility before development begins.',
    },
    {
        title: 'Code Assistance',
        desc: 'Build faster with clean, maintainable development support.',
        details:
            'Our engineers assist with architecture decisions, code reviews, and implementation guidance. We focus on clean code, scalability, and long-term maintainability—not shortcuts.',
    },
    {
        title: 'UI/UX Support',
        desc: 'Design interfaces that are intuitive, accessible, and modern.',
        details:
            'From wireframes to polished interfaces, we help design user experiences that feel natural. Accessibility, usability, and visual clarity are built into every screen.',
    },
    {
        title: 'Deployment Guidance',
        desc: 'Launch confidently with a reliable deployment strategy.',
        details:
            'We guide you through CI/CD pipelines, environment setup, and production releases. Your product ships with stability, security, and monitoring in place.',
    },
    {
        title: 'API & Integration Help',
        desc: 'Connect systems and services without friction.',
        details:
            'We design and integrate APIs that communicate reliably with third-party tools, payment gateways, and internal services—ensuring seamless data flow and performance.',
    },
];

// Animation variants for the section
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const AccordionSection = () => {
    const [openAccordion, setOpenAccordion] = useState<number | null>(null);

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="py-12"
        >
            <div className="max-w-[90%] mx-auto px-4">
                <div className="space-y-3">
                    {accordionData.map((item, index) => {
                        const isOpen = openAccordion === index;

                        return (
                            <motion.div
                                key={item.title}
                                layout
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, ease: 'easeOut' }}
                                className="border-b border-white/10 rounded-lg overflow-hidden"
                            >
                                {/* Header */}
                                <button
                                    onClick={() => setOpenAccordion(isOpen ? null : index)}
                                    className="w-full flex items-start justify-between gap-4 py-5 text-left transition-colors hover:bg-white/5 px-2"
                                >
                                    <div className="flex-1">
                                        <motion.h4
                                            layout
                                            className={`text-lg font-semibold transition-colors text-[#CAF0F8]`}
                                        >
                                            {item.title}
                                        </motion.h4>

                                        <motion.p
                                            layout
                                            className="text-sm text-gray-400 mt-1"
                                        >
                                            {item.desc}
                                        </motion.p>
                                    </div>

                                    {/* Chevron */}
                                    <motion.span
                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                                        className="text-blue-500 mt-1"
                                    >
                                        <ChevronDown className="w-5 h-5" />
                                    </motion.span>
                                </button>

                                {/* Expandable Content */}
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            key="content"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{
                                                height: { duration: 0.35, ease: 'easeOut' },
                                                opacity: { duration: 0.25, ease: 'easeOut' },
                                            }}
                                            className="overflow-hidden"
                                        >
                                            <motion.div
                                                initial={{ y: -10 }}
                                                animate={{ y: 0 }}
                                                exit={{ y: -10 }}
                                                transition={{ duration: 0.25, ease: 'easeOut' }}
                                                className="pb-6 px-2 text-sm text-gray-400 leading-[1.7]"
                                            >
                                                {item.details}
                                            </motion.div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </motion.section>
    );
};

export default AccordionSection;