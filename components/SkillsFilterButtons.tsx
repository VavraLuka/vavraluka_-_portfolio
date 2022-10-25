import React from 'react';
import { motion } from "framer-motion";

type Props = {}

function SkillsFilterButtons({ }: Props) {
    return (
        <div>
            <motion.button initial={{ y: -100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: false }} transition={{ delay: 0.3, duration: 0.3, ease: "easeOut" }} className="filterButton">All</motion.button>
            <motion.button initial={{ y: -100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: false }} transition={{ delay: 0.4, duration: 0.3, ease: "easeOut" }} className="filterButton">Web</motion.button>
            <motion.button initial={{ y: -100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: false }} transition={{ delay: 0.5, duration: 0.3, ease: "easeOut" }} className="filterButton">Graphic</motion.button>
            <motion.button initial={{ y: -100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: false }} transition={{ delay: 0.6, duration: 0.3, ease: "easeOut" }} className="filterButton">Social</motion.button>
        </div>
    )
}

export default SkillsFilterButtons