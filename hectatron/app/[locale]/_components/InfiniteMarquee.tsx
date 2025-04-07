'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

interface MarqueeItem {
  src: string;
  alt: string;
}

interface InfiniteMarqueeProps {
  items: MarqueeItem[];
  speed?: number;
}

const InfiniteMarquee = ({ items, speed = 1 }: InfiniteMarqueeProps) => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let x = 0;

    const step = () => {
      x -= speed;
      if (track.scrollWidth / 2 + x <= 0) {
        x = 0; 
      }
      track.style.transform = `translateX(${x}px)`;
      requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [items, speed]);

  return (
    <div className="w-full overflow-x-hidden relative h-[100px]">
      <div
        ref={trackRef}
        className="flex items-center gap-[100px] absolute top-0 left-0 will-change-transform"
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[150px] h-[100px] flex items-center justify-center"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteMarquee;
