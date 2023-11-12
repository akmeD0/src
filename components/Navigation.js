import React, { Component } from 'react';

class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            List: [
                {
                    id: 0,
                    text: "About the shelter"
                },
                {
                    id: 1,
                    text: "Our pets"
                },
                {
                    id: 2,
                    text: "Help the shelter"
                },
                {
                    id: 3,
                    text: "Contacts"
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
                {this.state.List.map((el) => (
                    <p className='navigation__element' id={"navigation"+el.id} key={el.id} onClick={(ev) => {
                        document.querySelectorAll("p.navigation__element").forEach(element => {
                            element.classList.remove("active");
                        });
                        ev.target.classList.add("active")
                    }}>{el.text}</p>
                ))}
            </nav>
        );
    }
}

export default Navigation;
