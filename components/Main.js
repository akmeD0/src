import React, { Component } from 'react';
import Title from './sections/Title';
import About from './sections/About';
import Pets from './sections/Pets';

class Main extends Component {
    render() {
        return (
            <main className='main'>
                <Title />
                <About />
                <Pets />
            </main>
        );
    }
}

export default Main;
