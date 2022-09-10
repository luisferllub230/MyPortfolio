import React, { Fragment } from 'react'
import { motion } from 'framer-motion'
import Type from 'react-typed'
import "../public/styles.css"
import ImageUser from './ImgUser'
import IconBackGround from './IconBackGround'
import Figure from './Figures'

const Main = () => {
    return (
        <Fragment>
            <section>
                <div className="row text-white a">
                    <div className="col-12 col-md-12 page-initial">
                        <ImageUser />
                        <h1 className='text-center ps-2 border-bottom border-success border-5 pb-2'>
                            <Type
                                className='text-center'
                                strings={['LuisFerllub230']}
                                typeSpeed={500}
                            />
                        </h1>
                        <br />
                        <IconBackGround
                        />
                        <Figure
                        />
                    </div>
                    <div className='howIam-container col-12'>
                        <div className='bg-danger howIam'>
                            <motion.div
                                className='howIam-inside bg-dark'
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1, y: [50, 0] }}
                                viewport={{ one: true }}
                            >
                                <div className=''>
                                    <h1 className='text-center text-white'>How I am?</h1>
                                    <p className='text-start mt-5'>
                                        <Type
                                            className='text-center'
                                            strings={['Hi im Luis Alejandro Fernandez Lluberes.<br/><br/> Im a Junior Software Developer, i like to learn new things and i like to work in a team. at the moment im learning Web Development and i want to be a Full Stack Developer.']}
                                            typeSpeed={50}
                                        />
                                    </p>
                                    <div className='text-end'>
                                        <a href="">If like more about me CLICK HERE</a>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default Main;