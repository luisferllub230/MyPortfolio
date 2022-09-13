import React, { Fragment } from 'react'
import Type from 'react-typed'
import "../public/styles.css"
import ImageUser from './ImgUser'
import IconBackGround from './IconBackGround'
import Figure from './Figures'
import HowIam from './HowIam'
import Project from './Project'

const Main = () => {

    const ObjectStylesFigure1PageInitial = { position: 'absolute', top: '0', left: '85%', width: '5%', height: '35%', borderRadius: '33px', borderColor: "var(--color-tertiary)", backgroundColor: "var(--color-secondary)" }
    const ObjectStylesFigure2PageInitial = { position: 'absolute', top: '0', left: '10%', width: '5%', height: '35%', borderRadius: '33px', borderColor: "var(--color-tertiary)", backgroundColor: "var(--color-secondary)" }

    const ObjectStylesFigureInside1 = { position: "absolute", width: "100%", height: "100%", top: "10%", left: "-25%", borderRadius: '33px', border: "var(--color-tertiary) solid 2px", padding: "1rem", backgroundColor: "var(--color-primary)", color: " var(--color-tertiary)" }
    const ObjectStylesFigureInside2 = { position: "absolute", width: "100%", height: "100%", top: "10%", left: "25%", borderRadius: '33px', border: "var(--color-tertiary) solid 2px", padding: "1rem", backgroundColor: "var(--color-primary)", color: " var(--color-tertiary)" }


    return (
        <Fragment>
            <section>
                <div className="row">
                    <div className="col-12 col-md-12 m-1 p-0 page-initial">
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
                            ObjectStylesFigure1={ObjectStylesFigure1PageInitial}
                            ObjectStylesFigure2={ObjectStylesFigure2PageInitial}
                            ObjectStylesFigure1Inside={ObjectStylesFigureInside1}
                            ObjectStylesFigure2Inside={ObjectStylesFigureInside2}
                        />
                    </div>
                    <div className='howIam-container col-12 mt-5'>
                        <HowIam
                        />
                    </div>
                    <div className='Project-container'>
                        <div
                            className='Project-top shadow-style'
                        >
                        </div>
                        <Figure
                            ObjectStylesFigure1={''}
                            ObjectStylesFigure2={''}
                            ObjectStylesFigure1Inside={''}
                            ObjectStylesFigure2Inside={''}
                        />
                        <div className="Project">

                            <Project />
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default Main;