import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  reverse?: boolean;
}

const ServiceCard = ({ title, description, image, tags, reverse = false }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`grid md:grid-cols-3 gap-8 py-12`}
    >
      {/* Title */}
      <div>
        <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
          {title}
        </h3>
      </div>

      {/* Image */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="relative overflow-hidden rounded-xl group w-150"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.div>

      {/* Description & Tags */}
      <div className={`space-y-4`}>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
