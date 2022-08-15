import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


export default function Carousel() {
    const [counter, setCounter] = useState(1);
    const [tuple, setTuple] = useState([null, counter]);

    if (tuple[1] !== counter) {
        setTuple([tuple[1], counter]);
    }

    let variants = {
        enter: direction => ({ x: direction === 'increasing' ? 180 : -180 }),
        animation: { x: 0 },
        exit: direction => ({ x: direction === 'increasing' ? -180 : 180 }),
    }

    let prev = tuple[0];

    let direction = counter > prev ? 'increasing' : 'decreasing';

    let colors = ['bg-red-500', ' bg-orange-500', 'bg-green-500', 'bg-blue-400'];

    return (
        <>
            <div className="header h-full w-full bg-purple-500 text-whit ">
                <div className="header__buttons flex justify-between">
                    <button className="header__button__prev" onClick={() => setCounter(counter - 1)}>Prev</button>
                    <button className="header__button__prev" onClick={() => setCounter(counter + 1)}>Next</button>
                </div>
                <div className="image__container flex justify-center mt-20">
                    <div className="image__background flex items-center justify-center h-40 w-40 bg-gray-700 relative overflow-hidden">
                        <AnimatePresence custom={direction}>
                            <motion.div className={`carousel__image absolute h-32 w-32 ${colors[Math.abs(counter) % 4]} flex items-center justify-center`}
                                key={counter}
                                variants={variants}
                                initial="enter"
                                animate="animation"
                                exit="exit"
                                custom={direction}
                                transition={{ duration: 0.3, type: 'spring', stiffness: 60 }}
                            >
                                {counter}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </>
    )
}
