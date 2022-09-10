import React, { Fragment, useState } from 'react'


const Header = () => {

    const [active, setActive] = useState([false, false, false, false]);


    return (
        <Fragment>
            <section>
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container-fluid">
                        <a
                            className="navbar-brand text-light fs-3 fw-bolder"
                            href="#"

                        >{"Print('LF')"}</a>

                        <button className="navbar-toggler white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="justify-content-end navbar-collapse collapse navbar-dark" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Projects</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Skills</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </Fragment>
    );
}

export default Header;