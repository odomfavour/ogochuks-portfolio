/*eslint-disable*/
'use client';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Product Manager',
    image: 'pic-2.png',
    quote:
      'Working with this team was exceptional. They delivered beyond our expectations and brought innovative solutions to complex challenges. The attention to detail was remarkable.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CTO',
    image: 'pic-3.png',
    quote:
      'The technical expertise and problem-solving skills demonstrated throughout our project were outstanding. They transformed our vision into a robust, scalable solution.',
  },
  {
    id: 3,
    name: 'Chiamaka Okeke',
    role: 'UI/UX Designer',
    image: 'pic-1.png',
    quote:
      "Working with Ogochukwu was a game-changer for our startup. He took our vague ideas and transformed them into a polished, functional web platform that our users love. His ability to suggest improvements we hadn't considered added tremendous value to the project.",
  },
  {
    id: 4,
    name: 'David Wilson',
    role: 'Startup Founder',
    image: 'pic-4.png',
    quote:
      'The creative approach and technical execution exceeded all our expectations. From concept to deployment, every phase was handled with professionalism and expertise.',
  },
  {
    id: 5,
    name: 'Alex Thompson',
    role: 'Marketing Director',
    image: 'pic-2.png',
    quote:
      'Incredible work ethic and communication throughout the project. The final product not only met our requirements but also introduced features that significantly improved user engagement.',
  },
];

export default function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState<number>(2);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  // Get window width for responsiveness
  useEffect(() => {
    const updateWidth = () => setWindowWidth(window.innerWidth);
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, isPaused]);

  const handlePrevious = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleImageClick = (index: number) => {
    setActiveIndex(index);
  };

  // const toggleAutoPlay = () => {
  //   setIsAutoPlaying(!isAutoPlaying);
  // };

  const getImagePosition = (index: number): number => {
    const diff = index - activeIndex;
    const totalItems = testimonials.length;

    let normalizedDiff = diff;
    if (Math.abs(diff) > totalItems / 2) {
      normalizedDiff = diff > 0 ? diff - totalItems : diff + totalItems;
    }

    return normalizedDiff;
  };

  const getImageStyle = (index: number): React.CSSProperties => {
    const position = getImagePosition(index);
    const isActive = index === activeIndex;

    const spacing = windowWidth < 640 ? 80 : windowWidth < 1024 ? 100 : 120;

    let transform = `translateX(${position * spacing}px)`;
    let scale = isActive ? 1.2 : 0.8;
    let zIndex = isActive ? 10 : 5 - Math.abs(position);
    let opacity = Math.abs(position) > 2 ? 0 : isActive ? 1 : 0.6;

    if (Math.abs(position) === 1) {
      scale = 0.9;
    }

    if (windowWidth < 640 && Math.abs(position) > 1) {
      opacity = 0;
    }

    return {
      transform: `translateX(${position * spacing}px) scale(${scale})`,
      zIndex: zIndex,
      opacity: opacity,
      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    };
  };

  return (
    <div className="text-white my-8 sm:my-12 lg:my-[50px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="w-11/12 mx-auto">
          <div
            className="py-6 sm:py-8 lg:py-[25px] text-center rounded-lg sm:rounded-xl"
            style={{
              background: `
                linear-gradient(180deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0) 100%)
              `,
            }}
          >
            {/* Header */}
            <div className="mb-8 sm:mb-10 lg:mb-12">
              <p className="text-xs sm:text-sm tracking-wider font-semibold text-[#C0D5FF] mb-2 sm:mb-3">
                TESTIMONIALS
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold mb-6 sm:mb-8 text-white leading-tight">
                What my clients say
              </h2>

              {/* Contact Button */}
              <div className="flex justify-center mb-4 sm:mb-6">
                <button className="bg-primary hover:bg-primary px-4 sm:px-6 py-2 sm:py-3 cursor-pointer rounded-full font-medium text-sm sm:text-base transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
              </div>
            </div>

            {/* Avatar Carousel */}
            <div
              className="relative h-32 sm:h-36 lg:h-40 mb-4 sm:mb-6 flex items-center justify-center overflow-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="absolute cursor-pointer"
                  style={getImageStyle(index)}
                  onClick={() => handleImageClick(index)}
                >
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24">
                    <Image
                      src={`/images/testimony/${testimonial.image}`}
                      alt={testimonial.name}
                      fill
                      className="rounded-full object-cover border-2 sm:border-4 border-white/20 shadow-2xl hover:border-primary transition-all duration-300"
                    />
                    {index === activeIndex && (
                      <div className="absolute -inset-1 sm:-inset-2 rounded-full border-2 border-primary animate-pulse" />
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial Content */}
            <div className="relative py-4 sm:py-6 flex items-center justify-center px-4 sm:px-6">
              <div className="max-w-4xl mx-auto transition-all duration-600 text-center">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2 text-white">
                  {testimonials[activeIndex].name}
                </h3>
                <p className="text-[#CACFD8] mb-4 sm:mb-6 text-sm sm:text-base">
                  {testimonials[activeIndex].role}
                </p>
                <blockquote className="text-base sm:text-lg lg:text-xl leading-relaxed text-white italic px-2 sm:px-4">
                  &quot;{testimonials[activeIndex].quote}&quot;
                </blockquote>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 sm:gap-6 mt-6 sm:mt-8">
              <button
                onClick={handlePrevious}
                className="w-10 h-10 sm:w-12 sm:h-12 cursor-pointer rounded-full border border-white/30 flex items-center justify-center hover:bg-[#C0D5FF] hover:text-primary transition-all duration-300 group"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              </button>

              <div className="flex items-center gap-1 sm:gap-2">
                <span className="text-xl sm:text-2xl font-bold">
                  {activeIndex + 1}
                </span>
                <span className="text-gray-400 text-lg sm:text-xl">/</span>
                <span className="text-gray-400 text-lg sm:text-xl">
                  {testimonials.length}
                </span>
              </div>

              <button
                onClick={handleNext}
                className="w-10 h-10 sm:w-12 sm:h-12 cursor-pointer rounded-full border border-white/30 flex items-center justify-center hover:bg-[#C0D5FF] hover:text-primary transition-all duration-300 group"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              </button>
            </div>

            {/* Progress indicators for mobile */}
            <div className="flex justify-center gap-2 mt-6 sm:hidden">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleImageClick(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'bg-primary w-6'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
