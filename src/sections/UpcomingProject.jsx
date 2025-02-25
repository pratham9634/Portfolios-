import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardTitle,
} from "@/components/ui/card";

const upcomingProjects = [
  {
    title: "Chat Web Application",
    image:
      "https://th.bing.com/th/id/OIP.RZ1O89n8GafL5PwEO5qaLAHaE7?w=202&h=135&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    description:
      "A real-time chat application with advanced features like group chats, media sharing, and AI-assisted messaging.",
  },
  {
    title: "Stock Price Predictor",
    image: "https://th.bing.com/th/id/OIP.-nnJ4YNbOwwipUJxmfAhYQHaF7?pid=ImgDet&w=178&h=142&c=7&dpr=1.5",
    description:
      "An AI-powered stock price predictor using machine learning to forecast market trends and assist traders.",
  },
];

const UpcomingProject = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-10">
      <h1 className=" text-3xl md:text-5xl font-extrabold mb-6 text-amber-500">
        🚀 Upcoming Projects
      </h1>
      <div className="flex flex-wrap gap-10 justify-center px-5">
        {upcomingProjects.map((project, index) => {
          let animationProps = {};

          if (index === 0) {
            animationProps = { initial: { x: -100, opacity: 0,scale:0.5 }, whileInView: { x: 0, opacity: 1 ,scale:1} };
          } else if (index === 1) {
            animationProps = { initial: { x: 100, opacity: 0 ,scale:0.5 }, whileInView: { x: 0, opacity: 1,scale:1 } };
          }

          return (
            <motion.div
              key={index}
              {...animationProps}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: false }}
            >
              <Card className="shadow-xl border border-[#f5884d2f] bg-transparent rounded-2xl overflow-hidden hover:scale-105 transition-all relative group">
                <CardContent className="w-[400px] md:w-[40vw] h-[450px] overflow-hidden rounded-lg flex flex-col">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-3/4 object-cover rounded-3xl mt-2 group-hover:opacity-90 transition"
                  />
                  <div className="p-4 text-center text-white">
                    <CardTitle className="text-xl text-red-300 font-bold">{project.title}</CardTitle>
                    <p className="text-sm mt-2 text-gray-300">{project.description}</p>
                  </div>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition rounded-lg"></div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default UpcomingProject;
