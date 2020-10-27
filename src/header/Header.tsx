import React from 'react';
import './header.scss';

const Header = () => {
    const semen = require('../img/semen.png').default;
    const arrow = require('../img/arrow.png').default;
    
    return(
        <header className='header'>
                <div className='header__order-info'>
                    <ul>
                        <li><a href='#'><img src={semen} alt='semen' className='semen'/></a></li>
                        <li><span>Total:</span><span>143 €</span></li>
                        <li>
                            Details
                            <img src={arrow} alt='arrow'/>
                            <ul>
                                <li>lorem</li>
                                <li>lorem</li>
                                <li>lorem</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className='header__menu'>
                    <ul>
                        <li><a href='#'>home</a></li>
                        <li><a href='#'>about us</a></li>
                        <li><a href='#'>contacts</a></li>
                        <li><a href='#'>checkout</a></li>
                        <li><a href='#'>account</a></li>
                    </ul>
                </div>
                <div className='header__logo'>
                    <span>Cracker</span>
                </div>
        </header>
    )
};

export default Header;