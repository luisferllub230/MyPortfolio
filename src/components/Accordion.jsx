import React, { Fragment } from 'react';
import { motion } from 'framer-motion'

const Accordion = ({ projectFilter }) => {

    return (
        <Fragment>

            {
                projectFilter.map(i => (
                    <div className="accordion p-0 pt-1 pb-1 " id="accordionPanelsStayOpenExample">

                        <div className="accordion-item " style={{ backgroundColor: "var(--color-primary)" }}>

                            <h2 className="accordion-header" id={"panelsStayOpen-heading" + i.id}>

                                <button class={i.id < 2 ? "accordion-button " : "accordion-button collapsed"} style={{ color: "var(--color-secondary)", backgroundColor: "var(--color-primary)" }} type="button" data-bs-toggle="collapse" data-bs-target={"#panelsStayOpen-" + i.id} aria-expanded="true" aria-controls={"panelsStayOpen-" + i.id}> {i.title}</button>

                            </h2>

                            <div id={"panelsStayOpen-" + i.id} class={i.id < 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby={"panelsStayOpen-heading" + i.id}>

                                <div className="accordion-body" >
                                    <motion.div
                                        className='box-img'
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 1.5 }}
                                        transition={{ duration: 1 }}
                                    >
                                        <img src={i.img} alt={i.title} className='box-img-item' />
                                    </motion.div>

                                    <p className='col-12 pt-5 text-style'>
                                        {i.description}
                                    </p>
                                    <hr />
                                    <div className='col-12 text-style'>
                                        {
                                            i.demo === ""
                                                ?
                                                <a href={i.github} target="_blank" className='bg-danger m-1 p-1 ps-2 pe-2 rounded-pill'>No deployed</a>
                                                :
                                                <a href={i.demo} target="_blank" className="bg-success m-1 p-1 ps-2 pe-2 rounded-pill"><span>Live demo</span></a>
                                        }

                                        <a href={i.github} target="_blank" className="bg-dark m-1 p-1 ps-2 pe-2 rounded-pill">Github</a>
                                    </div>
                                    <hr />
                                    <div className='col-12 text-style'>
                                        {
                                            i.authors.map(a => (
                                                <a href={a.githubA} target="_blank" className="bg-dark m-1 p-1 ps-2 pe-2 rounded-pill">{a.name}</a>
                                            ))
                                        }
                                    </div>
                                    <hr />
                                    <div className='col-12'>

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
