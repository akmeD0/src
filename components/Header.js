import React, { Component } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';

class Header extends Component {
    constructor(props) {
        super(props)
        this.headerScroll = this.headerScroll.bind(this)
    }
    componentDidMount() {
        window.addEventListener("scroll", this.headerScroll)
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.headerScroll)
    }

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

    headerScroll() {
        if (window.scrollY >= document.querySelector("section.friend").offsetHeight - 90) {
            document.querySelector("header.header").classList.add("active");
        } else {
            document.querySelector("header.header").classList.remove("active");
        }
    }
}

export default Header;
