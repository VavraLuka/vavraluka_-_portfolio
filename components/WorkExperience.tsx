import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import photoshopImage from "../components/images/skills/photoshopImage.png";
import illustratorImage from "../components/images/skills/illustratorImage.png";
import htmlImage from "../components/images/skills/htmlImage.png";
import cssImage from "../components/images/skills/cssImage.png";
import reactImage from "../components/images/skills/reactjsImage.png";
import googleImage from "../components/images/skills/googleImage.png";
import googleadsImage from "../components/images/skills/googleadsImage.png";
import adobePremiereImage from "../components/images/skills/adobePremiereImage.png";
import adobeAfterEffectsImage from "../components/images/skills/adobeAfterEffectsImage.png"
import { useTranslation } from "react-i18next";

type Props = {};

function WorkExperience({ }: Props) {
  const { t, i18n } = useTranslation();

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-[90%] px-10 justify-evenly mx-auto items-center gap-x-5 gap-y-5"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        {t("experience")}
      </h3>
      <div className="mt-[50px] w-full flex space-x-5 overflow-x-scroll p-10 snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#e5004e]/80 md:max-h-[100%] max-h-[75%] md:pl-0 md:pr-0 md:pt-0 md:pb-10 flex-row gap-x-2">
        {/* Adobe Photoshop */}
        <article className="experienceArticle">
          <motion.div
            initial={{
              y: -150,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="relative rounded-full md:w-[150px] md:h-[150px] xl:w-[200px] xl:h-[200px] mx-auto xl:p-5"
          >
            <Image
              src={photoshopImage}
              objectFit="cover"
              priority
              quality="80"
              alt="Adobe Photoshop"
            />
          </motion.div>

          <div className="px-0 md:px-10">
            <motion.h4
              initial={{ opacity: 0, x: 300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="experienceTitle"
            >
              {t("graphicDesignTitle")}
            </motion.h4>
            <motion.p
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="experienceSubtitle"
            >
              Photoshop
            </motion.p>
            <motion.ul
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="list-disc space-y-4 mt-8 ml-5 text-md max-h-96 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#e5004e]/80 w-4/5 xl:mx-auto"
            >
              <li>{t("graphicDesignLine01")}</li>
              <li>{t("graphicDesignLine02")}</li>
              <li>{t("graphicDesignLine03")}</li>
            </motion.ul>
          </div>
        </article>

        {/* Adobe Illustrator */}
        <article className="experienceArticle">
          <motion.div
            initial={{
              y: -150,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="relative rounded-full md:w-[150px] md:h-[150px] xl:w-[200px] xl:h-[200px] mx-auto xl:p-5"
          >
            <Image
              src={illustratorImage}
              objectFit="cover"
              priority
              quality="80"
              alt="Adobe Illustrator"
            ></Image>
          </motion.div>

          <div className="px-0 md:px-10">
            <motion.h4
              initial={{ opacity: 0, x: 300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="experienceTitle"
            >
              {t("illustratorTitle")}
            </motion.h4>
            <motion.p
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="experienceSubtitle"
            >
              Adobe Illustrator
            </motion.p>
            <motion.ul
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="list-disc space-y-4 mt-8 ml-5 text-md max-h-96 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#e5004e]/80 w-4/5 xl:mx-auto"
            >
              <li>{t("illustratorLine01")}</li>
              <li>{t("illustratorLine02")}</li>
            </motion.ul>
          </div>
        </article>

        {/* Web App development */}
        <article className="experienceArticle">
          <motion.div
            initial={{
              y: -150,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="flex relative flex-row md:w-[420px] md:h-[150px] xl:w-[500px] xl:h-[200px] items-center justify-evenly"
          >
            <Image
              src={htmlImage}
              alt="HTML"
              objectFit="cover"
              priority
              quality="80"
            />
            <Image
              src={cssImage}
              alt="CSS"
              objectFit="cover"
              priority
              quality="80"
            />
            <Image
              src={reactImage}
              alt="React.js"
              objectFit="cover"
              priority
              quality="80"
            />
          </motion.div>

          <div className="px-0 md:px-10">
            <motion.h4
              initial={{ opacity: 0, x: 300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="experienceTitle"
            >
              {t("webDesignTitle")}
            </motion.h4>
            <motion.p
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="experienceSubtitle"
            >
              react.js, next.js, tailwindcss, framer-motion
            </motion.p>
            <motion.ul
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="list-disc space-y-4 mt-8 ml-5 text-md max-h-96 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#e5004e]/80 w-4/5 xl:mx-auto"
            >
              <li>{t("webDesignLine01")}</li>
              <li>{t("webDesignLine01")}</li>
            </motion.ul>
          </div>
        </article>

        {/* Digital Marketing & SEO */}
        <article className="experienceArticle">
          <motion.div
            initial={{
              y: -150,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="flex relative flex-row md:w-[350px] md:h-[150px] xl:w-[350px] xl:h-[200px] md:p-5 items-center justify-evenly gap-10"
          >
            <Image
              src={googleImage}
              alt="Google"
              objectFit="cover"
              priority
              quality="80"
            />
            <Image
              src={googleadsImage}
              alt="Google Ads"
              objectFit="cover"
              priority
              quality="80"
            />
          </motion.div>

          <div className="px-0 md:px-10">
            <motion.h4
              initial={{ opacity: 0, x: 300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="experienceTitle"
            >
              {t("digitalMarketingTitle")}
            </motion.h4>
            <motion.p
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="experienceSubtitle"
            >
              Google Keywords, Google Ads
            </motion.p>
            <motion.ul
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="list-disc space-y-4 mt-8 ml-5 text-md max-h-96 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#e5004e]/80 w-4/5 xl:mx-auto"
            >
              <li>{t("digitalMarketingLine01")}</li>
              <li>{t("digitalMarketingLine02")}</li>
              <li>{t("digitalMarketingLine03")}</li>
            </motion.ul>
          </div>
        </article>

        {/* Video editing & Visual Effects */}
        <article className="experienceArticle">
          <motion.div
            initial={{
              y: -150,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="flex relative flex-row md:w-[350px] md:h-[150px] xl:w-[350px] xl:h-[200px] md:p-5 items-center justify-evenly gap-10"
          >
            <Image
              src={adobePremiereImage}
              alt="Google"
              objectFit="cover"
              priority
              quality="80"
            />
            <Image
              src={adobeAfterEffectsImage}
              alt="Google Ads"
              objectFit="cover"
              priority
              quality="80"
            />
          </motion.div>

          <div className="px-0 md:px-10">
            <motion.h4
              initial={{ opacity: 0, x: 300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="experienceTitle"
            >
              {t("videoEditingTitle")}
            </motion.h4>
            <motion.p
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="experienceSubtitle"
            >
              Adobe Premiere Pro, Adobe After Effects
            </motion.p>
            <motion.ul
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="list-disc space-y-4 mt-8 ml-5 text-md max-h-96 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#e5004e]/80 w-4/5 xl:mx-auto"
            >
              <li>{t("videoEditingLine01")}</li>
              <li>{t("videoEditingLine02")}</li>
            </motion.ul>
          </div>
        </article>
      </div>
    </motion.div>
  );
}

export default WorkExperience;
