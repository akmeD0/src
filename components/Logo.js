import React from 'react';

const Logo = () => {
    return (
        <div className='logo' onClick={() => window.location.reload()}>
            <p className='logo__title'>Cozy House</p>
            <p className='logo__subtitle'>Shelter for pets in Boston</p>
        </div>
    );
}

export default Logo;
