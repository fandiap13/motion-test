"use client";

import { useScroll, motion, useSpring } from "motion/react";

const ScrollAnimationPage = () => {
    const { scrollYProgress } = useScroll();

    // memberikan efek knyl
    const scaleX = useSpring(scrollYProgress);

    return (
        <div>
            <motion.div
                style={{
                    // scaleX: scrollYProgress
                    scaleX
                }}
                className="bg-blue-600 origin-left transform sticky top-0 w-full h-[20px]"
            />

            <motion.div className="max-w-[700px] m-auto p-4">
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita est tempore ipsa nulla blanditiis, sed quasi officia et quia pariatur corporis voluptatibus omnis incidunt dolor sunt alias unde eos veritatis! Dolores, dolorem? Corporis, non in aliquid quibusdam, maiores explicabo exercitationem accusantium nostrum est sed quis, ipsum eveniet perspiciatis incidunt temporibus deleniti doloremque dolore suscipit rem alias cum itaque voluptatum dicta? Animi quibusdam dolores minima quia asperiores enim nisi culpa perferendis. Molestias amet cumque eum voluptas. Aspernatur sequi vero labore ipsum.
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita est tempore ipsa nulla blanditiis, sed quasi officia et quia pariatur corporis voluptatibus omnis incidunt dolor sunt alias unde eos veritatis! Dolores, dolorem? Corporis, non in aliquid quibusdam, maiores explicabo exercitationem accusantium nostrum est sed quis, ipsum eveniet perspiciatis incidunt temporibus deleniti doloremque dolore suscipit rem alias cum itaque voluptatum dicta? Animi quibusdam dolores minima quia asperiores enim nisi culpa perferendis. Molestias amet cumque eum voluptas. Aspernatur sequi vero labore ipsum.
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita est tempore ipsa nulla blanditiis, sed quasi officia et quia pariatur corporis voluptatibus omnis incidunt dolor sunt alias unde eos veritatis! Dolores, dolorem? Corporis, non in aliquid quibusdam, maiores explicabo exercitationem accusantium nostrum est sed quis, ipsum eveniet perspiciatis incidunt temporibus deleniti doloremque dolore suscipit rem alias cum itaque voluptatum dicta? Animi quibusdam dolores minima quia asperiores enim nisi culpa perferendis. Molestias amet cumque eum voluptas. Aspernatur sequi vero labore ipsum.
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita est tempore ipsa nulla blanditiis, sed quasi officia et quia pariatur corporis voluptatibus omnis incidunt dolor sunt alias unde eos veritatis! Dolores, dolorem? Corporis, non in aliquid quibusdam, maiores explicabo exercitationem accusantium nostrum est sed quis, ipsum eveniet perspiciatis incidunt temporibus deleniti doloremque dolore suscipit rem alias cum itaque voluptatum dicta? Animi quibusdam dolores minima quia asperiores enim nisi culpa perferendis. Molestias amet cumque eum voluptas. Aspernatur sequi vero labore ipsum.
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita est tempore ipsa nulla blanditiis, sed quasi officia et quia pariatur corporis voluptatibus omnis incidunt dolor sunt alias unde eos veritatis! Dolores, dolorem? Corporis, non in aliquid quibusdam, maiores explicabo exercitationem accusantium nostrum est sed quis, ipsum eveniet perspiciatis incidunt temporibus deleniti doloremque dolore suscipit rem alias cum itaque voluptatum dicta? Animi quibusdam dolores minima quia asperiores enim nisi culpa perferendis. Molestias amet cumque eum voluptas. Aspernatur sequi vero labore ipsum.
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita est tempore ipsa nulla blanditiis, sed quasi officia et quia pariatur corporis voluptatibus omnis incidunt dolor sunt alias unde eos veritatis! Dolores, dolorem? Corporis, non in aliquid quibusdam, maiores explicabo exercitationem accusantium nostrum est sed quis, ipsum eveniet perspiciatis incidunt temporibus deleniti doloremque dolore suscipit rem alias cum itaque voluptatum dicta? Animi quibusdam dolores minima quia asperiores enim nisi culpa perferendis. Molestias amet cumque eum voluptas. Aspernatur sequi vero labore ipsum.
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita est tempore ipsa nulla blanditiis, sed quasi officia et quia pariatur corporis voluptatibus omnis incidunt dolor sunt alias unde eos veritatis! Dolores, dolorem? Corporis, non in aliquid quibusdam, maiores explicabo exercitationem accusantium nostrum est sed quis, ipsum eveniet perspiciatis incidunt temporibus deleniti doloremque dolore suscipit rem alias cum itaque voluptatum dicta? Animi quibusdam dolores minima quia asperiores enim nisi culpa perferendis. Molestias amet cumque eum voluptas. Aspernatur sequi vero labore ipsum.
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita est tempore ipsa nulla blanditiis, sed quasi officia et quia pariatur corporis voluptatibus omnis incidunt dolor sunt alias unde eos veritatis! Dolores, dolorem? Corporis, non in aliquid quibusdam, maiores explicabo exercitationem accusantium nostrum est sed quis, ipsum eveniet perspiciatis incidunt temporibus deleniti doloremque dolore suscipit rem alias cum itaque voluptatum dicta? Animi quibusdam dolores minima quia asperiores enim nisi culpa perferendis. Molestias amet cumque eum voluptas. Aspernatur sequi vero labore ipsum.
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita est tempore ipsa nulla blanditiis, sed quasi officia et quia pariatur corporis voluptatibus omnis incidunt dolor sunt alias unde eos veritatis! Dolores, dolorem? Corporis, non in aliquid quibusdam, maiores explicabo exercitationem accusantium nostrum est sed quis, ipsum eveniet perspiciatis incidunt temporibus deleniti doloremque dolore suscipit rem alias cum itaque voluptatum dicta? Animi quibusdam dolores minima quia asperiores enim nisi culpa perferendis. Molestias amet cumque eum voluptas. Aspernatur sequi vero labore ipsum.
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita est tempore ipsa nulla blanditiis, sed quasi officia et quia pariatur corporis voluptatibus omnis incidunt dolor sunt alias unde eos veritatis! Dolores, dolorem? Corporis, non in aliquid quibusdam, maiores explicabo exercitationem accusantium nostrum est sed quis, ipsum eveniet perspiciatis incidunt temporibus deleniti doloremque dolore suscipit rem alias cum itaque voluptatum dicta? Animi quibusdam dolores minima quia asperiores enim nisi culpa perferendis. Molestias amet cumque eum voluptas. Aspernatur sequi vero labore ipsum.
                </p>
            </motion.div>
        </div>
    )
}

export default ScrollAnimationPage