import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TextScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const text = "Rheo turns complex workflows into smooth, manageable steps—planning, coding, and deploying with minimal friction so developers can focus on creating instead of troubleshooting.";
  
  // Splitting by characters for that granular "pro" look
  const characters = text.split("");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // "start end" means animation starts when the top of the text hits the bottom of the screen
    // "end start" means it ends when the bottom of the text leaves the top of the screen
    offset: ["start 0.9", "start 0.2"] 
  });

  return (
    <div style={{ padding: "10vh 0" }}>
      <div 
        ref={containerRef} 
        style={{ 
          maxWidth: '1300px', 
          margin: '0 auto', 
          padding: '12px',
        }}
      >
        <p style={{ 
          fontSize: '2.5rem',
          lineHeight: '1.4', 
          color: '#666666',
          display: 'flex', 
          flexWrap: 'wrap',
        }}>
          {characters.map((char, i) => {
            const start = i / characters.length;
            const end = start + (1 / characters.length);
            
            return (
              <Character key={i} progress={scrollYProgress} range={[start, end]}>
                {char}
              </Character>
            );
          })}
        </p>
      </div>
    </div>
  );
};

const Character = ({ children, progress, range }: { children: string, progress: any, range: [number, number] }) => {
  // We transform the specific scroll range to full white opacity
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      {/* The background (dim) letter */}
      <span style={{ position: 'absolute', opacity: 1 }}>
        {children === " " ? "\u00A0" : children}
      </span>
      {/* The animated (bright) letter */}
      <motion.span style={{ opacity, color: '#fff', position: 'relative' }}>
        {children === " " ? "\u00A0" : children}
      </motion.span>
    </span>
  );
};

export default TextScroll;