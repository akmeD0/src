import React, { Component } from 'react';

class Help extends Component {
    constructor(props) {
        super(props)
        this.state = {
            information: [
                {
                    id: 0,
                    picture: "https://firebasestorage.googleapis.com/v0/b/ukrainian-culture-1.appspot.com/o/helpIcons%2Ficon-pet-food.svg?alt=media&token=63df81c5-5bdc-4300-901f-ea5da02a174c",
                    text: "Pet food"
                },
                {
                    id: 1,
                    picture: "https://firebasestorage.googleapis.com/v0/b/ukrainian-culture-1.appspot.com/o/helpIcons%2Ficon-transportation.svg?alt=media&token=89e62bbc-c522-417a-b5c6-b7ab5d9df3d3",
                    text: "Transportation"
                },
                {
                    id: 2,
                    picture: "https://firebasestorage.googleapis.com/v0/b/ukrainian-culture-1.appspot.com/o/helpIcons%2Ficon-toys.svg?alt=media&token=3191af19-3857-48f3-ac57-cd13018b5e13",
                    text: "Toys"
                },
                {
                    id: 3,
                    picture: "https://firebasestorage.googleapis.com/v0/b/ukrainian-culture-1.appspot.com/o/helpIcons%2Ficon-bowls-and-cups.svg?alt=media&token=e6ab5abd-43e3-426b-bb99-5cec1ef9be5f",
                    text: "Bowls and cups"
                },
                {
                    id: 4,
                    picture: "https://firebasestorage.googleapis.com/v0/b/ukrainian-culture-1.appspot.com/o/helpIcons%2Ficon-shampoos.svg?alt=media&token=05c12d54-e082-43ce-8f6b-05e6da6ebd20",
                    text: "Shampoos"
                },
                {
                    id: 5,
                    picture: "https://firebasestorage.googleapis.com/v0/b/ukrainian-culture-1.appspot.com/o/helpIcons%2Ficon-vitamins.svg?alt=media&token=f9646db8-eb7e-4207-8f68-53f173d29274",
                    text: "Vitamins"
                },
                {
                    id: 6,
                    picture: "https://firebasestorage.googleapis.com/v0/b/ukrainian-culture-1.appspot.com/o/helpIcons%2Ficon-medicines.svg?alt=media&token=fbf0d05e-19de-45a2-a24d-f0c370d3dba5",
                    text: "Medicines"
                },
                {
                    id: 7,
                    picture: "https://firebasestorage.googleapis.com/v0/b/ukrainian-culture-1.appspot.com/o/helpIcons%2Ficon-collars-leashes.svg?alt=media&token=d4641bf3-bfd0-481f-a272-e7e304ccba33",
                    text: "Collars / leashes"
                },
                {
                    id: 8,
                    picture: "https://firebasestorage.googleapis.com/v0/b/ukrainian-culture-1.appspot.com/o/helpIcons%2Ficon-sleeping-area.svg?alt=media&token=0a086540-1232-45d6-a236-089cffa4c3b0",
                    text: "Sleeping areas"
                }
            ]
        }
    }
    render() {
        return (
            <section className='help'>
                <div className='help__container container'>
                    <h3 className='help__title'>How you can help<br />our shelter</h3>
                    <div className='help__icons'>
                        {this.state.information.map((el) => (
                            <div className='help__element' key={el.id}>
                                <img src={el.picture} alt='' />
                                <h4>{el.text}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default Help;
