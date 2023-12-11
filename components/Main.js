import React, { Component } from 'react';
import Title from './sections/Title';
import About from './sections/About';
import Pets from './sections/Pets';
import Help from './sections/Help';
import Donation from './sections/Donation';

class Main extends Component {
    render() {
        return (
            <main className='main'>
                <Title />
                <About />
                <Pets />
                <Help />
                <Donation />
            </main>
        );
    }
}

export default Main;
