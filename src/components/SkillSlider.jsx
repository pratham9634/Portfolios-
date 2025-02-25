import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card, CardContent } from "@/components/ui/card";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';  
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

const skills = [
  { name: "HTML", img: "https://images.unsplash.com/photo-1668395092928-420b88deab84?w=600&auto=format&fit=crop&q=60", description: "The backbone of web pages, providing structure and content." },
  { name: "CSS", img: "https://plus.unsplash.com/premium_photo-1678937611098-d31ff6162c6a?w=600&auto=format&fit=crop&q=60", description: "Styles the web with colors, layouts, and responsive designs." },
  { name: "JavaScript", img: "https://plus.unsplash.com/premium_photo-1669916851191-e19192b79139?w=600&auto=format&fit=crop&q=60", description: "The scripting language that brings interactivity to the web." },
  { name: "Tailwind CSS", img: "https://images.unsplash.com/photo-1537429149818-2d0e3e20857b?w=600&auto=format&fit=crop&q=60", description: "A utility-first CSS framework for rapid UI development." },
  { name: "C", img: "https://images.unsplash.com/photo-1522932753915-9ee97e43e3d9?w=600&auto=format&fit=crop&q=60", description: "A powerful, low-level programming language used in system programming." },
  { name: "C++", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=60", description: "An extension of C, adding object-oriented programming capabilities." },
  { name: "Python", img: "https://plus.unsplash.com/premium_photo-1669916850011-1f7ee9bb00d1?w=600&auto=format&fit=crop&q=60", description: "A versatile and beginner-friendly language popular in web and AI development." },
  { name: "React.js", img: "https://images.unsplash.com/photo-1484903820457-9e585d707e9d?w=600&auto=format&fit=crop&q=60", description: "A JavaScript library for building fast and interactive user interfaces." },
  { name: "Node.js", img: "https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?w=600&auto=format&fit=crop&q=60", description: "A runtime that allows JavaScript to run server-side for scalable applications." },
  { name: "Express.js", img: "https://plus.unsplash.com/premium_photo-1661898424988-a5f6d40d3db2?w=600&auto=format&fit=crop&q=60", description: "A minimal and flexible Node.js framework for backend development." },
  { name: "MongoDB", img: "https://images.unsplash.com/photo-1485075792961-9ea033ad04fc?w=600&auto=format&fit=crop&q=60", description: "A NoSQL database that stores data in flexible JSON-like documents." },
];

const SkillSlider = () => {
  return (
    <div className="w-[100vw] mt-10 py-10">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 4 },
        }}
        spaceBetween={50}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 10,
          stretch: 5,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {skills.map((skill, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <Card className="relative group w-[200px] h-[300px] md:w-[280px] md:h-[400px] overflow-hidden rounded-xl transform transition-all hover:scale-105 shadow-md shadow-pink-200">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300"
                style={{ backgroundImage: `url(${skill.img})` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 ease-in-out" /> 

              {/* Skill Name (Always Visible) */}
              <CardContent className="  absolute bottom-0 left-0 w-full p-4 text-center text-amber-100 text-xl font-bold bg-black bg-opacity-70">
                {skill.name}
              </CardContent> 

              {/* Description (Shown on Hover) */}
              <CardContent className="absolute bottom-0 left-0 w-full p-4 text-center text-[#ffe47677] text-md font-bold bg-black bg-opacity-70 opacity-0 group-hover:mb-6 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                {skill.description}
              </CardContent>
            
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SkillSlider;
