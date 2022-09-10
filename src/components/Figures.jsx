import React, { Fragment } from 'react'
import { motion } from 'framer-motion'

const Figure = ({ }) => {


    return (
        <Fragment>
            <motion.div
                className="rectangle1 bg-danger figure shadow"
                animate={{
                    y: [0, 200, 0],
                }}
                transition={{ repeat: Infinity, duration: 4 }}
            >
                <div className='rectangle-inside bg-dark shadow'>

                </div>
            </motion.div>

            <motion.div
                className="rectangle2 bg-danger figure shadow"
                animate={{
                    y: [0, 200, 0],
                }}
                transition={{ repeat: Infinity, duration: 4 }}
            >
                <div className='rectangle-inside bg-dark shadow'>

                </div>
            </motion.div>

        </Fragment>
    );
}

export default Figure;
