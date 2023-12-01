import React, { Component } from 'react';
import pets from '../data/pets.json'
import arrow from '../img/Arrow.svg'

class Slider extends Component {
    render() {
        return (
            <div className='slider'>
                <button className='slider__button slider__button--left' ><img src={arrow} alt='' /></button>
                <div className='slider__container'>
                    <div className='slider__content'>
                        {pets.map((el) => (
                            <div className='slider__card' key={el.id} onClick={() => {
                                alert("ASD")
                            }}>
                                <img src={el.img} alt='' className='pets__picture' />
                                <p className='pets__name'>{el.name}</p>
                                <button className='pets__learnmore'>Learn More</button>
                            </div>
                        ))}
                    </div>
                </div>
                <button className='slider__button slider__button--right' ><img src={arrow} alt='' /></button>
            </div>
        );
    }
    componentDidMount() {
        window.addEventListener("resize", () => {
            let containerWidth = document.querySelector("div.slider__container").offsetWidth;
            let cardWidth = 270;
            let amountOfCards = Math.floor(containerWidth / cardWidth);
            let gap;
            amountOfCards > 1 ? gap = (containerWidth - (amountOfCards * cardWidth)) / (amountOfCards - 1) : gap = (containerWidth - (amountOfCards * cardWidth));
            console.log(gap)
        })
    }
}

export default Slider;
