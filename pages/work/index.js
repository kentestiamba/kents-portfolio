// import from 'react-icons/rx';

import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Work = () => {
  return (
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Circles />
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          <div className='text-center flex xl:w-[30vm] flex-col lg:text-left mb-4 xl:mb-0'>
            <motion.h2 variants={fadeIn('up', 0.3)} initial="hidden" animate="show" exit={"hidden"} className='h2 xl:mt-12'>
              My Projects <span className='text-accent'>.</span>
            </motion.h2>
            <motion.p variants={fadeIn('up', 0.4)} initial="hidden" animate="show" exit={"hidden"} className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
              I am specialize in web, mobile, and game development, along with UI/UX design using Figma. From sleek websites to immersive mobile apps and captivating games, we blend innovation with expertise to deliver exceptional digital experiences. Let's bring your ideas to life, together.
            </motion.p>
          </div>
          <motion.div variants={fadeIn('up', 0.6)} initial="hidden" animate="show" exit={"hidden"} className='w-full xl:max-w-[65%]'>
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  )
};

export default Work;
