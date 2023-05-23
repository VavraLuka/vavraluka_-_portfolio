import Head from 'next/head';
import Header from "../components/Header";
import Hero from "../components/Hero";
import React from "react";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Link from "next/link";
import Image from "next/image";
import BackToTheTop from "/components/images/up_arrow.png";
import { motion } from "framer-motion";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

type Props = {}

const Home = ({ }: Props) => {
  return (
      <div className="text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#e5004e]/80 customFont">
        <Head>
          <title>Luka Vavra - portfolio</title>
        </Head>

        <Header />

        <section id="hero" className="snap-start">
          <Hero />
        </section>

        <section id="about" className="snap-center scroll-smooth">
          <About />
        </section>

        <section id="experience" className="snap-center scroll-smooth">
          <WorkExperience />
        </section>

        <section id="skills" className="snap-start scroll-smooth">
          <Skills />
        </section>

        <section id="projects" className="snap-start scroll-smooth">
          <Projects />
        </section>

        <section id="contact" className="snap-start scroll-smooth">
          <ContactMe />
        </section>

        <Link href="#hero">
          <footer className="sticky bottom-5 w-full cursor-pointer">
            <motion.div
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1
              }}
              transition={{
                delay: 2,
                duration: 1
              }}
              className="flex items-center justify-center animate-bounce">
              <Image width="30px" height="30px" className="filter grayscale hover:grayscale-0 cursor-pointer" src={BackToTheTop} alt="slikastrelice" />
            </motion.div>
          </footer>
        </Link>
      </div>
  )
};

export default Home;