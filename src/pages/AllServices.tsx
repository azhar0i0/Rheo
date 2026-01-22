import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import ServiceCard from '@/components/ServiceCard';

import webDevTeam from '@/assets/web-dev-team.jpg';
import mobileDev from '@/assets/mobile-dev.jpg';
import uiUxDesign from '@/assets/ui-ux-design.jpg';
import cloudSolutions from '@/assets/cloud-solutions.jpg';
import devops from '@/assets/devops.jpg';
import flowFunction from '@/assets/flow-function.jpg';

const AllServices = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'We design visually compelling, user-centric websites that blend creativity with functional brand from scratch.',
      image: webDevTeam,
      tags: ['React', 'Node.js', 'Net'],
      reverse: false
    },
    {
      title: 'Mobile Development',
      description: 'Cross-platform mobile apps and responsive web applications that deliver exceptional user experiences.',
      image: mobileDev,
      tags: ['React', 'Flutter', 'iOS'],
      reverse: true
    },
    {
      title: 'UI UX Design',
      description: 'User-centered design solutions that combine aesthetics with functionality for optimal user engagement.',
      image: uiUxDesign,
      tags: [],
      reverse: false
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services on AWS, Azure, and Google Cloud Platform.',
      image: cloudSolutions,
      tags: ['AWS', 'Azure', 'GCP'],
      reverse: true
    },
    {
      title: 'Dev Ops and Automation',
      description: 'Streamline your development lifecycle with CI/CD pipelines and automated deployment strategies.',
      image: devops,
      tags: ['React', 'Flutter', 'K8s'],
      reverse: false
    },
    {
      title: 'Flow To Function',
      description: 'Extend your team with our skilled developers who integrate seamlessly with your existing workforce.',
      image: flowFunction,
      tags: ['Full Stack', 'Front End', 'Back End'],
      reverse: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">

      <PageHeader 
        title="Procedures"
        subtitle="Services"
        description="Ideas, stories, and strategies from the creative edge covering design, development, and the tools that bring bold digital work to life."
      />

      {/* Services List */}
      <section className="py-20">
        <div className="section-container">
          <div className="divide-y divide-border">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
                tags={service.tags}
                reverse={service.reverse}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AllServices;
