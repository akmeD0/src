import React from 'react';
import pets from '../data/pets.json'
import LearnMoreButton from './LearnMoreButton';

const Slider = () => {
    return (
        <div className='slider'>
            <button className='slider__button slider__button--left'></button>
            <div className='slider__container'>
                <div className='slider__content'>
                    {pets.map((el) => (
                        <div className='slider__card' key={el.id}>
                            <p className='pets__name'>{el.name}</p>
                            <LearnMoreButton />
                        </div>
                    ))}
                </div>
            </div>
            <button className='slider__button slider__button--right' onClick={() => {
                let card = document.querySelector("div.slider__card");
                let container = document.querySelector("div.slider__content");
                let left = container.offsetLeft;
                let step = card.offsetWidth + 90;
                (left >= -((pets.length - 2) * 270)) ? left = container.offsetLeft - step : left = 0;
                container.style.left = `${left}px`;
            }}>asd</button>
        </div>
    );
}

export default Slider;
