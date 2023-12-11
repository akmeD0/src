import React, { Component } from 'react';
import Slider from '../Slider';
class Pets extends Component {
    render() {
        return (
            <section className='pets' id='pets'>
                <div className='pets__container container'>
                    <h3 className='pets__title'>Our friends who <br/> are looking for a house</h3>
                    <Slider modalChange={this.modalChange} />
                    <button className='pets__button'>Get to know the rest</button>
                </div>
            </section>
        );
    }
}

export default Pets;
