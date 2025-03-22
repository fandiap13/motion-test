"use client";

import React, { useState } from 'react'
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";

const AnimationControl = () => {
    const controls = useAnimationControls();

    const handleClick = () => {
        controls.start("flip");
    }

    return (
        <div className='grid place-content-center h-screen gap-5'>
            <motion.button
                onClick={handleClick}
                className='bg-purple-500 text-white rounded-lg px-6 py-4 cursor-pointer'
            >
                Flip it
            </motion.button>

            <motion.div
                className='w-40 h-40 bg-black'
                variants={{
                    initial: {
                        rotate: "0deg",
                    },
                    flip: {
                        rotate: "260deg"
                    },
                }}
                initial="initial"
                animate={controls}
            // whileHover={"flip"}
            ></motion.div>
        </div>
    )
}

export default AnimationControl