import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { carouselImages } from "./carouselImages";
import EmailInputBox from "../Header Components/EmailInputBox";
import HeaderText from "../Header Components/HeaderText";

export default function Carousel({ counter, setCounter, tuple, setTuple }) {

    if (tuple[1] !== counter) {
        setTuple([tuple[1], counter]);
    }

    let variants = {
        enter: { opacity: 0 },
        animation: { opacity: 1 },
        exit: { opacity: 0 }
    }

    let prev = tuple[0];

    let direction = counter > prev ? 'increasing' : 'decreasing';

    if (counter === carouselImages.length) {
        setCounter(0);
    } else if (counter < 0) {
        setCounter(carouselImages.length - 1);
    }

    return (
        <>
            <div className="header h-headerBackgroundHeight w-full  ">
                <div className="image__container flex relative  justify-center h-full w-full z-0 mt-10">
                    <AnimatePresence >
                        <motion.img className={`carousel__image absolute h-carouselHeight w-10/12 shadow-sm flex items-center justify-center rounded-md`}
                            key={counter}
                            src={carouselImages[counter]}
                            variants={variants}
                            initial="enter"
                            animate="animation"
                            exit="exit"
                            transition={{ duration: 1.1 }}
                        />
                    </AnimatePresence>
                    <div className="button__container flex justify-center z-10 h-4/6  w-carouselCover mt-11  ">
                        <div className="flex items-center justify-between w-full ">
                            <div className="left__side md:h-80 md:w-2/6 rounded-md  shadow-md">
                                <EmailInputBox />
                            </div>
                            <div className="right__side h-80 md:w-7/12 sm:w-full flex flex-col items-center justify-center text-5xl rounded-md space-y-5 bg-slate-200 bg-opacity-50">
                                <HeaderText />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
