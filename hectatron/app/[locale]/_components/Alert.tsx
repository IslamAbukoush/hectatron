'use client'

import { socialIconAnimation } from '@/lib/animations/constactAnimations';
import { useFormStore } from '@/lib/store/FormStore';
import * as m from 'motion/react-m';
import Image from 'next/image';

const Alert = () => {
  const { isOpen, setIsOpen, message, setMessage } = useFormStore()

  const handleClose = () => {
    setIsOpen(false);
    setMessage('');
  };

  if (!isOpen) return null;

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
    >
      <m.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: isOpen ? 1 : 0.9, y: isOpen ? 0 : 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="w-80 md:w-130 p-6 flex flex-col items-center justify-center gap-6 bg-[#1A1A32] rounded-2xl shadow-xl relative"
      >
        <div className="w-50 h-50 relative">
          <Image
            src="/images/hecta_logo.png"
            alt="Hectatron"
            className="object-contain"
            priority
            fill
          />
        </div>
        <p className="text-white font-semibold text-center text-xl px-2 whitespace-pre-line">{message}</p>
        <m.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleClose}
          className="w-full py-3 px-6 max-w-[300px] bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors cursor-pointer"
        >
          OK
        </m.button>
        <m.div
          onClick={handleClose}
          variants={socialIconAnimation} initial='hidden' animate='visible' whileHover="hover"
          className="absolute top-5 right-5 cursor-pointer">
          <Image src='/icons/cancel_alert.svg' alt='hectatron' width={30} height={30} />
        </m.div>
      </m.div>
    </m.div>
  );
};

export default Alert;