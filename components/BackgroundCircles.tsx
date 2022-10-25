import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function BackgroundCircles({ }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center mt-[60px]">
      <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[250px] w-[250px] mt-52" />
      <div className="absolute border border-[#333333] rounded-full h-[400px] w-[400px] mt-52" />
      <div className="rounded-full border border-[#e5004e] opacity-50 h-[550px] w-[550px] absolute mt-52 animate-pulse" />
      <div className="rounded-full border border-[#333333] h-[700px] w-[700px] absolute mt-52" />
    </motion.div>
  )
}

export default BackgroundCircles