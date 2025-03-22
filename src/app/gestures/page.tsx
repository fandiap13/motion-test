"use client";

import { motion, MotionConfig } from 'motion/react';
import React from 'react'

const gesturesPage = () => {
    return (
        <div className='grid place-content-center h-screen gap-10'>
            <MotionConfig
                transition={{
                    duration: 0.125,
                    ease: "easeInOut"
                }}
            >
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95, rotate: "2.5deg" }}
                    className='bg-purple-700 rounded-lg px-4 py-2 text-2xl text-white cursor-pointer'
                >
                    Click
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.85, rotate: "-2.5deg" }}
                    className='bg-blue-700 rounded-lg px-4 py-2 text-2xl text-white cursor-pointer'
                >
                    Click
                </motion.button>
            </MotionConfig>
        </div>
    )
}

export default gesturesPage