"use client";
import React from "react";
//import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
//import Link from "next/link";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Avater from '../assets/Amadeus.jpeg'
const HeroSection = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="grow place-self-center text-center sm:text-left justify-self-start"
        >
          <h3 className=" text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Zehao Lu",
                1000,
                "a C++ Developer",
                1000,
                "a Game Developer",
                1000,
                "a Student From UBC",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h3>
          <div>
            <a href="/#contact">
            <button
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-red-500 to-blue-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </button>
            </a>
            <a href="/">
            <button
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-red-500 to-blue-500 hover:bg-slate-200 text-white"
            >
              Download CV
            </button>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className=" col-end-12 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[200px] h-[200px] lg:w-[320px] lg:h-[320px] relative overflow-hidden">
            {/* <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            /> */}

            <img src={Avater}  className="absolute top-0 left-0 w-full h-full object-cover"/>
          </div>
        </motion.div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>


    // <section className="lg:py-16">
    //   <div className="grid grid-cols-1 sm:grid-cols-12">
    //     <motion.div
    //       initial={{ opacity: 0, scale: 0.5 }}
    //       animate={{ opacity: 1, scale: 1 }}
    //       transition={{ duration: 0.5 }}
    //       className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
    //     >
    //       <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
    //         <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
    //           Hello, I&apos;m{" "}
    //         </span>
    //         <br></br>
    //         <TypeAnimation
    //           sequence={[
    //             "Judy",
    //             1000,
    //             "Web Developer",
    //             1000,
    //             "Mobile Developer",
    //             1000,
    //             "UI/UX Designer",
    //             1000,
    //           ]}
    //           wrapper="span"
    //           speed={50}
    //           repeat={Infinity}
    //         />
    //       </h1>
    //       <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
    //         voluptuous.
    //       </p>
    //       <div>
    //         <Link
    //           to="/#contact"
    //           className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
    //         >
    //           Hire Me
    //         </Link>
    //         <Link
    //           to="/"
    //           className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
    //         >
    //           <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
    //             Download CV
    //           </span>
    //         </Link>
    //       </div>
    //     </motion.div>
    //     <motion.div
    //       initial={{ opacity: 0, scale: 0.5 }}
    //       animate={{ opacity: 1, scale: 1 }}
    //       transition={{ duration: 0.5 }}
    //       className="col-span-4 place-self-center mt-4 lg:mt-0"
    //     >
    //       <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
    //         {/* <Image
    //           src="/images/hero-image.png"
    //           alt="hero image"
    //           className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
    //           width={300}
    //           height={300}
    //         /> */}
    //       </div>
    //     </motion.div>
    //   </div>
    // </section>
  );
};

export default HeroSection;
