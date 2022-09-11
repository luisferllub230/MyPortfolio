import React, { Fragment, useState } from 'react'
import { motion } from 'framer-motion'

const IconBackGround = () => {

    const iconArrayObject = [
        {
            nameIcon: "react",
            class: "devicon-react-original-wordmark",
            initial: { x: 55, y: -800, opacity: 0.3 },
            animate: { x: 55, y: 0, opacity: 1 },
            transition: { delay: 0.5, duration: 4, },
            style: { fontSize: "3rem", color: "#61dafb" }

        },
        {
            nameIcon: "node",
            class: "devicon-nodejs-plain",
            initial: { x: 105, y: -800, opacity: 0.9 },
            animate: { x: 105, y: 0, opacity: 1 },
            transition: { delay: 0.5, duration: 4, repeatType: "reverse" },
            style: { fontSize: "3rem", color: "#3c873a" }
        },
        {
            nameIcon: "express",
            class: "devicon-express-original-wordmark",
            initial: { x: -25, y: -800, opacity: 0.9 },
            animate: { x: -25, y: -10, opacity: 1 },
            transition: { delay: 0.5, duration: 4,},
            style: { fontSize: "5rem", color: "white", }
        },
        {
            nameIcon: "javascript",
            class: "devicon-javascript-plain",
            initial: { x: -85, y: -800, opacity: 0.9 },
            animate: { x: -85, y: 0, opacity: 1 },
            transition: { delay: 0.5, duration: 4, },
            style: { fontSize: "3rem", color: "#f7df1e" }
        },
        {
            nameIcon: "html",
            class: "devicon-html5-plain-wordmark",
            initial: { x: -145, y: -800, opacity: 0.9 },
            animate: { x: -145, y: 0, opacity: 1 },
            transition: { delay: 0.5, duration: 4 },
            style: { fontSize: "3rem", color: "#e34c26" }
        },
        {
            nameIcon: "sass",
            class: "devicon-sass-original",
            initial: { x: -145, y: -800, opacity: 0.9 },
            animate: { x: -145, y: 55, opacity: 1 },
            transition: { delay: 0.5, duration: 4},
            style: { fontSize: "3rem", color: "#cc6699" }
        },
        {
            nameIcon: "css",
            class: "devicon-css3-plain-wordmark",
            initial: { x: -85, y: -800, opacity: 0.9 },
            animate: { x: -85, y: 55, opacity: 1 },
            transition: { delay: 0.5, duration: 4},
            style: { fontSize: "3rem", color: "#264de4" }
        },
        {
            nameIcon: "bootstrap",
            class: "devicon-bootstrap-plain-wordmark",
            initial: { x: -10, y: -800, opacity: 0.9 },
            animate: { x: -10, y: 55, opacity: 1 },
            transition: { delay: 0.5, duration: 4},
            style: { fontSize: "3rem", color: "#563d7c" }
        },
        {
            nameIcon: "git",
            class: "devicon-git-plain-wordmark",
            initial: { x: 55, y: -800, opacity: 0.9 },
            animate: { x: 55, y: 55, opacity: 1 },
            transition: { delay: 0.5, duration: 4},
            style: { fontSize: "3rem", color: "#f05032" }
        },
        {
            nameIcon: "Handlebars",
            class: "devicon-handlebars-plain-wordmark",
            initial: { x: 110, y: -800, opacity: 0.9 },
            animate: { x: 110, y: 55, opacity: 1 },
            transition: { delay: 0.5, duration: 4},
            style: { fontSize: "3rem", color: "#f0772b" }
        }
    ]

    return (
        <Fragment>
            <div className='containerIcon'>
                {
                    iconArrayObject.map((icon) => (
                        <motion.i
                            key={icon.nameIcon}
                            className={icon.class+ " figure"}
                            initial={icon.initial}
                            animate={icon.animate}
                            transition={icon.transition}
                            style={icon.style}
                        ></motion.i>
                    ))
                }
            </div>
            <div className='containerIcon'>
                <motion.i
                    initial={{ x: 50, y: -550 }}
                    animate={{ x: -230, y: -120 }}
                    transition={{ duration: 3 }}
                ></motion.i>
            </div>
        </Fragment>
    );
}

export default IconBackGround;
