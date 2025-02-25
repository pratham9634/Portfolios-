import React from "react";
import "../styles/Navbar.css";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const links = [
  { name: "About", to: "about" },
  { name: "Skill", to: "skills" },
  { name: "Project", to: "projects" },
  { name: "Upcoming", to: "upcoming-projects" },
  { name: "Contact", to: "contact" },
];

const Navbar = () => {
  return (
    <div className="flex justify-center w-full">
      <motion.div
        className="nav bg-[#02020252] m-2 p-5 md:p-7 md:pl-5 h-8 md:h-10 md:pr-5 border-[1px] w-[80vw] lg:w-[60vw] rounded-xl border-[#ce51ea43] shadow-inner shadow-[#8a5aaa9b] flex justify-between
       text-sm md:text-xl items-center"
        initial={{ y: -150 }}
        animate={{ y: 0 }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 300,
          damping: 10,
          mass: 1,
        }}
      >
        {links.map((link, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Link
              to={link.to}
              smooth={true}
              duration={200}
              className="cursor-pointer hover:text-gray-300"
            >
              {link.name}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Navbar;
