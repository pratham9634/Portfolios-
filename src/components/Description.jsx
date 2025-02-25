import React from "react";
import "../styles/Description.css";
import "../scripts/Description";
import Cv from "./Cv";
import { motion, spring } from "motion/react";

const Description = () => {
  return (
    <div className="w-full mt-5 flex flex-wrap  justify-between ">
      <div className="left">
        <motion.div 
         initial={{ opacity: 0, scale: 0.5 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 1,delay:1 }}
        >
          <h1 className=" mt-16 md:mt-3 text-xl md:text-3xl font-bold">Hi There , I Am</h1>
          <div>
          <h2
            id="name"
            className="flex text-2xl  md:text-3xl font-extrabold mt-8 md:mt-3 text-[#966ed3]"
          >
            PRATHAM PETWAL
          </h2>
          </div>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5,delay:1.5 }}
        className="desc hidden md:block text-[#f0ead2] italic font-extrabold text-lg md:w-[55vw] overflow-hidden mt-5 ">
        I'm a skilled developer specializing in  front-end, back-end, full-stack. I have experience working with many technologies, crafting sleek, scalable, and high-performance applications.
<br/>
✨ Passionate about clean code, efficient solutions, and delivering seamless user experiences.
<br/>
🚀 I love tackling challenges, optimizing performance, and bringing creative ideas to life.
<br/>
🤝 Let’s connect and build something amazing together!
        </motion.div>
        <Cv/>
      </div>
      <div className="right flex justify-center items-center ">
      <motion.div
      initial={{ x:500 }}
      animate={{ x:0}}
      transition={{ duration:1.5,type:spring,stiffness: 200, 
        damping: 10,}}
  className="relative flex justify-center items-center p-4"
  style={{
    borderRadius: "92% 8% 78% 22% / 48% 65% 35% 52%",
    backgroundImage:
      "linear-gradient(to right top, #7c42b9, #7e3cb7, #cac6cd, #822eb2, #8426af, #b575ca, #951db3, #9e16b4, #b013ba, #d8b2d7, #d408c5, #dba7d4)",
    backgroundSize: "200% 200%",
    backdropFilter: "blur(20px)", // Glass effect
    WebkitBackdropFilter: "blur(10px)", // Safari support
    border: "1px solid rgba(171, 171, 149, 0.34)", // Subtle border
    boxShadow: "0 10px 10px rgba(176, 94, 227, 0.8)", // Fixed RGBA format
    transition: "background-position 0.5s ease-in-out, transform 0.3s ease-in-out",
  }}
  onMouseEnter={(e) => (e.currentTarget.style.backgroundPosition = "100% 100%")}
  onMouseLeave={(e) => (e.currentTarget.style.backgroundPosition = "0% 0%")}
>
  <motion.img
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5,delay:1 }}
  whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
    src="src/images/Avatar.png" // Ensure correct path
    alt="Profile-Image"
    className="mb-5 rounded-3xl w-[35vw] md:w-[30vw] md:h-[60vh] object-cover transition-transform duration-300 ease-in-out hover:scale-105"
  />
</motion.div>

      </div>
    </div>
  );
};

export default Description;
