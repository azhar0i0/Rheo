import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';

import blogAi from '@/assets/blog-ai.jpg';
import blogRobot from '@/assets/blog-robot.jpg';
import blogNetwork from '@/assets/blog-network.jpg';
import cloudSolutions from '@/assets/cloud-solutions.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const Blog = () => {
  const blogPosts = [
    {
      image: blogAi,
      quote: "Discover the latest trends, tools, and techniques shaping today's digital landscape. From custom web development to mobile apps and SaaS platforms, our blog provides practical insights, real-world examples, and innovative strategies to help you stay ahead in an ever-evolving tech world."
    },
    {
      image: blogRobot,
      quote: "Dive into a world of ideas, strategies, and stories behind successful software projects. Our blog explores design, development, and workflow processes, giving you inspiration, tips, and practical guidance to create impactful digital experiences that users love."
    },
    {
      image: blogNetwork,
      quote: "Our blog is dedicated to exploring the future of digital solutions. Gain insights into cutting-edge development practices, workflow optimization, and platform strategies. Learn how to craft scalable, efficient, and user-centric software that drives innovation and prepares your business for tomorrow."
    },
    {
      image: cloudSolutions,
      quote: "Our blog is a resource for businesses looking to leverage technology for growth. Learn how to optimize workflows, build scalable solutions, and implement best practices in software development, mobile apps, and SaaS platforms to achieve measurable success and operational efficiency."
    }
  ];

  const works = [
    {
      name: 'FlowDesk',
      attributes: ['Secure', 'Intuitive'],
      tags: ['Fast', 'Scalable'],
      description: 'A productivity web platform'
    },
    {
      name: 'PulseApp',
      attributes: ['Reliable', 'Modern'],
      tags: ['Responsive', 'Smooth'],
      description: 'A cross-platform mobile application'
    },
    {
      name: 'PulseApp',
      attributes: ['Reliable', 'Modern'],
      tags: ['Responsive', 'Smooth'],
      description: 'A cross-platform mobile application'
    },
    {
      name: 'CoreAPI',
      attributes: ['Efficient', 'Stable'],
      tags: ['Robust', 'Flexible'],
      description: 'A backend and integration system'
    },
    {
      name: 'CloudNest',
      attributes: ['Monitored', 'Optimized'],
      tags: ['Automated', 'Scalable'],
      description: 'A cloud and DevOps solution'
    }
  ];

  return (
    <div className="min-h-screen bg-background">

      <PageHeader 
        title="BLog"
        subtitle="Services"
        description="Ideas, stories, and strategies from the creative edge covering design, development, and the tools that bring bold digital work to life."
      />

      {/* Blog Posts */}
      <section className="py-20">
        <div className="section-container">
          <div className="space-y-24">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'md:grid-flow-dense' : ''}`}
              >
                <motion.div 
                  className={`${index % 2 !== 0 ? 'md:col-start-2' : ''}`}
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={post.image}
                    alt="Blog post"
                    className="w-full h-80 object-cover rounded-xl"
                  />
                </motion.div>
                <div className={index % 2 !== 0 ? 'md:col-start-1' : ''}>
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{post.quote}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section className="py-20">
        <div className="section-container">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground mb-8"
          >
            Works
          </motion.p>

          <div className="space-y-0">
            {works.map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="works-row"
              >
                <div>
                  <h4 className="font-display font-semibold text-foreground">{work.name}</h4>
                </div>
                <div>
                  <p className="text-foreground font-medium">
                    {work.attributes.join(' · ')}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {work.tags.join(' · ')}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground line-through">
                    {work.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
