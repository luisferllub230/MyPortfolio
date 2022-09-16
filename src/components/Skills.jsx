import React, { Fragment, useState } from 'react'
import Icons from '../helpers/Icons'
import { motion } from 'framer-motion'

const Skills = () => {


    const [Frontend, setFrontend] = useState(Icons.filter(icon => icon.Skill === "Frontend"));
    const [Backend, setBackend] = useState(Icons.filter(icon => icon.Skill === "Backend"));
    const [Database, setDatabase] = useState(Icons.filter(icon => icon.Skill === "Database"));
    const [Others, setOthers] = useState(Icons.filter(icon => icon.Skill === "Others"));

    return (
        <Fragment>
            <motion.div
                className=" shadow-style col-12 col-md-8 border-total-style rounded-styles p-3 "
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, y: [-50, 0] }}
                viewport={{ once: true }}
            >
                <div className="">
                    <h1 className="text-center pt-2 pb-3">Skills</h1>
                    <div className="row">

                        <div className="col-12 col-md-6 mt-5">
                            <div className="row">

                                <div className="col-12" id='skill'>
                                    <h3 className="text-center">Frontend</h3>
                                </div>
                                <div className="col-12">

                                    <ul className="list-group ">



                                        {
                                            Frontend.map(i => (

                                                <motion.li
                                                    className="list-group-item bg-dark text-white"
                                                    initial={{ opacity: 0 }}
                                                    whileInView={{ opacity: 1, x: [-50, 0] }}
                                                    viewport={{ once: true }}
                                                >
                                                    <i
                                                        className={i.class}
                                                        style={i.style}
                                                    ></i>
                                                    <div class="progress">
                                                        <div
                                                            className="progress-bar progress-bar-striped  progress-bar-animated"
                                                            role="progressbar"
                                                            aria-valuenow="75"
                                                            aria-valuemin="0"
                                                            aria-valuemax="100"
                                                            style={{ width: i.withBar, backgroundColor: i.style.color }}
                                                        ></div>
                                                    </div>
                                                    <hr style={{ color: i.style.color }} />
                                                </motion.li>
                                            ))
                                        }


                                    </ul>

                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 mt-2 mt-md-0">

                            <div className="row mt-5">
                                <div className="col-12">
                                    <h3 className="text-center">Backend</h3>
                                </div>
                                <div className="col-12">
                                    <ul className="list-group">

                                        {
                                            Backend.map(i => (

                                                <motion.li
                                                    initial={{ opacity: 0 }}
                                                    whileInView={{ opacity: 1, x: [50, 0] }}
                                                    viewport={{ once: true }}
                                                    className="list-group-item bg-dark text-white">
                                                    <i
                                                        className={i.class}
                                                        style={i.style}
                                                    ></i>
                                                    <div class="progress">
                                                        <div
                                                            className="progress-bar progress-bar-striped  progress-bar-animated"
                                                            role="progressbar"
                                                            aria-valuenow="75"
                                                            aria-valuemin="0"
                                                            aria-valuemax="100"
                                                            style={{ width: i.withBar, backgroundColor: i.style.color }}
                                                        ></div>
                                                    </div>
                                                    <hr style={{ color: i.style.color }} />
                                                </motion.li>
                                            ))
                                        }

                                    </ul>
                                </div>
                            </div>

                        </div>

                        <div className="col-12 col-md-6 mt-2">

                            <div className="row mt-5">
                                <div className="col-12">
                                    <h3 className="text-center">DataBase</h3>
                                </div>
                                <div className="col-12">
                                    <ul className="list-group">

                                        {
                                            Database.map(i => (

                                                <motion.li
                                                    initial={{ opacity: 0 }}
                                                    whileInView={{ opacity: 1, x: [-50, 0] }}
                                                    viewport={{ once: true }}
                                                    className="list-group-item bg-dark text-white">
                                                    <i
                                                        className={i.class}
                                                        style={i.style}
                                                    ></i>
                                                    <div class="progress">
                                                        <div
                                                            className="progress-bar progress-bar-striped  progress-bar-animated"
                                                            role="progressbar"
                                                            aria-valuenow="75"
                                                            aria-valuemin="0"
                                                            aria-valuemax="100"
                                                            style={{ width: i.withBar, backgroundColor: i.style.color }}
                                                        ></div>
                                                    </div>
                                                    <hr style={{ color: i.style.color }} />
                                                </motion.li>
                                            ))
                                        }

                                    </ul>
                                </div>
                            </div>

                        </div>


                        <div className="col-12 col-md-6 mt-2">

                            <div className="row mt-5">
                                <div className="col-12">
                                    <h3 className="text-center">Others Technologies</h3>
                                </div>
                                <div className="col-12">
                                    <ul className="list-group">

                                        {
                                            Others.map(i => (

                                                <motion.li
                                                    className="list-group-item bg-dark text-white"
                                                    initial={{ opacity: 0 }}
                                                    whileInView={{ opacity: 1, x: [50, 0] }}
                                                    viewport={{ once: true }}
                                                >
                                                    <i
                                                        className={i.class}
                                                        style={i.style}
                                                    ></i>
                                                    <div class="progress">
                                                        <div
                                                            className="progress-bar progress-bar-striped  progress-bar-animated"
                                                            role="progressbar"
                                                            aria-valuenow="75"
                                                            aria-valuemin="0"
                                                            aria-valuemax="100"
                                                            style={{ width: i.withBar, backgroundColor: i.style.color }}
                                                        ></div>
                                                    </div>
                                                    <hr style={{ color: i.style.color }} />
                                                </motion.li>
                                            ))
                                        }

                                    </ul>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </motion.div>
        </Fragment>
    );
}

export default Skills;