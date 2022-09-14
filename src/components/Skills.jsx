import React, { Fragment, useState } from 'react'
import Icons from '../helpers/Icons'

const Skills = () => {


    const [Frontend, setFrontend] = useState(Icons.filter(icon => icon.Skill === "Frontend"));
    const [Backend, setBackend] = useState(Icons.filter(icon => icon.Skill === "Backend"));
    const [Database, setDatabase] = useState(Icons.filter(icon => icon.Skill === "Database"));
    const [Others, setOthers] = useState(Icons.filter(icon => icon.Skill === "Others"));

    return (
        <Fragment>
            <div className=" shadow-style col-12 col-md-10 border border-2 border-white rounded-styles p-3 me-0 me-md-5 ">
                <div className="">
                    <h1 className="text-center pt-2 pb-3 border-bottom border-5 ">Skills</h1>
                    <div className="row">

                        <div className="col-12 col-md-6">
                            <div className="row">

                                <div className="col-12">
                                    <h3 className="text-center">Frontend</h3>
                                </div>
                                <div className="col-12">

                                    <ul className="list-group">



                                        {
                                            Frontend.map(i => (

                                                <li className="list-group-item bg-dark text-white">
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
                                                </li>
                                            ))
                                        }


                                    </ul>

                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 mt-2 mt-md-0">

                            <div className="row">
                                <div className="col-12">
                                    <h3 className="text-center">Backend</h3>
                                </div>
                                <div className="col-12">
                                    <ul className="list-group">

                                        {
                                            Backend.map(i => (

                                                <li className="list-group-item bg-dark text-white">
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
                                                </li>
                                            ))
                                        }

                                    </ul>
                                </div>
                            </div>

                        </div>

                        <div className="col-12 col-md-6 mt-2">

                            <div className="row">
                                <div className="col-12">
                                    <h3 className="text-center">DataBase</h3>
                                </div>
                                <div className="col-12">
                                    <ul className="list-group">

                                        {
                                            Database.map(i => (

                                                <li className="list-group-item bg-dark text-white">
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
                                                </li>
                                            ))
                                        }

                                    </ul>
                                </div>
                            </div>

                        </div>


                        <div className="col-12 col-md-6 mt-2">

                            <div className="row">
                                <div className="col-12">
                                    <h3 className="text-center">Others Technologies</h3>
                                </div>
                                <div className="col-12">
                                    <ul className="list-group">

                                        {
                                            Others.map(i => (

                                                <li className="list-group-item bg-dark text-white">
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
                                                </li>
                                            ))
                                        }

                                    </ul>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Skills;