"use client";

import { motion, useInView } from "motion/react";
import { useEffect, useRef } from "react";

const ViewBaseAnimationPage = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true }); // penggunaan once: jika sekali true maka tidak bisa false lagi

    useEffect(() => {
        console.log("Is in view ->", isInView);
    }, [isInView])

    return (
        <>
            <div className="h-[150vh]" />
            <motion.div
                className="h-screen bg-black"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
            />
            <div ref={ref} className={`h-screen ${isInView ? "bg-blue-800" : "bg-red-800"} transition`} />
        </>
    )
}

export default ViewBaseAnimationPage