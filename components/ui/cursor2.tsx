'use client';
import { SVGProps, useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const MouseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={26}
      height={31}
      fill='none'
      {...props}
    >
      <g clipPath='url(#a)'>
        <path
          fill={'#22c55e'}
          fillRule='evenodd'
          stroke={'#fff'}
          strokeLinecap='square'
          strokeWidth={2}
          d='M21.993 14.425 2.549 2.935l4.444 23.108 4.653-10.002z'
          clipRule='evenodd'
        />
      </g>
      <defs>
        <clipPath id='a'>
          <path fill={'#22c55e'} d='M0 0h26v31H0z' />
        </clipPath>
      </defs>
    </svg>
  );
};

interface ProjectImageWithCursorProps {
  imageSrc: string;
  imageAlt: string;
  cursorText: string;
}

export function ProjectImageWithCursor({ imageSrc, imageAlt, cursorText }: ProjectImageWithCursorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className='aspect-video rounded-2xl bg-white dark:bg-black relative cursor-none'
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className='absolute pointer-events-none z-10'
            style={{
              left: mousePosition.x,
              top: mousePosition.y,
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.3, opacity: 0 }}
            transition={{
              ease: 'easeInOut',
              duration: 0.15,
            }}
          >
            <div className='flex items-center'>
              <MouseIcon className='h-6 w-6' />
              <div className='ml-2 mt-1 rounded-[4px] bg-green-500 px-2 py-0.5 text-neutral-50 text-sm whitespace-nowrap'>
                {cursorText}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <img
        src={imageSrc}
        alt={imageAlt}
        className='aspect-video w-full h-full rounded-2xl object-cover'
      />
    </div>
  );
}