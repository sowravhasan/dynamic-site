import React from 'react';
import images from '../../assets/logo.png';

const Logo = () => {
    return (
        <div>
            <img src={images} alt="" className='max-w-full w-[200px]'/>
        </div>
    );
};

export default Logo;