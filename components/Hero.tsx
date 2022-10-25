import React from 'react';
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import Image from "next/image";
import luka01 from '/components/images/luka01.png';
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

type Props = {}

export default function Hero({ }: Props) {
    const { t, i18n } = useTranslation();

    const [text, count] = useTypewriter({
        words: [
            "hi, my name is Luka",
            "i'm frontend developer",
            "graphic & visual design is my passion",
            "i'm also into digital marketing & SEO"
        ],
        loop: true,
        delaySpeed: 1000,
    });

    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.5, ease: "easeOut" }}
            ><Image className="relative rounded-full h-32 w-32 mx-auto object-cover"
                src={luka01} alt="Luka Vavra" width="130" height="130" /></motion.div>
            <div className="z-20">
                <motion.h2
                    initial={{
                        y: -100,
                        opacity: 0
                    }}
                    animate={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        delay: 1,
                        duration: 0.5,
                        ease: "easeOut"
                    }}
                    className="text-sm tracking-[10px] xl:text-[16px] uppercase text-gray-500 pb-4 xl:tracking-[15px]">{t("role")}</motion.h2>
                <motion.h1
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{
                        delay: 0,
                        duration: 0.5,
                        ease: "easeOut"
                    }}
                    className="text-4xl lg:text-5xl font-semibold px-10">
                    <span className="mr-3">{text}</span>
                    <Cursor cursorColor="#e5004e" />
                </motion.h1>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 200
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        delay: 2,
                        duration: 0.5,
                        ease: "easeOut"
                    }}
                    className="pt-5">
                    <Link href="#about"><button className="heroButton">{t('aboutMe')}</button></Link>
                    <Link href="#experience"><button className="heroButton">{t('experience')}</button></Link>
                    <Link href="#skills"><button className="heroButton">{t('skills')}</button></Link>
                    <Link href="#projects"><button className="heroButton">{t('projects')}</button></Link>
                </motion.div>
            </div>
        </div>
    );
}