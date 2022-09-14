import React, { Fragment } from 'react';
import { motion } from 'framer-motion'
import iconArrayObject from '../helpers/Icons';
import IconBackGround from './IconBackGround';

const Accordion = ({ projectFilter }) => {


    return (
        <Fragment>

            {
                projectFilter.map(i => (
                    <div className="accordion p-0 pt-1 pb-1 " id="accordionPanelsStayOpenExample">

                        <div className="accordion-item " style={{ backgroundColor: "var(--color-primary)" }}>

                            <h2 className="accordion-header" id={"panelsStayOpen-heading" + i.id}>

                                <button className="accordion-button collapsed" style={{ color: "var(--color-secondary)", backgroundColor: "var(--color-primary)" }} type="button" data-bs-toggle="collapse" data-bs-target={"#panelsStayOpen-" + i.id} aria-expanded="true" aria-controls={"panelsStayOpen-" + i.id}> {i.title}</button>

                            </h2>

                            <div id={"panelsStayOpen-" + i.id} class="accordion-collapse collapse" aria-labelledby={"panelsStayOpen-heading" + i.id}>

                                <div className="accordion-body" >
                                    <motion.div
                                        className='box-img' 
                                        whileTap={{ scale: [1, 0.9] }}
                                        transition={{ duration: 1 }}
                                    >
                                        <img src={i.img} alt={i.title} className='box-img-item' />

                                    </motion.div>

                                    <p className='col-12 pt-5 text-style'>

                                        {i.description}

                                    </p>

                                    <div className='text-end'>

                                        <a href={i.github} target="_blank">see more in github </a>

                                    </div>

                                    <hr />

                                    <div className='col-12 text-style'>

                                        {

                                            i.demo === ""

                                                ?

                                                <span className='badge bg-danger m-1 p-1 ps-2 pe-2 rounded-pill'>

                                                    <a href={i.demo} target="_blank" >Not deployed</a>

                                                </span>

                                                :

                                                <span className='badge bg-success m-1 p-1 ps-2 pe-2 rounded-pill'>

                                                    <a href={i.demo} target="_blank" >Live demo</a>

                                                </span>
                                        }

                                        <span className='badge bg-dark m-1 p-1 ps-2 pe-2 rounded-pill'>

                                            <a href={i.github} target="_blank">Github</a>

                                        </span>

                                    </div>

                                    <hr />

                                    <div className='col-12 text-style'>
                                        <p>

                                            <span className='fw-bold'>Authors:</span>
                                            <br />
                                            {
                                                i.authors.map(a => (
                                                    <span className='badge bg-dark m-1 p-1 ps-2 pe-2 rounded-pill'><a href={a.githubA} target="_blank" >{a.name}</a></span>
                                                ))
                                            }

                                        </p>

                                    </div>

                                    <hr />

                                    <div className='col-12 text-style'>
                                        <p>

                                            <span className='fw-bold'>Technologies:</span>
                                            <br />
                                            {
                                                i.technologies.map(t => (
                                                    <span className='badge bg-dark m-1 p-1 ps-2 pe-2 rounded-pill'>{t}</span>
                                                ))
                                            }

                                        </p>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                ))
            }
        </Fragment>
    );
}

export default Accordion;
