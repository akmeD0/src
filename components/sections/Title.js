import React from 'react';
import FriendsBox from '../FriendsBox';
import puppy from '../../img/start-screen-puppy.png';

const Title = () => {
    return (
        <section className='friend'>
            <div className='friend__container container'>
                <FriendsBox />
                <img src={puppy} alt="Start Screen Puppy" className='friend__puppy'/>
            </div>
        </section>
    );
}

export default Title;
