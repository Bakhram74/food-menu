import React from 'react';
import logo from '../../assets/images/andalusia.png'
const Header = () => {
    return (
        <div className={' h-[300px] md:h-[500px] w-full relative'}>
                <div className={'absolute w-full h-full bg-black/40  text-[#FFFFFF] pt-3 pl-3 ' }>
                    <img className={'rounded-full w-[80px] h-[60px] md:w-[110px] md:h-[90px] lg:w-[120px] md:h-[100px]'} src={logo}/>
                </div>

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