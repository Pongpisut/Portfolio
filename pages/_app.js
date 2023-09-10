import React from "react";
import Globals from "../styles/Globals.scss";
import { Layouts, Transition } from "@/components";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

const _app = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <Layouts>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layouts>
  );
};

export default _app;
