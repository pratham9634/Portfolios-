import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { motion } from "motion/react";

const Cv = () => {
  return (
      <AlertDialog>
        <AlertDialogTrigger>
          <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5,delay:1.5,type: "spring",
            stiffness: 100, 
            damping: 20 }}
          type
          className="mt-5 border-2 border-[#c46bce3f] bg-transparent text-amber-100 font-extrabold text-xl px-6 py-2 rounded-2xl transition-transform hover:scale-105 shadow-lg">
            Download CV
          </motion.button>
        </AlertDialogTrigger>

        <AlertDialogContent className="max-w-md p-6 space-y-4 border rounded-3xl shadow-lg bg-stone-950 border-[#f6c58d21] text-amber-600">
  <AlertDialogHeader className="space-y-2">
    <AlertDialogTitle className="text-lg font-semibold text-white">
      Coming Soon! 🚀
    </AlertDialogTitle>
    <AlertDialogDescription className="text-sm text-gray-400">
      I am currently working on my CV. I will add it soon.
    </AlertDialogDescription>
  </AlertDialogHeader>
  <AlertDialogFooter className="flex justify-end">
    <AlertDialogAction className="px-4 py-2 text-sm font-medium text-white bg-orange-600 rounded-3xl hover:bg-orange-500 transition">
      Okay
    </AlertDialogAction>
  </AlertDialogFooter>
</AlertDialogContent>

      </AlertDialog>
    
  );
};

export default Cv;
