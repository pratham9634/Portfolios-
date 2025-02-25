import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Movies World 🎬",
    image:
      "https://th.bing.com/th/id/OIP.WY4Ia-giyeJbVD-2h3wXQQHaEK?rs=1&pid=ImgDetMain",
    description:
      "Explore trending and popular movies with a sleek UI powered by TMDb API.",
    techStack: "React.js, TMDb API, Tailwind CSS",
    link: `https://moviesworld2u.netlify.app/`,
  },
  {
    title: "Pokedex 🐉",
    image: "src/images/Pokemon.jpeg",
    description:
      "A Pokémon encyclopedia that fetches real-time Pokémon data and displays their abilities.",
    techStack: "HTML, CSS, PokeAPI, JavaScript",
    link: "https://pratham9634.github.io/POKEDEX/",
  },
  {
    title: "Dice Game 🎲",
    image: "src/images/DiceGame.jpeg",
    description:
      "A fun and interactive dice-rolling game with engaging animations.",
    techStack: "React.js, JavaScript, Tailwind CSS",
    link: "https://game6dice.netlify.app/",
  },
];

const Projects = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-10 px-5">
      <h1 className=" text-3xl md:text-5xl font-extrabold mb-10 text-amber-500">
        🚀 My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => {
          let animationProps = {};

          if (index === 0) {
            animationProps = { initial: { x: -200, opacity: 0 }, whileInView: { x: 0, opacity: 1 } };
          } else if (index === 1) {
            animationProps = { initial: { opacity: 0,scale:0.5 }, whileInView: { opacity: 1,scale:1,transition:{duration:1} } };
          } else if (index === 2) {
            animationProps = { initial: { x: 200, opacity: 0 }, whileInView: { x: 0, opacity: 1 } };
          }

          return (
            <motion.div 
              key={index}
              {...animationProps}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              <Card className=" relative shadow-xl border  border-gray-700 bg-black/30 backdrop-blur-lg rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300">
              <CardContent className="w-[350px] md:w-[400px] h-[450px] flex flex-col justify-center items-center rounded-lg bg-gray-900">
  {/* Image Wrapper (Centered) */}
  <div className="w-full flex justify-center items-center overflow-hidden rounded-t-lg">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-60 object-cover rounded-t-xl group-hover:scale-110 transition-all duration-300"
    />
  </div>

  {/* Text Content (Centered) */}
  <div className="p-4 text-white text-center flex flex-col items-center">
    <CardTitle className="text-2xl text-red-300 font-bold">{project.title}</CardTitle>
    <p className="text-gray-300 mt-2">{project.description}</p>
    <p className="text-sm text-gray-200 mt-1">💻 {project.techStack}</p>
  </div>
</CardContent>

                <CardFooter className="p-4 flex justify-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button
                      className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold px-6 py-2 flex items-center justify-center gap-2 rounded-full shadow-md transition-all cursor-pointer duration-300"
                    >
                      View Project <ArrowRight size={18} />
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
