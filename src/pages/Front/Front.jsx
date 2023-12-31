import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";
import "./front.css";
import { Link } from "react-router-dom";
import gsap from "gsap";

const Front = () => {
  useEffect(() => {
    let tl = gsap.timeline();
    tl.from(".head", {
      y: 300,
      stagger: {
        each: 5,
      },
      duration: 2.5,
      ease: "expo.inOut",
    });
  }, []);
  return (
    <motion.div
      className="text-white bg-black h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Navbar />

      <div className="w-full">
        <div className="text-9xl uppercase tracking-wider mx-40 mt-32">
          {"LofiVibe".split(" ").map((word, index) => {
            return word === " " ? (
              <div className="head" key={index}>
                &nbsp;
              </div>
            ) : (
              <div className="head" key={index}>
                {word}
              </div>
            );
          })}
        </div>

        <div>
          <button>
            <Link to="/sound">AI Generated Music</Link>
          </button>
          <button>
            <Link to="/experience">Music Experience</Link>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Front;