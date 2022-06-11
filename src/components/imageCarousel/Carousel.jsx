import React, {useState} from 'react';
import classes from './Carousel.module.css'
import {FaArrowCircleRight, FaArrowCircleLeft} from "react-icons/fa"
import {images} from "./CarouselData";

const Carousel = () => {
    const [currentImg, setCurrentImg] = useState(0);
    const [nameDisplay, setNameDisplay] = useState("none");
    const [coordinates, setCoordinates] = useState({x: 0, y: 0})
    const length = images.length;

    const nextImg = () => {
        setCurrentImg(currentImg === length - 1 ? 0 : currentImg + 1);
    }

    const prevImg = () => {
        setCurrentImg(currentImg === 0 ? length - 1 : currentImg - 1);
    }

    const getImgName = () => {
        setNameDisplay("grid");
    }

    const hideImgName = () => {
        setNameDisplay("none");
    }

    const getCoordinates = (event) => {
        setCoordinates({x: event.clientX - 500, y: event.clientY - 150})
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
                            {index === currentImg && (<div>
                                <img className={classes.image} src={img.link} onMouseMove={getCoordinates}
                                     onMouseOver={getImgName} onMouseOut={hideImgName} alt="Car"/>
                                <div style={{display: nameDisplay, top: coordinates.y, left: coordinates.x}}
                                     className={classes.imageName}>
                                    <img src={img.wikiImg} alt=""/>
                                    <strong>{img.name}</strong>
                                    <p>{img.wiki}</p>
                                </div>
                            </div>)}
                        </div>

                    )
                })
            }
        </div>
    );
};

export default Carousel;