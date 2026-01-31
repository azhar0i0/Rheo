import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';
import contactIllustration from '@/assets/contact-illustration.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const StartProject = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    description: ''
  });

  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const navigate = useNavigate();

  const services = [
    'Web Development',
    'Mobile Development',
    'UI/UX Design',
    'Cloud Solutions',
    'DevOps & Automation',
    'Full Stack Development',
    'Other Services'
  ];

  const faqItems = [
    {
      question: 'What kind of services can I get from Rheo Technologies?',
      answer: 'Rheo Technologies offers comprehensive digital services including web development, mobile apps, UI/UX design, cloud solutions, DevOps automation, and full-stack development. We handle everything from MVPs to enterprise-level applications.'
    },
    {
      question: 'Can Rheo Technologies handle my project from start to finish?',
      answer: 'Yes, Rheo Technologies manages the entire process from planning and design to development, deployment, and ongoing support.'
    },
    {
      question: 'Do you build both web and mobile applications?',
      answer: 'Absolutely! We specialize in both web and mobile development, including cross-platform solutions using React Native and Flutter.'
    },
    {
      question: 'Can Rheo Technologies work with existing software or redesign my product?',
      answer: 'Yes, we can integrate with your existing software, perform redesigns, or build entirely new features on top of your current systems.'
    },
    {
      question: 'Will my software be scalable and secure?',
      answer: 'Security and scalability are core priorities. We implement best practices in security, use cloud-native architectures, and design systems that grow with your business.'
    },
    {
      question: 'Do you provide support after the project is launched?',
      answer: 'Yes, we offer ongoing maintenance, support packages, and continuous improvement services after launch.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-[#000000]">

      {/* Form Section */}
      <section className="pt-24 pb-20">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              {/* Back Button */}
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 5L8 12L15 19"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Back
              </button>

              <div className="mb-16">
                <p className="text-primary text-sm">Rheo Technologies</p>
                <h1 className="font-display text-[67px] font-bold">
                  <span className="text-foreground">Start your</span>{' '}
                  <span className="text-primary">Project</span>
                </h1>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm text-foreground mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your Name"
                    className="w-full bg-transparent border-b border-border pb-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm text-foreground mb-2">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter the Email"
                    className="w-full bg-transparent border-b border-border pb-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                {/* Service Select */}
                <div className="relative">
                  <label className="block text-sm text-foreground mb-2">What you need from us?</label>
                  <button
                    type="button"
                    onClick={() => setIsSelectOpen(!isSelectOpen)}
                    className="w-full flex items-center justify-between bg-transparent border-b border-border pb-3 text-left"
                  >
                    <span className={formData.service ? 'text-foreground' : 'text-muted-foreground'}>
                      {formData.service || 'Select'}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${isSelectOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isSelectOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute z-50 top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-lg overflow-hidden"
                    >
                      {services.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => {
                            setFormData(prev => ({ ...prev, service }));
                            setIsSelectOpen(false);
                          }}
                          className="w-full px-4 py-3 text-left text-foreground hover:bg-secondary transition-colors"
                        >
                          {service}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm text-foreground mb-2">Project Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Type Here..."
                    rows={4}
                    className="w-full bg-transparent border border-border rounded-lg p-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn-primary w-full px-[214px] md:w-auto text-white hover:bg-[#87C296] hover:text-black transition-all"
                >
                  Submit Project Query
                </button>
              </form>
            </motion.div>

            {/* Contact Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="hidden md:flex justify-end mt-24"
            >
              <div className="relative">
                <div>
                  <img
                    src={contactIllustration}
                    alt="Contact illustration"
                    className="w-120 h-120 object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 pb-48">
        <div>
          <div className="faq-section px-8 md:px-12 rounded-3xl py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-24"
            >
              <p className="text-sm text-foreground/70 mb-2">(FAQ)</p>
              <h2 className="font-display text-4xl md:text-[60px] font-bold mb-2">
                Your Questions, Answered
              </h2>
              <p className="text-foreground/70">services that Rheo Technologies Provide</p>
            </motion.div>

            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StartProject;
