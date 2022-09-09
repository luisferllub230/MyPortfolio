import React, { Fragment } from 'react'

const Header = () => {
    return (
        <Fragment>
            <section>
                <nav>
                    <div className="nav-header">
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">Skills</a></li>
                            <li><a href="">Projects</a></li>
                            <li><a href="">Learning</a></li>
                        </ul>
                    </div>
                </nav>
            </section>
        </Fragment>
    );
}

export default Header;