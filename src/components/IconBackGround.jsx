import React, { Fragment, useState } from 'react'
import { motion } from 'framer-motion'
import iconArrayObject from '../helpers/Icons';

const IconBackGround = () => {
    return (
        <Fragment>
            <motion.div 
            className='containerIcon'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [-800, 0] }}
            transition={{ duration: 4 }}
            >
                {
                    iconArrayObject.map((icon) => (
                        <motion.i
                            key={icon.nameIcon}
                            className={icon.class}
                            initial={icon.initial}
                            animate={icon.animate}
                            transition={icon.transition}
                            style={icon.style}
                        ></motion.i>
                    ))
                }
            </motion.div>
        </Fragment>
    );
}

export default IconBackGround;
