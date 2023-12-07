import React, { Component } from 'react';
import pets from '../data/pets.json'
import arrow from '../img/Arrow.svg'

class Slider extends Component {
    constructor(props) {
        super(props)
        this.gapChanger = this.gapChanger.bind(this)
        this.arrowLeft = this.arrowLeft.bind(this)
        this.arrowRight = this.arrowRight.bind(this)
    }
    componentDidMount() {
        this.gapChanger();
        window.addEventListener("resize", this.gapChanger);
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
                            <div className='slider__card' key={el.id} >
                                <img src={el.img} alt='' className='pets__picture' />
                                <p className='pets__name'>{el.name}</p>
                                <button className='pets__learnmore'>Learn More</button>
                            </div>
                        ))}
                    </div>
                </div>
                <button className='slider__button slider__button--right' onClick={this.arrowRight} ><img src={arrow} alt='' /></button>
            </div>
        );
    }
    
    gapChanger() {
        let containerWidth = document.querySelector("div.slider__container").offsetWidth;
        let amountOfCards = Math.floor(containerWidth / 270);
        if (containerWidth >= 270) {
            if (amountOfCards > 1) {
                let gap = (containerWidth - (amountOfCards * 270)) / (amountOfCards - 1);
                document.querySelector("div.slider__content").style.gap = `${gap}px`;
                document.querySelectorAll("div.slider__card").forEach((el) => { el.style.margin = `0px 0px` });
            } else {
                let gap = containerWidth - (amountOfCards * 270)
                let margin = gap / 2;
                document.querySelector("div.slider__content").style.gap = "0px";
                document.querySelectorAll("div.slider__card").forEach((el) => { el.style.margin = `0px ${margin}px` });
            }
        }
    }
    arrowLeft() {
        let arrow = document.querySelector("button.slider__button--left");
        let content = document.querySelector("div.slider__content");
        let card = document.querySelector("div.slider__card");
        if (content.offsetLeft === 0 || content.offsetLeft <= card.offsetWidth) {
            arrow.setAttribute("disabled", "disabled")
        } else {
            console.error("CODE IN PROGRESS...")
        }
    }
    arrowRight() {
        let arrow = document.querySelector("button.slider__button--right");
        let content = document.querySelector("div.slider__content");
        let card = document.querySelector("div.slider__card");
        let containerWidth = document.querySelector("div.slider__container").offsetWidth;
        let amountOfCards = Math.floor(containerWidth / 270);
        let gap = parseFloat(getComputedStyle(content).gap);
        let margin = parseFloat(getComputedStyle(card).marginLeft);
        if (amountOfCards > 1) {
            var limit = content.offsetWidth - (card.offsetWidth * (amountOfCards + 2) + gap * (amountOfCards - 1));
            var step = card.offsetWidth + gap;
        } else {
            limit = content.offsetWidth - (card.offsetWidth + margin);
            step = card.offsetWidth + margin * 2;
        }
        let left = content.offsetLeft - step;

        content.style.left = `${left}px`

        if (content.offsetLeft <= -limit) {
            arrow.setAttribute("disabled", "disabled")
        } else {
            document.querySelector("button.slider__button--left").removeAttribute("disabled", "disabled");
        }
    }
}

export default Slider;