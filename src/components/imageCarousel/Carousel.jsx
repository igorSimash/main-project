import React, {useState} from 'react';
import classes from './Carousel.module.css'
import {FaArrowCircleRight, FaArrowCircleLeft} from "react-icons/fa"
import {AiFillCaretRight} from "react-icons/ai"
import {images} from "./CarouselData";

const Carousel = () => {
    const [currentImg, setCurrentImg] = useState(0);
    const [nameDisplay, setNameDisplay] = useState("none");
    const length = images.length;

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
                            {index === currentImg && (<div onMouseOver={() => setNameDisplay('grid')}
                                                           onMouseOut={() => setNameDisplay('none')}>
                                <img className={classes.image} src={img.link} alt="Car"/>
                                <div style={{display: nameDisplay}}>
                                    <AiFillCaretRight className={classes.decorTriangle}/>
                                    <AiFillCaretRight className={classes.decorTriangleBottom}/>
                                    <div style={{display: nameDisplay}}
                                         className={classes.imageDescription}
                                         onMouseOver={() => setNameDisplay('grid')}
                                         onMouseOut={() => setNameDisplay('none')}>
                                        <img src={img.wikiImg} alt=""/>
                                        <strong>{img.name}</strong>
                                        <p>{img.wikiText}</p>
                                        <a href={img.wikiURL} target="_blank">Continue reading</a>
                                    </div>
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