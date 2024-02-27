import { useState } from "react";
import Circles from "../../components/Circles";
import Bulb from "../../components/Bulb";
import Avatar from "../../components/Avatar";
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiCsharp,
  SiCplusplus,
  SiAdobephotoshop,
  SiFigma,
  SiUnity,
  SiReact,
  SiNodedotjs,
  SiMysql,
  SiPostgresql,
  SiAndroidstudio,
  SiJavascript,
} from "react-icons/si";


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,

        ],
      },
      {
        title: 'Mobile Development',
        icons: [<SiAndroidstudio />, <SiReact />, <SiNodedotjs />, <SiMysql />, <SiPostgresql />],
      },
      {
        title: 'Game Development',
        icons: [<SiCplusplus />, <SiCsharp />, <SiUnity />],
      },
      {
        title: 'UI/UX Design',
        icons: [<SiFigma />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Junior Full Stack Developer - ChuGo Pte Ltd l Singapore',
        stage: '2023',
      },
      {
        title: 'Thesis -  3D Motion Captured Using Pose Detection Algorithm',
        stage: '2023',
      },
      {
        title: 'Student Intern (Full Stack Developer) - IReply Back Office Services. Inc.',
        stage: '2021 - 2022',
      },
    ],
  },
  {
    title: 'credentials and workshop',
    info: [

      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2023',
      },
      {
        title: 'Augment Time Series Workshop: TABLEU and WEKA for Data Visualization and Machine Learning',
        stage: '2023',
      },
      {
        title: 'Augment Lecture Series Webinar: Reimagining Research Using Machine Learning',
        stage: '2023',
      },
      {
        title: 'Augment Lecture Series Webinar: Reimagining Research Using Machine Learning',
        stage: '2023',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/80 py-32 text-center xl:text-left overflow-y-auto">
      <Circles />
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className="hidden xl:flex absolute bottom-0 -left-[370px]">
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col xl:flex-row gap-x-9 w-[88%] ">
        <div className="flex-1 flex flex-col justify-center mb-12">
          <h2 className="h1">Captivating <span className="text-accent">Stories</span> about <span className="text-accent">Me</span>.</h2>
          <p className="max-w-[500px] mx-auto xl:mx-0 xl:mb-12 px-2 xl:px-0">Welcome, Recent CS grad with a passion for tech and innovation. Skilled in algorithms, languages, and software dev. Ready to tackle real-world challenges and make a difference. Let's innovate together!
          </p>
        </div>
        <div className="flex-1 flex flex-col xl:pt-20 pl-12 pt-[20px] xl:pt-20">
          <div className="">
          </div>
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 mt-20 xl:gap-y-4 items-center xl:items-center flex-wrap">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'}
                  cursor-pointer capitalize xl:text-2xl relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}>
                {item.title}
              </div>
            ))}
          </div>
          <div className="flex flex-col py-2 xl:py-12 gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => (
              <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
                <div className="text-2xl font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>
                <div className="flex gap-x-4">
                  {item.icons?.map((icon, itemIndex) => (
                    <div className="text-4xl text-white" key={itemIndex}>
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
