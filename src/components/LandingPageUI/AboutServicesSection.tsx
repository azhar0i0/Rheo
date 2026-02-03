import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// Images
import pipelineImg from '@/assets/web-dev-team.jpg';
import codeGenImg from '@/assets/blog-ai.jpg';

export default function AboutServicesSection() {
    const [activeTab, setActiveTab] = useState<'pipeline' | 'codegen'>('pipeline');

    const tabs = {
        pipeline: {
            label: 'Streamlined Development Pipeline',
            image: pipelineImg,
            title: (
                <>
                    Streamlined Development<br />Pipeline
                </>
            ),
            desc: `Our streamlined pipeline ensures every project moves from idea to deployment
      with clarity and precision. Automated workflows, version control, CI/CD,
      and modular architecture keep development fast, predictable, and scalable.`,
        },
        codegen: {
            label: 'Smart Code Generation',
            image: codeGenImg,
            title: (
                <>
                    Smart Code<br />Generation
                </>
            ),
            desc: `Smart code generation accelerates development by transforming ideas
      and logic into clean efficient code. It reduces repetitive work, improves
      consistency and helps teams focus on solving real problems.`,
        },
    };

    const current = tabs[activeTab];

    return (
        <section className="bg-black text-white py-[120px] mt-24">
            <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
                className="max-w-[90%] mx-auto px-6">

                {/* Label */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2">
                    <span className="text-[14px] text-[#A78BFA] tracking-wide">
                        ⬤ ‎ About Our Services ( How we do Everything )
                    </span>
                </motion.div>

                {/* Heading */}
                <h2 className="max-w-[90%] text-[20px] leading-[1.15] font-semibold text-[#CFFAFE] mb-10">
                    Multiple workflows to build, all powered by one engine <br /> working quietly in the background.
                </h2>

                {/* Tabs */}
                <div className="relative mb-16">

                    {/* Gray base line */}
                    <div className="absolute left-0 bottom-0 w-full h-px bg-[#1f1f1f]" />

                    <div className="relative flex items-center gap-10 text-[12px]">
                        {Object.entries(tabs).map(([key, tab]) => (
                            <button
                                key={key}
                                onClick={() => setActiveTab(key as 'pipeline' | 'codegen')}
                                className={`relative pb-4 transition-colors ${activeTab === key
                                    ? 'text-white'
                                    : 'text-[#666] hover:text-white'
                                    }`}
                            >
                                {tab.label}

                                {/* Blue active line */}
                                {activeTab === key && (
                                    <motion.span
                                        layoutId="tabUnderline"
                                        className="absolute left-0 bottom-0 h-[2px] w-full bg-[#0ea5e9] z-10"
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>


                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-center">

                    {/* Left Image */}
                    <div className="w-full overflow-hidden">
                        <img
                            src={current.image}
                            alt=""
                            className="w-full h-[420px] object-cover transition-all duration-500"
                        />
                    </div>

                    {/* Right Content */}
                    <div className="max-w-[520px] ml-auto">
                        <h3 className="text-[38px] leading-[1.1] font-semibold text-[#0ea5e9] mb-6">
                            {current.title}
                        </h3>

                        <p className="text-[16px] leading-[1.7] text-[#9CA3AF] mb-10">
                            {current.desc}
                        </p>

                        <Link
                            to="/all-services"
                            className="inline-flex items-center justify-center bg-[#0891b2] hover:bg-[#0ea5e9] transition-colors text-white text-[15px] font-medium px-10 py-2 rounded-full"
                        >
                            View All
                        </Link>
                    </div>

                </div>
            </motion.div>
        </section>
    );
}
