import React, { Fragment, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Figure = ({ ObjectStylesFigure1, ObjectStylesFigure2, ObjectStylesFigure1Inside, ObjectStylesFigure2Inside }) => {

    const { position, top, left, width, height, borderRadius, borderColor, backgroundColor } = ObjectStylesFigure1;
    const { position: position2, top: top2, left: left2, width: width2, height: height2, borderRadius: borderRadius2, borderColor: borderColor2, backgroundColor: backgroundColor2 } = ObjectStylesFigure2;

    const { position: pFI, top: tFI, left: lFI, width: wFI, height: hFI, border: bFI, borderRadius: brFI, borderColor: bcFI, backgroundColor: bgFI } = ObjectStylesFigure1Inside;
    const { position: pFII, top: tFII, left: lFII, width: wFII, height: hFII, border: bFII, borderRadius: brFII, borderColor: bcFII, backgroundColor: bgFII } = ObjectStylesFigure2Inside;

    //functions
    const checkWindowsWidth = () => {
        const { innerWidth: width, innerHeight: height } = window
        return { width, height }
    }

    //useStates
    const [windowsWidth, setWindowsWidth] = useState(checkWindowsWidth());
    const [validations, setValidations] = useState(false);

    useEffect(() => {
        if (windowsWidth.width < 768) {
            setValidations(true)
        }
    }, [windowsWidth])


    return (
        <Fragment>
            <motion.div
                className='shadow-style'
                animate={{
                    y: [0, 200, 0],
                }}
                style={{ position: position, top: top, left: left, width: width, height: height, borderRadius: borderRadius, borderColor: borderColor, backgroundColor: backgroundColor }}
                transition={{ repeat: Infinity, duration: 4 }}
            >

                {
                    validations
                        ?
                        null
                        :
                        <div
                            className='shadow-style'
                            style={{ position: pFI, top: tFI, left: lFI, width: wFI, height: hFI, borderRadius: brFI, borderColor: bcFI, backgroundColor: bgFI, border: bFI }}
                        >
                        </div>
                }
            </motion.div>

            <motion.div
                className='shadow-style'
                animate={{
                    y: [0, 200, 0],
                }}
                style={{ position: position2, top: top2, left: left2, width: width2, height: height2, borderRadius: borderRadius2, borderColor: borderColor2, backgroundColor: backgroundColor2 }}
                transition={{ repeat: Infinity, duration: 4 }}
            >
                {
                    validations
                        ?

                        null
                        :


                        <motion.div
                            className='shadow-style'
                            style={{
                                position: pFII, top: tFII, left: lFII, width: wFII, height: hFII, borderRadius: brFII, borderColor: bcFII, backgroundColor: bgFII, border: bFII
                            }}
                        >
                        </motion.div>
                }
            </motion.div>

        </Fragment>
    );
}

export default Figure;
