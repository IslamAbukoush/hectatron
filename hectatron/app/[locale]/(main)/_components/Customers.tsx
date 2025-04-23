'use client'

import { useEffect, useState } from "react";
import { CustomersBlockProps } from "@/lib/types/CustomersBlockProps";
import CustomersBLock from "./CustomersBLock";
import * as m from "motion/react-m";
import { AnimatePresence } from "motion/react";
import { CustomerAnimation, CustomersAnimation } from "@/lib/animations/CustomerAnimation";
import { cn } from "@/lib/utils";
import Star from "../../_components/Star";
import Blur from "../../_components/Blur";
import { WhyChooseAnimation, WhyChoosesAnimation } from "@/lib/animations/WhyChooseAnimation";
import { useTranslations } from "next-intl"

const Customers = () => {
  const t = useTranslations('home');
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [windowWidth, setWindowWidth] = useState(0);

  const testimonials: CustomersBlockProps[] = [];

  for (let i = 0; i < 8; i++) {
    testimonials.push({
      src: `/images/${t(`customers.testimonials.${i}.image`)}.jpg`,
      alt: t(`customers.testimonials.${i}.title`),
      title: t(`customers.testimonials.${i}.title`),
      position: t(`customers.testimonials.${i}.position`),
      description: t(`customers.testimonials.${i}.description`),
    })
  }

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getItemsPerPage = () => {
    if (windowWidth <= 1280) return 1;
    return 2;
  }

  const itemsPerPage = getItemsPerPage();
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const getCurrentItems = () => {
    const startIndex = currentPage * itemsPerPage;
    return testimonials.slice(startIndex, startIndex + itemsPerPage);
  };

  return (
    <div className={cn("px-[100px] mt-[150px] relative", "max-md:px-[30px] max-md:mt-[80px]")}>
      <div className="flex max-lg:flex-col items-end justify-between relative">
        <m.div
          initial={{
            opacity: 0,
            y: -50,
            scale: 0.9
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1
          }}
          transition={{
            duration: 0.4,
          }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 items-start justify-center my-[10px]">
          <h1 className={cn("text-gradient text-6xl text-start", "max-lg:text-5xl max-sm:text-3xl")}>
            {t('customers.title')}
          </h1>
          <p className={cn("text-xl text-white/60 max-w-[70%] text-start", "max-lg:text-lg max-sm:text-sm")}>
            {t('customers.subtitle')}
          </p>
        </m.div>
        <m.div
          variants={WhyChoosesAnimation}
          initial='hidden'
          whileInView='vissible'
          viewport={{ once: true }}
          className={cn("flex gap-10 text-white font-semibold text-lg overflow-hidden", "max-lg:text-base max-lg:w-full max-lg:justify-end max-sm:text-xs")}>
          <m.button
            variants={WhyChooseAnimation}
            onClick={handlePrevious}
            className="bg-[#FF7043] border-1 border-white/40 py-2 rounded-[8px] w-[140px] text-center items-center hover:bg-[#FF8C69] transition-colors cursor-pointer max-sm:w-[100px]"
          >
            {t('customers.navigation.previous')}
          </m.button>
          <m.button
            variants={WhyChooseAnimation}
            onClick={handleNext}
            className="bg-[#1A1A32] border-1 border-white/40 py-2 rounded-[8px] w-[140px] text-center items-center hover:bg-[#252544] transition-colors cursor-pointer max-sm:w-[100px]"
          >
            {t('customers.navigation.next')}
          </m.button>
        </m.div>
      </div>

      <div className="relative overflow-hidden">
        <AnimatePresence initial={false} mode="wait" custom={direction}>
          <m.div
            key={currentPage}
            variants={CustomersAnimation}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={cn("grid grid-cols-2 gap-20 mt-16", "max-xl:grid-cols-1 max-xl:place-items-center max-xl:justify-items-center max-sm:gap-10 max-sm:mt-10")}
          >
            {getCurrentItems().map((item, index) => (
              <m.div
                key={`${currentPage}-${index}`}
                custom={direction}
                variants={CustomerAnimation}
              >
                <CustomersBLock {...item} />
              </m.div>
            ))}
          </m.div>
        </AnimatePresence>
      </div>

      <div className={cn("flex items-center justify-center gap-2 mt-10", "max-sm:mt-5")}>
        {Array.from({ length: totalPages }).map((_, index) => (
          <div
            key={index}
            onClick={() => {
              setDirection(index > currentPage ? 1 : -1);
              setCurrentPage(index);
            }}
            className={cn(
              "w-5 h-5 rounded-full cursor-pointer transition-all duration-300",
              index === currentPage ? "active" : "bg-gray-500 hover:bg-gray-400", "max-sm:w-3 max-sm:h-3"
            )}
          />
        ))}
      </div>
      <Star className="right-[1%] top-[200px] w-[40px]" />
      <Star className="right-[15%] top-[700px] w-[40px]" />
      <div className="absolute inset-0 w-full h-full -z-10">
        <Blur className="w-[200px] h-[700px] top-[-300px] left-[-20%]" />
        <Blur className="bottom-0 right-0 w-[200px] h-[400px]" />
      </div>
    </div>
  );
};

export default Customers;