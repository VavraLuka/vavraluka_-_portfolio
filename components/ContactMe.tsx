import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ChangeEvent, useState } from "react";
import { InboxIcon, UserIcon, ChatBubbleOvalLeftEllipsisIcon, PencilSquareIcon } from '@heroicons/react/24/solid'

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

type Props = {};

function ContactMe({ }: Props) {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = 'mailto:luka123vavra@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} ${formData.email}'
    };
    const { t, i18n } = useTranslation();

    const [value, setValue] = useState("");
    const handleChange =
        (e: ChangeEvent<HTMLInputElement>) => {
            setValue(e.target.value);
        }

    return (
        <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                {t("contact")}
            </h3>

            <div className="flex flex-col space-y-10">
                <motion.h4
                    initial={{
                        y: -200,
                        opacity: 0
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        delay: 0.6,
                        duration: 0.5
                    }}
                    viewport={{
                        once: true
                    }}
                    className="font-semibold text-2xl text-center">
                    {t("contactTitle01")}{" "}
                    <span className="decoration-[#e5004e]/50 underline">{t("contactTitle02")}</span>
                </motion.h4>

                <div>
                    <motion.div initial={{ x: 300, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{
                        delay: 1, duration: 0.4,
                        ease: "easeOut"
                    }} viewport={{ once: true }} className="my-3 flex items-center space-x-5 justify-center">
                        <PhoneIcon className="text-[#e5004e] h-7 w-7" />
                        <p className="text-md -my-4">+385 98 1330 950</p>
                    </motion.div>
                    <motion.div initial={{ x: -300, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{
                        delay: 1.2, duration: 0.4, ease: "easeOut"
                    }} viewport={{ once: true }} className="my-3 flex items-center space-x-5 justify-center">
                        <MapPinIcon className="text-[#e5004e] h-7 w-7" />
                        <p className="text-md -my-4">Daruvar, Croatia</p>
                    </motion.div>
                    <motion.div initial={{ x: 300, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{
                        delay: 1.4, duration: 0.4, ease: "easeOut"
                    }} viewport={{ once: true }} className="my-3 flex items-center space-x-5 justify-center">
                        <EnvelopeIcon className="text-[#e5004e] h-7 w-7" />
                        <p className="text-md -my-4">luka123vavra@gmail.com</p>
                    </motion.div>
                </div>

                <div className="flex flex-row gap-20">
                    <motion.form initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.6, ease: "easeOut" }} viewport={{ once: true }} onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-fit mx-auto text-gray-500">
                        <div className="flex space-x-4">
                            <div className="mt-[20px] mx-0 relative">
                                <input className="border-2 border-solid border-slate-400/10 text-[15px] p-[10px] rounded-[5px] focus:outline-0 focus:border-[#e5004e] peer bg-[#121212]" {...register('name')} type="text" required />
                                <label className="absolute py-1 px-[8px] text-[14px] font-light left-[5px] top-[10px] color-[#e5004e] transition-all ease-in-out duration-200 rounded-full peer-focus:top-[-14px] peer-focus:text-[14px] peer-focus:text-[#e5004e] bg-[#121212] peer-valid:top-[-14px] peer-valid:text-[14px] peer-valid:text-[#e5004e] peer-valid:bg-[#121212]">Name</label>
                            </div>
                            <div className="mt-[20px] mx-0 relative">
                                <input className="border-2 border-solid border-slate-400/10 text-[15px] p-[10px] rounded-[5px] focus:outline-0 focus:border-[#e5004e] peer bg-[#121212]" {...register('email')} type="text" required />
                                <label className="absolute py-1 px-[8px] text-[14px] font-light left-[5px] top-[10px] color-[#e5004e] transition-all ease-in-out duration-200 rounded-full peer-focus:top-[-14px] peer-focus:text-[14px] peer-focus:text-[#e5004e] bg-[#121212] peer-valid:top-[-14px] peer-valid:text-[14px] peer-valid:text-[#e5004e] peer-valid:bg-[#121212]">Email</label>
                            </div>
                        </div>
                        <div className="mt-[20px] mx-0 relative">
                            <input {...register('subject')} className="w-[100%] border-2 border-solid border-slate-400/10 text-[15px] p-[10px] rounded-[5px] focus:outline-0 focus:border-[#e5004e] peer bg-[#121212]" type="text" required />
                            <label className="absolute py-1 px-[8px] text-[14px] font-light left-[5px] top-[10px] color-[#e5004e] transition-all ease-in-out duration-200 rounded-full peer-focus:top-[-14px] peer-focus:text-[14px] peer-focus:text-[#e5004e] bg-[#121212] peer-valid:top-[-14px] peer-valid:text-[14px] peer-valid:text-[#e5004e] peer-valid:bg-[#121212]">Subject</label>
                        </div>
                        <div className="mt-[20px] mx-0 relative">
                            <textarea {...register('message')} className="w-[100%] border-2 border-solid border-slate-400/10 text-[15px] p-[10px] rounded-[5px] focus:outline-0 focus:border-[#e5004e] peer bg-[#121212]" required />
                            <label className="absolute py-1 px-[8px] text-[14px] font-light left-[5px] top-[10px] color-[#e5004e] transition-all ease-in-out duration-200 rounded-full peer-focus:top-[-14px] peer-focus:text-[14px] peer-focus:text-[#e5004e] bg-[#121212] peer-valid:top-[-14px] peer-valid:text-[14px] peer-valid:text-[#e5004e] peer-valid:bg-[#121212]">Message</label>
                        </div>
                        <button type="submit" className="bg-[#e5004e] py-5 px-10 mt-[12px] rounded-md text-black font-semibold text-lg focus:bg-[#e5004e]/80 transition-all duration-100 ease-linear">Submit</button>
                    </motion.form>

                    { /* <motion.form initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.6, ease: "easeOut" }} viewport={{ once: true }} onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-row gap-5 mb-[30px]">
                            <div className="ad-textbox w-[40%]">
                                <input className="peer" id="textbox" type="text" placeholder="Test"/>
                                <span className="material-symbols-outlined peer-placeholder-shown:textbox-span"><UserIcon className="h-6 w-6" /></span>
                                <label htmlFor="peer-focus:textbox-focus-label peer-valid:textbox-valid-label" />
                                <div className="underline" />
                            </div>
                            <div className="ad-textbox w-[60%]">
                                <input className={'${value ? "has-value" : ""} peer'} id="textbox" type="email" />
                                <span className="material-symbols-outlined peer-focus:textbox-focus-span peer-valid:textbox-valid-span"><InboxIcon className="h-6 w-6" /></span>
                                <label htmlFor="textbox" className="peer-focus:textbox-focus-label peer-valid:textbox-valid-label">Email Address</label>
                                <div className="underline" />
                            </div>
                        </div>
                        <div className="ad-textbox mb-[30px]">
                            <input className={'${value ? "has-value" : ""} peer'} id="textbox" type="text" />
                            <span className="material-symbols-outlined peer-focus:textbox-focus-span peer-valid:textbox-valid-span"><PencilSquareIcon className="h-6 w-6" /></span>
                            <label htmlFor="peer-focus:textbox-focus-label peer-valid:textbox-valid-label">Subject</label>
                            <div className="underline" />
                        </div>
                        <div className="ad-textbox mb-[30px]">
                            <input className={'${value ? "has-value" : ""} peer'} id="textbox" type="text" />
                            <span className="material-symbols-outlined peer-focus:textbox-focus-span peer-valid:textbox-valid-span"><ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6" /></span>
                            <label htmlFor="peer-focus:textbox-focus-label peer-valid:textbox-valid-label">Message</label>
                            <div className="underline" />
                        </div>
                        <button type="submit" className="bg-[#e5004e] py-5 px-10 mt-[16px] rounded-md text-black font-semibold text-lg focus:bg-[#e5004e]/80 transition-all duration-100 ease-linear w-full">Submit</button>
                </motion.form> */ }
                </div>
            </div>
        </div>
    );
}

export default ContactMe