import React, { Fragment } from 'react'
import { motion } from 'framer-motion'
import Type from 'react-typed'
import "../public/styles.css"
import ImageUser from './ImgUser'
import IconBackGround from './IconBackGround'
import Figure from './Figures'

const Main = () => {
    return (
        <Fragment>
            <section>
                <div className="row text-white a">
                    <div className="col-12 col-md-12 page-initial">
                        <ImageUser />
                        <h1 className='text-center ps-2 border-bottom border-success border-5 pb-2'>
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
                    <div className='page-initial col-12'>
                        <div className='bg-danger '>

                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default Main;