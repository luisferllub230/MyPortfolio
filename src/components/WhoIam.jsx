import React, { Fragment } from 'react'
import { motion } from 'framer-motion'
import Type from 'react-typed'


const HowIam = () => {
    return (
        <Fragment>
            <motion.div
                className='col-12 col-md-6 border border-2 border-white rounded-styles p-3 ms-0 ms-md-5 shadow-style'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, y: [50, 0] }}
                viewport={{ once: true}}
            >
                <div className=''>
                    <h1 className='text-center pt-2 pb-3 border-bottom border-5 '>who I am?</h1>
                    <p className='text-start mt-5'>
                        <Type
                            strings={['Hi im Luis Alejandro Fernandez Lluberes.<br/><br/> Im a Junior Software Developer, i like to learn new things and i like to work in a team. at the moment im learning Web Development and i want to be a Full Stack Developer.']}
                            typeSpeed={50}
                        />
                    </p>

                    <div className='text-end mt-5'>
                        <div className=''>
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