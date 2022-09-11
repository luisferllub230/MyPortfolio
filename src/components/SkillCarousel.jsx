import React, { Fragment } from 'react'
import { motion } from 'framer-motion'
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const SkillsCarousel = () => {
    return (
        <Fragment>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: [0.50, 0.90, 1], y: [50, 25, 0] }}
                viewport={{ one: true }}
                className='carousel-container-son shadow-style'
            >
                <Carousel responsive={responsive}>
                    <div className='Skills-carousel-items'>Item 1</div>
                    <div className='Skills-carousel-items'>Item 2</div>
                    <div className='Skills-carousel-items'>Item 3</div>
                    <div className='Skills-carousel-items'>Item 4</div>
                </Carousel>
            </motion.div>
        </Fragment>
    );
}

export default SkillsCarousel;