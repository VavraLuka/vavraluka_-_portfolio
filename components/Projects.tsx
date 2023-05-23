import React from 'react'
import { motion } from "framer-motion"
import Image from "next/image"
import googleCertificate from "/components/images/googleCertificate.png"
import { useTranslation } from "react-i18next";

type Props = {}

function Projects({ }: Props) {
    const { t, i18n } = useTranslation();
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: 1.5
            }}
            className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                {t("projects")}
            </h3>

            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-[#e5004e]/80 scrollbar-thin">
                <article className="w-screen flex-shrink-0 snap-center flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                    <motion.div
                        initial={{
                            y: -300,
                            opacity: 0
                        }}
                        transition={{
                            duration: 1.2
                        }}
                        whileInView={{
                            opacity: 1, y: 0
                        }}
                        viewport={{
                            once: true
                        }} className="mx-auto text-center">
                        <Image src={googleCertificate} width="600" height="400" alt="Fundamentals of Digital Marketing: Google Certificate" /></motion.div>
                    <div className="space-y-10 px-0 md:px-10 mx-auto max-w-6xl text-center">
                        <h4 className="text-3xl font-light text-center"><span className="font-semibold underline decoration-[#e5004e]/50">{t("project01Title01")}</span>: {t("project01Title02")}</h4>
                        <p className="text-lg text-center md:text-left xl:text-left">{t("project01Description")}</p>
                    </div>
                </article>
            </div>
            <div className="w-full absolute top-[30%] bg-[#e5004e]/10 left-0 h-[500px] -skew-y-12" />
        </motion.div>
    )
}

export default Projects