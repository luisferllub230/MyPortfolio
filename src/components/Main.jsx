import React, { Fragment } from 'react'
import Type from 'react-typed'
import "../public/styles.css"
import ImageUser from './ImgUser'
import IconBackGround from './IconBackGround'
import WhoIam from './WhoIam'
import Project from './Project'
import { motion } from 'framer-motion'
import Skills from './Skills'


const Main = () => {



    return (
        <Fragment>
            <div className="row container-style">
                <div className="col-12 col-md-12 mt-5 vh-page" id='home'>
                    <ImageUser />
                    <h1 className='text-center ps-2 pb-2 mt-2'>
                        <Type
                            className='text-center'
                            strings={['LuisFerllub230']}
                            typeSpeed={500}
                        />
                    </h1>
                    <br />
                    <div className='col-12 mb-3 d-flex justify-content-center'>
                        <IconBackGround
                        />
                    </div>
                </div>
                <div className='col-12 mt-5 mb-5 d-flex justify-content-center'>
                    <WhoIam />
                </div>
                <div className="col-12 mt-5 mb-5 d-flex justify-content-center">
                    <Skills />
                </div>
                <motion.div
                    className="col-12  mt-5 mb-5 d-flex justify-content-center"
                    id='projects'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, x: [-50, 0] }}
                    viewport={{ once: true }}
                >
                    <Project
                    />
                </motion.div>
            </div>
        </Fragment>
    );
}

export default Main;