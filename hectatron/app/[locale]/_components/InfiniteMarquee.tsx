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

const InfiniteMarquee = ({ items, speed = 5 }: InfiniteMarqueeProps) => {
  const trackRef1 = useRef<HTMLDivElement>(null);
  const trackRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track1 = trackRef1.current;
    const track2 = trackRef2.current;
    if (!track1 || !track2) return;

    let x = 0;
    const step = () => {
      x -= speed/10;
      if (x <= -100) {
        x = 0;
      }
      track1.style.transform = `translateX(${x}%)`;
      track2.style.transform = `translateX(${x + 100}%)`;
      requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [items, speed]);

  return (
    <div className="w-full overflow-x-hidden relative h-[100px]">
      <div
        ref={trackRef1}
        className={`w-full flex items-center justify-center will-change-transform absolute`}
      >
        {items.map((item, index) => (
          <div className='w-full flex justify-center items-center' key={index}>
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
          </div>
        ))}
      </div>
      <div
        ref={trackRef2}
        className={`w-full flex items-center justify-center will-change-transform absolute`}
      >
        {items.map((item, index) => (
          <div className='w-full flex justify-center items-center' key={index}>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteMarquee;
