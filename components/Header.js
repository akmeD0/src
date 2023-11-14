import React, { Component } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';

class Header extends Component {
    render() {
        return (
            <header className='header'>
                <div className='header__container container'>
                    <Logo />
                    <Navigation />
                    <div className='burger' onClick={() => {
                        document.querySelector("div.burger").classList.toggle("active");
                        document.querySelector("nav.navigation").classList.toggle("active");
                        document.querySelector("body").classList.toggle("lock");
                    }}><span></span></div>
                </div>
            </header>
        );
    }
}

export default Header;
