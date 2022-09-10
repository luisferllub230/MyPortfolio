import React, { Fragment } from 'react'
import { motion } from 'framer-motion'

const IconBackGround = ({ icons }) => {
    return (
        <Fragment>
            {icons.map(e => (
                <motion.div
                    className='figure'
                >
                    <i className={e}></i>
                </motion.div>
            ))}
        </Fragment>
    );
}

export default IconBackGround;
