import React from 'react';
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Skill from "./Skill";

type Props = {}

function Skills({ }: Props) {
    const { t, i18n } = useTranslation();

    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1
            }}
            transition={{
                duration: 1.5
            }}
            className="h-screen flex relative flex-col text-center max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">{t("skills")}</h3>
            <h3 className="top-36 absolute uppercase tracking-[3px] text-gray-500 text-sm">{t("skillsTitle")}</h3>

            <div className="grid xl:grid-cols-7 md:grid-cols-6 grid-cols-5  gap-3 xl:gap-7 pt-12">
                <Skill image={'/skills/aftereffectsSkill.png'} altImage={'Adobe After Effects'} />
                <Skill image={'/skills/cssSkill.png'} altImage={'CSS'} />
                <Skill image={'/skills/davinciresolveSkill.png'} altImage={'DaVinci Resolve Studio'} />
                <Skill image={'/skills/flstudioSkill.png'} altImage={'FL Studio'} />
                <Skill image={'/skills/framermotionSkill.png'} altImage={'Framer Motion'} />
                <Skill image={'/skills/htmlSkill.png'} altImage={'HTML'} />
                <Skill image={'/skills/illustratorSkill.png'} altImage={'Adobe Illustrator'} />
                <Skill image={'/skills/maxoncinemaSkill.png'} altImage={'Maxon 4D Cinema'} />
                <Skill image={'/skills/mysqlSkill.png'} altImage={'MySQL'} />
                <Skill image={'/skills/nextjsSkill.png'} altImage={'Next.js'} />
                <Skill image={'/skills/nodejsSkill.png'} altImage={'Node.js'} />
                <Skill image={'/skills/photoshopSkill.png'} altImage={'Adobe Photoshop'} />
                <Skill image={'/skills/phpSkill.png'} altImage={'php'} />
                <Skill image={'/skills/premiereproSkill.png'} altImage={'Adobe Premiere Pro'} />
                <Skill image={'/skills/reactjsSkill.png'} altImage={'React.js'} />
                <Skill image={'/skills/tailwindcssSkill.jpg'} altImage={'Tailwindcss'} />
                <Skill image={'/skills/visualstudiocodeSkill.png'} altImage={'Visual Studio Code'} />
                <Skill image={'/skills/pythonSkill.png'} altImage={'Python'} />
                <Skill image={'/skills/googleadsSkill.png'} altImage={'Google Ads'} />
                <Skill image={'/skills/figmaSkill.png'} altImage={'Figma'} />
                <Skill image={'/skills/ghostscriptSkill.png'} altImage={'GhostScript'} />
            </div>
        </motion.div>
    )
}
export default Skills