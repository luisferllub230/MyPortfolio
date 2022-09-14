import React, { Fragment } from 'react'
import Type from 'react-typed'
import "../public/styles.css"
import ImageUser from './ImgUser'
import IconBackGround from './IconBackGround'
import Figure from './Figures'
import WhoIam from './WhoIam'
import Project from './Project'
import { motion } from 'framer-motion'
import { ObjectStylesFigure1PageInitial, ObjectStylesFigureInside1, ObjectStylesFigure2PageInitial, ObjectStylesFigureInside2 } from '../helpers/Figures'
import Skills from './Skills'

const Main = () => {



    return (
        <Fragment>
            <div className="row bg-black">
                <div className="col-12 col-md-12 d-column-flex justify-contend-center vh-page">
                    <ImageUser />
                    <h1 className='text-center ps-2 pb-2 mt-2'>
                        <Type
                            className='text-center'
                            strings={['LuisFerllub230']}
                            typeSpeed={500}
                        />
                    </h1>
                    <br />
                    <IconBackGround
                    />
                    {/* <Figure
                        ObjectStylesFigure1={ObjectStylesFigure1PageInitial}
                        ObjectStylesFigure2={ObjectStylesFigure2PageInitial}
                        ObjectStylesFigure1Inside={ObjectStylesFigureInside1}
                        ObjectStylesFigure2Inside={ObjectStylesFigureInside2}
                    /> */}
                </div>
                <div className='col-12 mt-5 mb-5'>
                    <WhoIam />
                </div>
                <div className="col-12 mt-5 mb-5 d-flex flex-row-reverse">
                    <Skills/>
                </div>
                <div className='Project-container'>
                    <div
                        className='Project-top'
                    >
                    </div>
                    <Figure
                        ObjectStylesFigure1={''}
                        ObjectStylesFigure2={''}
                        ObjectStylesFigure1Inside={''}
                        ObjectStylesFigure2Inside={''}
                    />
                    <motion.div
                        className="Project shadow-style"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, x: [-50, 0] }}
                        viewport={{ once: true }}
                    >
                        <Project
                        />
                    </motion.div>
                </div>
            </div>
        </Fragment>
    );
}

export default Main;