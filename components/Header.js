import React, { Component } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pets: 0,
            help: 0,
            contacts: 0
        }
        this.headerScroll = this.headerScroll.bind(this)
    }
    componentDidMount() {
        this.setState({ pets: document.querySelector("section.pets").getBoundingClientRect().y + window.scrollY - 150 })
        this.setState({ help: document.querySelector("section.help").getBoundingClientRect().y + window.scrollY - 150 })
        this.setState({ contacts: document.querySelector("section.donation").getBoundingClientRect().y + window.scrollY - 150 })
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



        if (window.scrollY <= this.state.pets) {
            document.querySelectorAll("p.navigation__element").forEach(element => {
                element.classList.remove("active");
            });
            document.querySelector("p#navigation0").classList.add("active");
        } else if (window.scrollY >= this.state.pets && window.scrollY <= this.state.help) {
            document.querySelectorAll("p.navigation__element").forEach(element => {
                element.classList.remove("active");
            });
            document.querySelector("p#navigation1").classList.add("active");
        } else if (window.scrollY >= this.state.help && window.scrollY <= this.state.contacts) {
            document.querySelectorAll("p.navigation__element").forEach(element => {
                element.classList.remove("active");
            });
            document.querySelector("p#navigation2").classList.add("active");
        } else {
            document.querySelectorAll("p.navigation__element").forEach(element => {
                element.classList.remove("active");
            });
            document.querySelector("p#navigation3").classList.add("active");
        }
    }
}

export default Header;
