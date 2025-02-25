import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "motion/react";

const platforms = [
  {
    name: "LinkedIn",
    image: "https://th.bing.com/th/id/OIP.ISbljjwo92miwQmW_RSvTwHaHa?rs=1&pid=ImgDetMain",
    link: "https://www.linkedin.com/in/prathampetwal/",
    description: "Let's connect on LinkedIn and grow our network! 🚀",
  },
  {
    name: "GitHub",
    image: "https://th.bing.com/th/id/OIP.DOAlUqGvMN8R_5XRo9gU-gHaHa?w=187&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    link: "https://github.com/pratham9634",
    description: "Check out my projects and contributions on GitHub! 🖥️",
  },
  {
    name: "LeetCode",
    image: "https://iconape.com/wp-content/png_logo_vector/leetcode-logo-white-no-text.png",
    link: "https://leetcode.com/u/prathampetwal100/",
    description: "I have solved 700+ problems on LeetCode! 💡",
  },
  {
    name: "GeeksForGeeks",
    image: "https://media.geeksforgeeks.org/wp-content/uploads/20221115223743/32.PNG",
    link: "https://www.geeksforgeeks.org/user/prathampemda3/",
    description: "Explore my problem-solving journey on GeeksForGeeks! 📚",
  },
  {
    name: "HackerRank",
    image: "https://i.ytimg.com/vi/z_0QMr4X6ME/hqdefault.jpg",
    link: "https://www.hackerrank.com/profile/prathampetwal100",
    description: "Check out my coding skills on HackerRank! 🎯",
  },
];

const Platforms = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10 mt-5">
       <motion.h1 
       initial={{ opacity: 0, scale:0.5 }}
       whileInView={{ opacity: 1, scale:1 }}
       transition={{duration:0.5}}
       
       className="text-4xl font-bold text-amber-500 mb-8">PLATFORMS</motion.h1>
      
      <motion.div
        className="flex flex-wrap justify-center gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        {platforms.map((platform, index) => (
           <motion.div
           key={index}
           initial={{ opacity: 0, y: 100 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: index * 0.2 }}
           viewport={{ once: false }}
         >
           <HoverCard>
             <HoverCardTrigger
               as={motion.div}
               whileHover={{ scale: 1.2 }}
               className="flex items-center gap-4 cursor-pointer border-2 border-[#fff6ea5c] px-5 py-3 rounded-xl shadow-lg bg-gray-900 hover:bg-amber-500 transition"
             >
                <Avatar className="w-12 h-12">
                  <AvatarImage
                    src={platform.image}
                    className="rounded-full object-cover"
                    onClick={() => window.open(platform.link, "_blank")}
                  />
                  <AvatarFallback>Logo</AvatarFallback>
                </Avatar>
                <span className="text-lg font-semibold text-white">{platform.name}</span>
              </HoverCardTrigger>
              <HoverCardContent className="rounded-2xl p-4 text-sm text-white font-serif shadow-xl">
                {platform.description} Click the logo to visit my <span className="text-[#dc5fdc]">profile</span>.
              </HoverCardContent>
            </HoverCard>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Platforms;
