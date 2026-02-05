import { motion } from 'framer-motion';
import TestimonialCard from '@/components/TestimonialCard';

const testimonials = [
  { name: 'Imtisal Hassan', quote: 'Rheo delivers clean, reliable software with clear communication throughout the process.' },
  { name: 'Abdullah', quote: 'Working with Rheo feels smooth, organized, and genuinely collaborative.' },
  { name: 'Rana Hashir', quote: 'Rheo turns complex ideas into simple, scalable solutions.' },
  { name: 'Azhar Ali', quote: 'Every project with Rheo is handled with precision and care.' },
  { name: 'Abdullah', quote: "Rheo's development process is structured, efficient, and transparent." },
  { name: 'Haris', quote: 'The team at Rheo focuses on quality without slowing down progress.' },
];

function ServicesTestimonials() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-20 mt-24">
      <div className="max-w-[90%] mx-auto px-4">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-center md:mb-12 text-white border rounded-md py-4 w-96 mx-auto"
        >
          About Our Services
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <TestimonialCard
                name={testimonial.name}
                quote={testimonial.quote}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default ServicesTestimonials;