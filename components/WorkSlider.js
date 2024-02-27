import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Image from "next/image";
import { Pagination } from "swiper";
import { BsArrowRight } from 'react-icons/bs';

// Updated data with different titles and names
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'UI/UX Design',
          name: 'Title: Travel App',
          path: '/UI.png',
        },
        {
          title: 'Web Development',
          name: 'Thesis Project',
          path: '/Web1.png',
        },
        {
          title: 'Mobile App Development',
          name: 'UI/UX Design',
          path: '/thumb3.jpg',
        },
        {
          title: 'Game Development 2D/3D',
          name: 'SEO Optimization',
          path: '/G1.png',
        },
      ],
    },
    {
      images: [
        {
          title: 'Mobile App Development',
          name: '',
          path: '/thumb4.jpg',
        },
        {
          title: 'Game Development',
          name: '2D/3D',
          path: '/G1.png',
        },
        {
          title: 'Photography',
          name: 'Photo Editing',
          path: '/thumb2.jpg',
        },
        {
          title: 'Video Production',
          name: 'Video Editing',
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true
      }}
      modules={[Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {workSlides.slides.map((slide, slideIndex) => {
        return (
          <SwiperSlide key={slideIndex}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, imageIndex) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    key={imageIndex}
                    onMouseEnter={() => setHoveredIndex(imageIndex)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      <Image src={image.path} width={700} height={300} alt="" />
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl: -translate-y-20 transition-all duration-300">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          <div className="delay-100">{hoveredIndex === imageIndex ? image.title : image.name}</div>
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                            {hoveredIndex === imageIndex ? image.name : ''}
                          </div>
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
