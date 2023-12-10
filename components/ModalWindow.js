import React, { Component } from 'react';


class ModalWindow extends Component {
    render() {
        return (
            <div className='modal'>
                <div className='modal__container'>
                    <button className='modal__button modal__button--close' onClick={() => {
                        document.querySelector("div.modal").classList.remove("show");
                        document.querySelector("body").classList.remove("lock");
                    }}></button>
                    <img className='modal__picture' alt='' src={this.props.currentPet.img} />
                    <div className='modal__info'>
                        <div className='modal__title'>
                            <h3 className='modal__name'>{this.props.currentPet.name}</h3>
                            <p className='modal__kind'>{this.props.currentPet.kind}</p>
                        </div>
                        <p className='modal__description'>
                            {this.props.currentPet.bio}
                        </p>
                        <ul className='modal__list'>
                            <li className='modal__list--item'><span>Age:</span> {this.props.currentPet.age}</li>
                            <li className='modal__list--item'><span>Inoculations:</span> {this.props.currentPet.inoculations}</li>
                            <li className='modal__list--item'><span>Diseases:</span> {this.props.currentPet.diseases}</li>
                            <li className='modal__list--item'><span>Parasites:</span> {this.props.currentPet.parasites}</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalWindow;
