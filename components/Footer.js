import React, { Component } from 'react';
import footerPuppy from '../img/footer-puppy.png'
import mail from '../img/icon-email.svg'
import phone from '../img/icon-phone.svg'
import marker from '../img/icon-marker.png'

class Footer extends Component {
    render() {
        return (
            <footer className='footer' id='contacts'>
                <div className='footer__container container'>
                    <div className='footer__box'>
                        <div className='footer__info'>
                            <h3 className='footer__title'>For questions <br />and suggestions</h3>
                            <a href="mailto:email@shelter.com" className='footer__text'>
                                <img src={mail} alt='' />
                                email@shelter.com
                            </a>
                            <a href="tel:+136745677554" className='footer__text'>
                                <img src={phone} alt='' />
                                +13 674 567 75 54
                            </a>
                        </div>
                        <div className='footer__info'>
                            <h3 className='footer__title'>We are waiting <br />for your visit</h3>
                            <a href="google.com" className='footer__text'>
                                <img src={marker} alt='' />
                                1 Central Street, Boston (entrance from the store)
                            </a>
                            <a href="google.com" className='footer__text'>
                                <img src={marker} alt='' />
                                18 South Park, London
                            </a>
                        </div>
                    </div>
                    <img src={footerPuppy} alt='' className='footer__puppy' />
                </div>
            </footer>
        );
    }
}

export default Footer;
