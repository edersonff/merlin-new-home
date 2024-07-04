"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React, { useEffect } from "react";

export default function Loading({ isComponent }: { isComponent: boolean }) {
  return (
    <motion.div
      className="fixed-full z-[999] flex-center small:px-6 bg-gradient-to-br from-primary to-purple-200 overflow-hidden"
      animate={{ height: "100vh" }}
      exit={{ height: "0vh" }}
      transition={{
        duration: 1,
        delay: 1,
        type: "tween",
      }}
    >
      <motion.div
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
          type: "tween",
        }}
        className="mx-auto  rounded-xl drop-shadow-xl relative"
      >
        <div className="p-3 animate-spin drop-shadow-2xl bg-gradient-to-bl from-purple-200 via-primary/50 to-purple-200 md:w-36 md:h-36 h-28 w-28 aspect-square rounded-full">
          <div className="rounded-full h-full w-full bg-slate-100 dark:bg-zinc-900 background-blur-md"></div>
        </div>
        <div className="absolute-full flex-center">
          <Image
            src="/merlin/logo-white.svg"
            alt="Logo"
            loading="eager"
            width={40}
            height={40}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
