import Image from "next/image";
import ParticlesContainer from '../components/ParticlesContainer';
import Avatar from '../components/Avatar';
import ProjectsBtn from "../components/ProjectsBtn";

//framer motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';

import { useState } from "react";
import Circle from '../components/Circles';

const Home = () => {
  return (
    <div className="bg-primary/80 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-balck/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}

          <motion.h1 className="h1 pr-[10px]"
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'>Junior Web & Application Developer<br /> Welcome to my {' '} <span style={{ color: '#3b7dd8', textDecoration: 'underline' }}>Website Portfolio</span>
          </motion.h1>
          {/* subtitle */}
          <p
            className="mb-10 xl:mb-18"
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            style={{ whiteSpace: 'nowrap' }}
          >
            Step into my digital realm, where creativity and expertise converge seamlessly.
            <br />
            As a Web and Mobile Developer, my portfolio showcase a diverse range of projects
            <br />
            that exemplify my skills in creating and designing websites and applications.
            <br />
            With a user-friendly interface, exploring my work becomes an intuitive
            <br />
            and visually engaging experience.
            <br />
            Each project serves as a testament to my commitment to excellence,
            <br />
            and also the strategic thinking behind them.
          </p>

          {/* button */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div variants={fadeIn('down', 0.3)}
            className="hidden xl:flex"
            initial='hidden'
            animate='show'
            exit='hidden'>
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* Bg-image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        {/* particles */}
        <ParticlesContainer />
        <motion.div className="w-full h-full max-w-[700px] max-h-[600px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
          variants={fadeIn('up', 0.5)}
          animate='show'
          exit='hidden'
          initial='hidden'
          transition={{ duration: 1, ease: 'easeInOut' }}>
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
