import React, { Fragment, useState } from 'react'
import { motion } from 'framer-motion'
import SkillsCarousel from './SkillCarousel'
import Accordion from './Accordion'
import { useEffect } from 'react'


const Project = () => {

    const ObjectProject = [{
        id: 1,
        title: 'Social-network',
        img: 'https://camo.githubusercontent.com/0017c3567d89bd4c6da2941847c6ce70ff0666d9fad451734dffb4b8c4aaa8b8/68747470733a2f2f692e706f7374696d672e63632f537344776b34316e2f486f6d652d6578616d706c652e6a7067',
        description: 'Social Network App is a project carried out in node js in order to create a web app that is capable of fulfilling the functionalities of a social network. Being able to create users, make posts, comment on posts, have friends and be able to view all their posts, apart from having a security section that will not allow any user to access another account.',
        demo: '',
        github: 'https://github.com/Fraineralex/Social-Network-App',
        authors: [{ name: "Luis Fernandez", githubA: "https://github.com/luisferllub230" }, { name: "Frainer Alexander", githubA: "https://github.com/Fraineralex" }, { name: "Alexander Echavarria", githubA: "https://github.com/Alexander2902" }],
        Classification: 'Express',
        technologies: ['HTML', 'CSS', 'Sass', 'bootstrap', 'JavaScript', 'Nodejs', 'Express', 'Sqlite3', 'sequelize'],
    },
    {
        id: 2,
        title: 'Ecommerce',
        img: 'https://camo.githubusercontent.com/0017c3567d89bd4c6da2941847c6ce70ff0666d9fad451734dffb4b8c4aaa8b8/68747470733a2f2f692e706f7374696d672e63632f537344776b34316e2f486f6d652d6578616d706c652e6a7067',
        description: 'Ecommerce App is a project carried out in node js in order to create a web app that is capable of fulfilling the functionalities of an ecommerce. Being able to create users, make orders, add products to the cart, have a security section that will not allow any user to access another account.',
        Classification: 'Express',
        authors: [{ name: "Luis Fernandez", githubA: "https://github.com/luisferllub230" }, { name: "Frainer Alexander", githubA: "https://github.com/Fraineralex" }, { name: "Alexander Echavarria", githubA: "https://github.com/Alexander2902" }],
    }
    ]

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
            <div className=' col-12  row box-styles m-0 p-0 shadow-style'>
                <div className="col-12 col-md-12 box-header">
                    <motion.div
                        onClick={() => setSelect([true, false, false])}
                        className={"col-4 box-header-item" + (select[0] ? " box-header-item-selected" : "")}
                        whileTap={{ scale: [0.9, 0.5, 0.9, 1] }}
                        style={{ cursor: 'pointer' }}
                        transition={{ duration: 1 }}
                    >
                        Express
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
                <motion.div
                    className="row col-12 col-md-12 box-content"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, x: [-50, 0] }}
                    viewport={{ once: true }}
                >
                    <Accordion
                        projectFilter={projectFilter}
                    />
                </motion.div>
            </div>
        </Fragment>
    );
}

export default Project;