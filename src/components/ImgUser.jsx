import React, { Fragment } from 'react'
import { motion } from 'framer-motion'

const ImageUser = () => {
    return (
        <Fragment>
            <motion.div
                initial={{scale:0.9}}
                animate={{
                    scale: [1, 1.2, 1.2, 1, 1],
                    borderRadius: ["20%", "30%", "50%", "20%", "50%"]
                }}
                transition={{ duration: 1.5 }}
                className='img-box p-3 shadow-style'
            >
                <motion.img
                    initial={{ y: 0 }}
                    animate={{ y: -20 }}
                    transition={{ duration: 0.5 }}
                    drag
                    dragConstraints={{ top: -25, left: -25, right: 25, bottom: 25 }}
                    whileTap={{ scale: 0.9 }}
                    src="https://avatars.githubusercontent.com/u/84060723?v=4"
                    alt="Luis Fernandez page"
                    className='userImage'
                />
            </motion.div>
        </Fragment>
    );
}

export default ImageUser;