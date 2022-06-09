import React, {useState} from 'react';
import classes from './Carousel.module.css'
import {FaArrowCircleRight, FaArrowCircleLeft} from "react-icons/fa"

import {images} from "./CarouselData";
import MyButton from "../UI/button/MyButton";

const Carousel = () => {
    const [currentImg, setCurrentImg] = useState(0);
    const length = images.length;
    console.log(currentImg);

    const nextImg = () => {
        setCurrentImg(currentImg === length - 1 ? 0 : currentImg + 1);
    }

    const prevImg = () => {
        setCurrentImg(currentImg === 0 ? length - 1 : currentImg - 1);
    }

    return (
        <div className={classes.mainDiv}>
            <FaArrowCircleRight className={classes.rightArrow} onClick={nextImg}/>
            <FaArrowCircleLeft className={classes.leftArrow} onClick={prevImg}/>
            {
                images.map((img, index) => {
                    return (
                        <div
                            className={index === currentImg ? classes.slideActive : classes.slide}
                            key={index}>
                            {index === currentImg && (<img className={`${classes.image}`} src={img.link} alt="Car"/>)}
                        </div>

                    )
                })
            }
        </div>
    );
};

export default Carousel;