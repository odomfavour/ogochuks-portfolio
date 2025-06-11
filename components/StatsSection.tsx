'use client';
import React, { useState, useEffect, useRef } from 'react';

interface StatItemProps {
  value: string;
  label: string;
  delay?: number;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValue, setAnimatedValue] = useState('0');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        // Extract number and suffix from value (e.g., "3+" -> "3" and "+")
        const numMatch = value.match(/\d+/);
        const suffix = value.replace(/\d+/, '');

        if (numMatch) {
          const targetNum = parseInt(numMatch[0]);
          let current = 0;
          const increment = targetNum / 30; // Animate over ~1 second at 60fps

          const animateNumber = () => {
            current += increment;
            if (current >= targetNum) {
              setAnimatedValue(targetNum + suffix);
            } else {
              setAnimatedValue(Math.floor(current) + suffix);
              requestAnimationFrame(animateNumber);
            }
          };

          animateNumber();
        } else {
          setAnimatedValue(value);
        }
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, value, delay]);

  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="mb-4">
        <span className="text-[40px] font-bold text-white md:text-7xl lg:text-[48px]">
          {animatedValue}
        </span>
      </div>
      <p className="text-lg text-gray-300 md:text-xl">{label}</p>
    </div>
  );
};

const StatsSection: React.FC = () => {
  const stats = [
    {
      value: '3+',
      label: 'Years Experience',
      delay: 0,
    },
    {
      value: '20+',
      label: 'Projects Completed',
      delay: 200,
    },
    {
      value: '10+',
      label: 'Happy Clients',
      delay: 400,
    },
  ];

  return (
    <section className=" py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <div className="relative flex justify-center">
                {/* Vertical divider line - hidden on mobile, shown on md+ */}
                {index > 0 && (
                  <div className="absolute left-0 top-1/2 hidden h-24 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-blue-500 to-transparent md:block" />
                )}

                <StatItem
                  value={stat.value}
                  label={stat.label}
                  delay={stat.delay}
                />
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Mobile dividers - horizontal lines between stats on small screens */}
        {/* <div className="md:hidden">
          <div className="mt-8 mb-8 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
          <div className="mt-8 mb-8 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        </div> */}
      </div>
    </section>
  );
};

export default StatsSection;
