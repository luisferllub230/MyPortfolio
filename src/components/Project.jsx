import React, { Fragment, useState } from 'react'
import { motion } from 'framer-motion'
import SkillsCarousel from './SkillCarousel'


const Project = () => {

    const ObjectProject = [{
        img: '',
        title: '',
        description: '',
        skills: [],
        demo: '',
        github: '',
        authors: []

    }]

    const [select, setSelect] = useState([
        true,
        false,
        false,
    ])
        
    return (
        <Fragment>
            <div className=' col-12  row box-styles m-0 p-0'>
                <div className="col-12 col-md-12 box-header">
                    <motion.div
                        onClick={() => setSelect([true, false, false])}
                        className={"col-4 box-header-item" + (select[0] ? " box-header-item-selected" : "")}
                        whileTap={{ scale: [0.9,0.5,0.9,1]}}
                        style={{ cursor: 'pointer'}}
                        transition={{ duration: 1 }}
                    >
                        Express
                    </motion.div>
                    <motion.div
                        onClick={() => setSelect([false, true, false])}
                        className={"col-4 box-header-item" + (select[1] ? " box-header-item-selected" : "")}
                        whileTap={{ scale: [0.9,0.5,0.9,1] }}
                        style={{ cursor: 'pointer'}}
                        transition={{ duration: 1 }}
                    >
                        React
                    </motion.div>
                    <motion.div
                        onClick={() => setSelect([false, false, true])}
                        className={"col-4 box-header-item" + (select[2] ? " box-header-item-selected" : "")}
                        whileTap={{ scale: [0.9,0.5,0.9,1] }}
                        style={{ cursor: 'pointer'}}
                        transition={{ duration: 1 }}
                    >
                        .Net
                    </motion.div>

                </div>
                <div className="col-12 col-md-12 box-container">
                    lorem*24
                </div>
            </div>
        </Fragment>
    );
}

export default Project;