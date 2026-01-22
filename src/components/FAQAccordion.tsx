import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

const FAQAccordion = ({ items }: FAQAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Split items into two columns
  const leftItems = items.filter((_, i) => i % 2 === 0);
  const rightItems = items.filter((_, i) => i % 2 !== 0);

  const renderItem = (item: FAQItem, index: number, actualIndex: number) => (
    <motion.div
      key={actualIndex}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="border border-border/50 rounded-lg bg-card/30 overflow-hidden"
    >
      <button
        onClick={() => toggleItem(actualIndex)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-card/50 transition-colors"
      >
        <span className="text-foreground font-medium pr-4">
          {actualIndex + 1}. {item.question}
        </span>
        <span className="flex-shrink-0 text-primary">
          {openIndex === actualIndex ? (
            <Minus className="w-5 h-5" />
          ) : (
            <Plus className="w-5 h-5" />
          )}
        </span>
      </button>
      <AnimatePresence>
        {openIndex === actualIndex && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="space-y-4">
        {leftItems.map((item, index) => renderItem(item, index, index * 2))}
      </div>
      <div className="space-y-4">
        {rightItems.map((item, index) => renderItem(item, index, index * 2 + 1))}
      </div>
    </div>
  );
};

export default FAQAccordion;
