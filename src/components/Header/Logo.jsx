import React from 'react';
import images from '../../assets/logo.png';

const Logo = () => {
    return (
        <div className='flex justify-center'>
            <img src={images} alt="" className='max-w-full w-[200px] text-center'/>
        </div>
    );
};

export default Logo;