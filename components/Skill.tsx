import React from 'react'
import { motion } from "framer-motion"
import Image from "next/image"

type Props = {
    image: string;
    altImage: string;
}

function Skill({ image, altImage }: Props) {
    return (
        <div className="group relative flex cursor-pointer">
            <motion.div
                initial={{
                    x: 200,
                    opacity: 0,
                }}
                transition={{
                    duration: 1
                }}
                whileInView={{
                    opacity: 1, x: 0
                }}
                className="rounded-full object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32"><Image src={image} alt={altImage} layout="fill" className="rounded-full grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-200" quality="30"/>
            </motion.div>
        </div>
    )
}

export default Skill