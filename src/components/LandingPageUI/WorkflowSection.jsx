import { motion } from 'framer-motion';

const WORKFLOW_DATA = [
    {
        tag: "Design",
        step: "01",
        title: "Crafting Intuitive, Engaging Digital Experiences",
        points: [
            { label: "Wireframing & Mockups:", text: "Visualizing layouts for seamless user flow." },
            { label: "UI/UX Design:", text: "Creating engaging interfaces with intuitive navigation." },
            { label: "Prototyping:", text: "Testing early concepts before development begins." },
            { label: "Responsive Design:", text: "Ensuring consistent experience across all devices." },
        ],
    },
    {
        tag: "Development",
        step: "02",
        title: "Turning Designs Into Functional Systems",
        points: [
            { label: "Front-End Development:", text: "Crafting visually dynamic and interactive interfaces." },
            { label: "Framework Selection:", text: "Choosing the best technologies for performance." },
            { label: "Coding Standards:", text: "Writing clean, maintainable, and scalable code." },
            { label: "Component Development:", text: "Building reusable UI elements for efficiency." },
        ],
    },
    {
        tag: "Integration",
        step: "03",
        title: "Structuring the Core of Applications",
        points: [
            { label: "Page Construction:", text: "Assembling layouts and navigation structure." },
            { label: "Module Development:", text: "Creating functional units for seamless operations." },
            { label: "Version Control:", text: "Managing updates and collaborative coding effectively." },
            { label: "Optimization:", text: "Improving performance for speed and reliability.", text: "Assembling layouts and navigation structure." },
        ],
    },
    {
        tag: "Backend",
        step: "04",
        title: "Powering Systems with Robust Infrastructure",
        points: [
            { label: "Client Review:", text: "Structuring data for efficiency and security." },
            { label: "API Development:", text: "Enabling communication between frontend and backend." },
            { label: "Server Configuration:", text: "Optimizing servers for stability and speed." },
            { label: "Security Implementation:", text: "Protecting applications against threats and breaches." },
        ],
    },
    {
        tag: "Integration",
        step: "05",
        title: "Connecting Systems for Seamless Operation",
        points: [
            { label: "Third-Party Services:", text: "Linking external tools and APIs." },
            { label: "Payment Gateways:", text: "Securely enabling financial transactions." },
            { label: "Authentication Systems:", text: "Managing user accounts and access control." },
            { label: "Automation Tools:", text: "Streamlining repetitive processes efficiently." },
        ],
    },
    {
        tag: "Launch",
        step: "06",
        title: "Ensuring Flawless Performance and Reliability",
        points: [
            { label: "Unit Testing:", text: "Verifying individual components function correctly." },
            { label: "System Testing:", text: "Checking overall system stability and performance." },
            { label: "Bug Fixing:", text: "Identifying and resolving errors promptly." },
            { label: "User Acceptance Testing:", text: "Ensuring product meets client expectations." },
        ],
    },
];

const WorkflowSection = () => {
    return (
        <section className="bg-black py-28">
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="max-w-[90%] mx-auto hidden md:block">

                {/* Header */}
                <div className="mb-24">
                    <div className="flex items-center gap-2 mb-6">
                        <span className="text-[#1fb6ff] text-[14px] tracking-wide">
                            ⬤ ‎ ‎ WorkFlow
                        </span>
                    </div>

                    <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[100px] leading-[1.15]">
                        Rheo Technologies SmartBuild Process
                    </h2>
                </div>

                {/* Workflow Rows */}
                {WORKFLOW_DATA.map((item, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        key={item.step}
                        className={`border-t border-[#1fb6ff]/40 py-20`}
                    >
                        <div
                            className="grid gap-20 mt-20"
                            style={{ gridTemplateColumns: "160px 1fr" }}
                        >

                            {/* Left Tag */}
                            <div>
                                <span className="inline-flex items-center justify-center px-6 py-2 rounded-full border text-[#1fb6ff] text-[14px]">
                                    {item.tag}
                                </span>
                            </div>

                            {/* Right Content */}
                            <div className="flex gap-20">
                                <span className="text-[#1fb6ff] text-4xl font-medium">
                                    {item.step}
                                </span>

                                <div>
                                    <h3 className="text-white text-[22px] font-semibold mb-6">
                                        {item.title}
                                    </h3>

                                    <ul className="space-y-3 text-white/60 text-[15px] leading-[1.7]">
                                        {item.points.map((point, idx) => (
                                            <li key={idx}>
                                                <span className="text-white">{point.label}</span>{" "}
                                                {point.text}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                ))}

            </motion.div>

            
            {/* Mobile Workflow Layout */}
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="block lg:hidden">
                <div className="max-w-[92%] mx-auto">

                    {/* Mobile Header */}
                    <div className="mb-16">
                        <span className="text-[#1fb6ff] text-[13px] tracking-wide">
                            ⬤ ‎ ‎ Workflow
                        </span>

                        <h2 className="text-white text-3xl font-semibold mt-4 leading-tight">
                            Rheo Technologies SmartBuild Process
                        </h2>
                    </div>

                    {/* Mobile Cards */}
                    <div className="space-y-12">
                        {WORKFLOW_DATA.map((item) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                viewport={{ once: true }}
                                className="border border-[#1fb6ff]/30 rounded-2xl p-6"
                            >
                                {/* Step + Tag */}
                                <div className="flex items-center justify-between mb-6">
                                    <span className="text-[#1fb6ff] text-xl font-medium">
                                        {item.step}
                                    </span>

                                    <span className="px-4 py-1 rounded-full border border-[#1fb6ff]/40 text-[#1fb6ff] text-[12px]">
                                        {item.tag}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-white text-lg font-semibold mb-4 leading-snug">
                                    {item.title}
                                </h3>

                                {/* Points */}
                                <ul className="space-y-3 text-white/70 text-[14px] leading-relaxed">
                                    {item.points.map((point, idx) => (
                                        <li key={idx}>
                                            <span className="text-white font-medium">
                                                {point.label}
                                            </span>{" "}
                                            {point.text}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default WorkflowSection;
