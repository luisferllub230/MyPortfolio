import React, { Fragment } from 'react'
import Type from 'react-typed'
import "../public/styles.css"
import ImageUser from './ImgUser'
import IconBackGround from './IconBackGround'
import Figure from './Figures'
import HowIam from './HowIam'
import Project from './Project'

const Main = () => {
    return (
        <Fragment>
            <section>
                <div className="row">
                    <div className="col-12 col-md-12 page-initial">
                        <ImageUser />
                        <h1 className='text-center ps-2 pb-2'>
                            <Type
                                className='text-center'
                                strings={['LuisFerllub230']}
                                typeSpeed={500}
                            />
                        </h1>
                        <br />
                        <IconBackGround
                        />
                        <Figure
                        />
                    </div>
                    <div className='howIam-container col-12 mt-5'>
                        <HowIam
                        />
                    </div>
                    <div className='Project-container'>
                        <Project/>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default Main;