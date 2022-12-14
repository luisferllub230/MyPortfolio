import React, { Fragment, useState } from 'react'
import { motion } from 'framer-motion'
import ObjectProject from '../helpers/Projects'
import Accordion from './Accordion'
import { useEffect } from 'react'


const Project = () => {

    //use state
    const [select, setSelect] = useState([true,false,false,])
    const [projectFilter, setProjectFilter] = useState([])

    //use effect
    useEffect(() => {
        select[0] ? setProjectFilter(ObjectProject.filter((item) => item.Classification === "Express")) : null;
        select[1] ? setProjectFilter(ObjectProject.filter((item) => item.Classification === "React")) : null;
        select[2] ? setProjectFilter(ObjectProject.filter((item) => item.Classification === ".Net")) : null;
    }, [select]);


    return (
        <Fragment>
            <div className='row col-12 col-md-8 border-total-style rounded-styles shadow-style'>

                <div className="col-12">
                    <h1 className=' mx-auto col-12 text-center pt-2 pb-3 '>My principal Projects</h1>
                </div>

                <div className="row col-12 col-md-12 p-3 box-header d-flex text-center text-nowrap mx-auto">
                    <motion.div
                        onClick={() => setSelect([true, false, false])}
                        className={"col-4 box-header-item" + (select[0] ? " box-header-item-selected" : "")}
                        whileTap={{ scale: [0.9, 0.5, 0.9, 1] }}
                        style={{ cursor: 'pointer' }}
                        transition={{ duration: 1 }}
                    >
                        Node js
                    </motion.div>
                    <motion.div
                        onClick={() => setSelect([false, true, false])}
                        className={"col-4 box-header-item" + (select[1] ? " box-header-item-selected" : "")}
                        whileTap={{ scale: [0.9, 0.5, 0.9, 1] }}
                        style={{ cursor: 'pointer' }}
                        transition={{ duration: 1 }}
                    >
                        React
                    </motion.div>
                    <motion.div
                        onClick={() => setSelect([false, false, true])}
                        className={"col-4 box-header-item" + (select[2] ? " box-header-item-selected" : "")}
                        whileTap={{ scale: [0.9, 0.5, 0.9, 1] }}
                        style={{ cursor: 'pointer' }}
                        transition={{ duration: 1 }}
                    >
                        .Net
                    </motion.div>
                </div>
                <div
                    className="col-12 p-2"
                >
                    <Accordion
                        projectFilter={projectFilter}
                    />
                </div>
            </div>
        </Fragment>
    );
}

export default Project;