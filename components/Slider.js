import React, { Component } from 'react';
import pets from '../data/pets.json'
import arrow from '../img/Arrow.svg'

class Slider extends Component {
    constructor(props) {
        super(props)
        this.gapChanger = this.gapChanger.bind(this)
        this.arrowLeft = this.arrowLeft.bind(this)
    }
    componentDidMount() {
        this.gapChanger()
        window.addEventListener("resize", this.gapChanger)
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.gapChanger)
    }
    render() {
        return (
            <div className='slider'>
                <button className='slider__button slider__button--left' onClick={this.arrowLeft} ><img src={arrow} alt='' /></button>
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
    
    gapChanger() {
        const cardWidth = 270;
        let content = document.querySelector("div.slider__content")
        let containerWidth = document.querySelector("div.slider__container").offsetWidth;
        let amountOfCards = Math.floor(containerWidth / cardWidth);
        let gap;
        if (containerWidth >= cardWidth) {
            if (amountOfCards > 1) {
                gap = (containerWidth - (amountOfCards * cardWidth)) / (amountOfCards - 1);
                content.style.gap = `${gap}px`;
                document.querySelectorAll("div.slider__card").forEach((el) => { el.style.margin = `0px` });
            } else {
                gap = containerWidth - (amountOfCards * cardWidth)
                let margin = gap / 2;
                content.style.gap = "0px";
                document.querySelectorAll("div.slider__card").forEach((el) => { el.style.margin = `0px ${margin}px` });
            }
        }
    }
    arrowLeft() {
        
    }
}

export default Slider;
