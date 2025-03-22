"use client";

import React, { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";

const BasicOfMotion = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div className='grid place-content-center h-screen gap-10'>
            <motion.button
                onClick={() => setVisible(!visible)} className='bg-purple-500 text-white rounded-lg px-6 py-4 cursor-pointer'
                layout
            >
                Show/Hide
            </motion.button>

            {/* AnimatePresence membungkus elemen yang ingin diberi animasi transisi ketika mereka muncul atau hilang. */}
            <AnimatePresence mode='popLayout'>
                {visible && (
                    <motion.div
                        initial={{
                            rotate: "0deg",
                            scale: 0,
                            y: 0,
                        }}
                        animate={{
                            rotate: "180deg",
                            scale: 1,
                            y: [0, 150, -150, -150, 0],
                        }}
                        exit={{
                            rotate: "0deg",
                            scale: 0,
                            y: 0,
                        }}
                        transition={{
                            duration: 1,
                            // type: "spring"
                            ease: "backInOut",
                            // pembagian waktu, tapi tetap durasi totalnya 1 detik sesuai dengan duration
                            times: [0, 0.25, 0.5, 0.85, 1]
                        }}
                        className='w-40 h-40 bg-black'
                    ></motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default BasicOfMotion