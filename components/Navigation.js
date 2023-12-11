import React, { Component } from 'react';

class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            List: [
                {
                    id: 0,
                    text: "About the shelter",
                    link: "about"
                },
                {
                    id: 1,
                    text: "Our pets",
                    link: "pets"
                },
                {
                    id: 2,
                    text: "Help the shelter",
                    link: "help"
                },
                {
                    id: 3,
                    text: "Contacts",
                    link: "contacts"
                }
            ]
        }
    }
    componentDidMount() {
        document.getElementById("navigation0").classList.add("active");
    }
    render() {
        return (
            <nav className='navigation'>
                <div className='navigation__container'>
                    {this.state.List.map((el) => (
                        <p className='navigation__element' id={"navigation"+el.id} key={el.id} onClick={(ev) => {
                            window.location.href = `#${el.link}`;
                            document.querySelector("div.burger").classList.remove("active");
                            document.querySelector("nav.navigation").classList.remove("active");
                            document.querySelector("body").classList.remove("lock");
                        }}>{el.text}</p>
                    ))}
                </div>
            </nav>
        );
    }
}

export default Navigation;
