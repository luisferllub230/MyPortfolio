import React, { Fragment, useState } from 'react'
import { motion } from 'framer-motion'
import iconArrayObject from '../helpers/Icons';

const IconBackGround = () => {
    return (
        <Fragment>
            <div className='containerIcon'>
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
            </div>
        </Fragment>
    );
}

export default IconBackGround;
