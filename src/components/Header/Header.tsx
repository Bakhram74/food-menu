import React from 'react';

const Header = () => {
    return (
        <div className={' h-[150px] md:h-[200px]  w-full relative'}>
            <div className={'w-full h-full bg-center  bg-cover opacity-0.9'}
                 style={{
                     backgroundImage:
                         `url('https://res.cloudinary.com/ehizeex-shop/image/upload/v1672323737/NetflixApp/chiken_shawarma_c0ysna.jpg')`
                 }}
            ></div>
        </div>
    );
};

export default Header;