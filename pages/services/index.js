import { useState, useEffect } from 'react';
import ServicesSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import Workflow from '../../components/Workflow';
import Image from "next/image";

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Services = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint for mobile devices
    };

    // Initial check
    checkScreenSize();

    // Event listener for screen size changes
    window.addEventListener('resize', checkScreenSize);

    // Clean up event listener
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className='relative min-h-screen bg-primary/30 py-12 px-4 md:px-8 lg:px-0 flex flex-col items-center justify-center'>
      <Bulb />
      <Circles />
      <div className='container mx-auto relative z-20'>
        <motion.h2 variants={fadeIn('up', 0.3)} initial="hidden" animate="show" exit={"hidden"} className='text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8'>
          My Services <span className='text-accent'>.</span>
        </motion.h2>
        <motion.p variants={fadeIn('up', 0.4)} initial="hidden" animate="show" exit={"hidden"} className='text-center text-lg md:text-xl lg:text-2xl xl:text-3xl mb-8 max-w-lg mx-auto'>
          Safeguard your intellectual property with our copyright services. From registration to enforcement, we offer expert guidance to protect your original content and innovations.
        </motion.p>
        <motion.div variants={fadeIn('up', 0.6)} initial="hidden" animate="show" exit={"hidden"} className='w-full'>
          <ServicesSlider />
        </motion.div>
      </div>
      {!isMobile && <Workflow />}
    </div>
  )
};

export default Services;
