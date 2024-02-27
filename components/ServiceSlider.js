// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from "swiper";

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Web Development',
    description: 'Specialize in crafting stunning websites that captivate audiences and drive engagement. My expertise ranges from dynamic e-commerce platforms, blending cutting-edge technology with intuitive design.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Design is at the heart of everything we do. My creative minds work tirelessly to craft visually stunning designs that not only look great but also enhance user experience and leave a lasting impression.',
  },
  {
    icon: <RxDesktop />,
    title: 'Mobile Development',
    description: 'Stay ahead in the mobile-first world with our innovative mobile app solutions. Whether its iOS, Android, or cross-platform development, we bring your ideas to life with seamless functionality and captivating user interfaces.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Safeguard your intellectual property with comprehensive copyright services, covering every step from registration to enforcement. Ensures the protection of your original content and innovations.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO (Search Engine Optimization)',
    description: 'In todays digital marketplace, visibility is essential for success. Our tailored SEO strategies not only boost search rankings but also drive organic traffic, effectively enhancing your online presence and visibility. ',
  },
];

const ServiceSlider = () => {
  return (
    <div> {/* Apply styles to enable vertical scrolling */}
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1, // Show one slide at a time on phone screens
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 3, // Show three slides at a time on screens wider than 640 pixels
            spaceBetween: 15,
          }
        }}
        freeMode={true}
        pagination={{
          clickable: true
        }}
        modules={[FreeMode, Pagination]}
        className="h-[240px] sm:h-[340px]"
      >
        {serviceData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="bg-[rgba(65,34,125,0.9)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169, 0.15)] transition-all duration-300">
                {/* icon */}
                <div className="text-4xl text-accent mb-4">{item.icon}</div>
                {/* title */}
                <div className="mb-8">
                  <div className="mb-2 text-lg">{item.title}</div>
                  <p className="max-w-[350px] leading-normal">{item.description}</p>
                </div>
                {/* arrow */}
                <div className="text-3xl">
                  <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
};

export default ServiceSlider;