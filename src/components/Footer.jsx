import React, { Fragment } from 'react'


const Footer = () => {
    return (
        <Fragment>
            <div className="container-fluid border-top-style bg-dark">
                <div className="row">
                    <div className="col-12 p-4 text-center">
                        <h3 className="">{"Contact"}</h3>
                        <p>if you like to contact with me, use this way</p>
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
        </Fragment>
    );
}

export default Footer;