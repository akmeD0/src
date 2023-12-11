import React, { Component } from 'react';
import dog from '../../img/donation-dog.png'

class Donation extends Component {
    render() {
        return (
            <section className='donation'>
                <div className='donation__container container'>
                    <img className='donation__dog' alt='' src={dog} />
                    <div className='donation__box'>
                        <h3 className='donation__title'>You can also make a donation</h3>
                        <h5 className='donation__title donation__title--sub'>Name of the bank / Type of bank account</h5>
                        <div className='donation__card'>
                            <p className='donation__card--number'>8380 2880 8028 8791 7435</p>
                        </div>
                        <p className='donation__description'>Legal information and lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a ipsum at libero sagittis dignissim sed ac diam. Praesent ultrices maximus tortor et vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Donation;
