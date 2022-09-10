import React, { Fragment } from 'react'
import { motion } from 'framer-motion'
import Type from 'react-typed'
import "../public/styles.css"
import ImageUser from './ImgUser'
import IconBackGround from './IconBackGround'

const Main = () => {

    const icons = ["devicon-react-original-wordmark colored", "devicon-nodejs-plain colored", "devicon-express-original-wordmark colored", "devicon-javascript-plain colored", "devicon-html5-plain-wordmark colored", "devicon-sass-original colored", "devicon-css3-plain-wordmark colored", "devicon-bootstrap-plain-wordmark colored"]

    return (
        <Fragment>
            <section>
                <div className="row text-white">
                    <div className="col-12 col-md-12 page-initial">
                        <ImageUser/>
                        <h1 className='text-center ps-2'>
                            <Type
                                className='text-center'
                                strings={['LuisFerllub230']}
                                typeSpeed={500}
                            />
                        </h1>
                    </div>

                    <IconBackGround
                        icons = {icons}
                    />

                </div>
            </section>
        </Fragment>
    );
}

export default Main;