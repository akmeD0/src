import React from 'react';
import pets from '../data/pets.json'
import arrow from '../img/Arrow.svg'

const Slider = () => {
    return (
        <div className='slider'>
            <button className='slider__button slider__button--left' onClick={() => {
                let card = document.querySelector("div.slider__card");
                let container = document.querySelector("div.slider__content");
                let left = container.offsetLeft;
                let step = card.offsetWidth + parseInt(getComputedStyle(container).gap);
                left = container.offsetLeft + step
                container.style.left = `${left}px`;
                if (left <= -card.offsetWidth) {
                    document.querySelector("button.slider__button--right").removeAttribute("disabled", "disabled")
                } else {
                    document.querySelector("button.slider__button--left").setAttribute("disabled", "disabled")
                }
            }}><img src={arrow} alt='' /></button>
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
            <button className='slider__button slider__button--right' onClick={() => {
                let card = document.querySelector("div.slider__card");
                let container = document.querySelector("div.slider__content");
                let left = container.offsetLeft;
                let step = card.offsetWidth + parseInt(getComputedStyle(container).gap);
                left = container.offsetLeft - step
                container.style.left = `${left}px`;
                if (left >= - ((pets.length - 2) * 270)) {
                    document.querySelector("button.slider__button--left").removeAttribute("disabled", "disabled")
                } else {
                    document.querySelector("button.slider__button--right").setAttribute("disabled", "disabled")
                }
            }}><img src={arrow} alt='' /></button>
        </div>
    );
}

export default Slider;