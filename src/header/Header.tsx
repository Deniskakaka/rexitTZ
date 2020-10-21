import React from 'react';
import './header.scss';

const Header = () => {
    const semen = require('../img/semen.png').default;
    const arrow = require('../img/arrow.png').default;
    
    return(
        <header>
            <div className='header-top'>
                <div className='header-top__orderInfo'>
                    <ul>
                        <li>
                            <a href="#">
                                <img src={semen} alt='semen'/>
                            </a>
                        </li>
                        <li>
                            <span>TOTAL: 143$</span>
                        </li>
                        <li>
                            <span>DETAILS <img src={arrow} alt='arrow'/></span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='header-botton'>
                <div className='header-botton__menu'>
                   <span>Cracker</span>
                    <ul>
                        <a href="#"><li>Home</li></a>
                        <a href="#"><li>ABOUT US</li></a>
                        <a href="#"><li>Contacts</li></a>
                        <a href="#"><li>Checkout</li></a>
                        <a href="#"><li>Account</li></a>
                    </ul> 
                </div>
            </div>
        </header>
    )
};

export default Header;