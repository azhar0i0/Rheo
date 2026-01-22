import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  quote: string;
  rating?: number;
}

const TestimonialCard = ({ name, quote, rating = 5 }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="testimonial-card h-full flex flex-col"
    >
      <h4 className="font-display font-semibold text-foreground mb-3">
        {name}
      </h4>
      <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">
        "{quote}"
      </p>
      <div className="flex gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
        ))}
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
