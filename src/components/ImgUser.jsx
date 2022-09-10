import React, { Fragment } from 'react'
import { motion } from 'framer-motion'

const ImageUser = () => {
    return (
        <Fragment>
            <motion.div
                animate={{
                    scale: [1, 1.5, 1.5, 1, 1],
                    rotate: [360, 360, 360, 360, 0],
                    borderRadius: ["20%", "30%", "50%", "20%", "50%"]
                }}
                transition={{ duration: 1.5 }}
                className='img-box bg-danger p-3 border border-dark shadow-style'
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