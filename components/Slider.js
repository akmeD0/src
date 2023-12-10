import React, { Component } from 'react';
import pets from '../data/pets.json'
import arrow from '../img/Arrow.svg'
import ModalWindow from './ModalWindow';

class Slider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalPet: 0
        }
        this.gapChanger = this.gapChanger.bind(this)
        this.arrowLeft = this.arrowLeft.bind(this)
        this.arrowRight = this.arrowRight.bind(this)
        this.changeLeft = this.changeLeft.bind(this)
    }
    componentDidMount() {
        this.gapChanger();
        window.addEventListener("resize", this.gapChanger);
        window.addEventListener("resize", this.changeLeft);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.gapChanger);
        window.removeEventListener("resize", this.changeLeft);
    }
    render() {
        return (
            <div className='slider'>
                <button className='slider__button slider__button--left' onClick={this.arrowLeft} ><img src={arrow} alt='' /></button>
                <div className='slider__container'>
                    <div className='slider__content'>
                        {pets.map((el) => (
                            <div className='slider__card' key={el.id} onClick={() => {
                                this.setState({ modalPet: el.id })
                                document.querySelector("div.modal").classList.add("show");
                                document.querySelector("body").classList.add("lock");
                            }}>
                                <img src={el.img} alt='' className='pets__picture' />
                                <p className='pets__name'>{el.name}</p>
                                <button className='pets__learnmore'>Learn More</button>
                            </div>
                        ))}
                    </div>
                </div>
                <button className='slider__button slider__button--right' onClick={this.arrowRight} ><img src={arrow} alt='' /></button>
                <ModalWindow currentPet={pets[this.state.modalPet]} />
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
        let container = document.querySelector("div.slider__container");
        let content = document.querySelector("div.slider__content");
        let card = document.querySelector("div.slider__card");
        let amountOfCards = Math.floor(container.offsetWidth / 270);
        let gap = parseFloat(getComputedStyle(content).gap);
        let margin = parseFloat(getComputedStyle(card).marginLeft);

        let step = amountOfCards > 1 ? card.offsetWidth + gap : card.offsetWidth + margin * 2;
        let left = content.offsetLeft + step;

        if (content.offsetLeft <= -card.offsetWidth) {
            content.style.left = `${left}px`;
        }

        content.offsetLeft >= -card.offsetWidth * 2 ? arrow.disabled = true : document.querySelector("button.slider__button--right").disabled = false;
    }
    arrowRight() {
        let arrow = document.querySelector("button.slider__button--right");
        let content = document.querySelector("div.slider__content");
        let card = document.querySelector("div.slider__card");
        let containerWidth = document.querySelector("div.slider__container").offsetWidth;
        let amountOfCards = Math.floor(containerWidth / 270);
        let gap = parseFloat(getComputedStyle(content).gap);
        let margin = parseFloat(getComputedStyle(card).marginLeft);

        let step = amountOfCards > 1 ? card.offsetWidth + gap : card.offsetWidth + margin * 2;
        let limit = amountOfCards > 1 ? content.offsetWidth - (card.offsetWidth * (amountOfCards + 2) + gap * (amountOfCards - 1)) : content.offsetWidth - (card.offsetWidth * 3 + margin * 2);
        let left = content.offsetLeft - step;

        content.style.left = `${left}px`
        content.offsetLeft <= -limit ? arrow.disabled = true : document.querySelector("button.slider__button--left").disabled = false;
    }
    changeLeft() {
        let content = document.querySelector('div.slider__content');
        let card = document.querySelector('div.slider__card');
        let containerWidth = document.querySelector('div.slider__container').offsetWidth;
        let amountOfCards = Math.floor(containerWidth / 270);
        let gap = parseFloat(getComputedStyle(content).gap);
        let margin = parseFloat(getComputedStyle(card).marginLeft);

        if (amountOfCards > 1) {
            var step = card.offsetWidth + gap;
        } else {
            step = card.offsetWidth + margin * 2;
        }

        let left = -step * Math.floor(content.offsetLeft / -step);

        content.style.left = `${left}px`;
    }
}

export default Slider;