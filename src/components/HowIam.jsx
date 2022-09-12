import React, { Fragment } from 'react'
import { motion } from 'framer-motion'
import Type from 'react-typed'


const HowIam = () => {
    return (
        <Fragment>
            <div className='howIam'></div>
            <motion.div
                className='howIam-inside'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, y: [50, 0] }}
                viewport={{ once: true}}
            >
                <div className=''>
                    <h1 className='text-center'>How I am?</h1>
                    <p className='text-start mt-5'>
                        <Type
                            className='text-center'
                            strings={['Hi im Luis Alejandro Fernandez Lluberes.<br/><br/> Im a Junior Software Developer, i like to learn new things and i like to work in a team. at the moment im learning Web Development and i want to be a Full Stack Developer.']}
                            typeSpeed={50}
                        />
                    </p>

                    <div className='row mt-5'>
                        <div className=' col-12 text-end'>
                            <a href="https://drive.google.com/file/d/1aJNxs8U3SHXwp8CarNRHO4xqhIGrThCX/view?usp=sharing" target="_black">
                                <i className="bi bi-file-earmark-person"></i>
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100009171501789" target="_blank">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="https://www.instagram.com/alejandro_ferllub/" target="_blank">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/luis-fernandez-lluberes/" target="_blank">
                                <i className="bi bi-linkedin"></i>
                            </a>
                            <a href="https://wa.me/18296946948?text=Hola,%20vengo%20del%20portafolio" target="_blank">
                                <i className="bi bi-whatsapp"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </Fragment>
    );
}

export default HowIam;