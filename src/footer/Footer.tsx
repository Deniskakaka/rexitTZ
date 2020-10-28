import React from 'react';

const Footer = () => {
    const phone = require('../img/phone.png').default;
    const mapMarker = require('../img/map-marker.png').default;
    const links = require('../img/links.png').default;
    const pinterest = require('../img/pinterest.png').default;
    const facebook = require('../img/facebook.png').default;
    const google = require('../img/google.png').default;

    return (
        <footer className='footer'>
            <div className='footer__phone'>
                <span><img src={phone} alt='phone' />phone</span>
                <span>+43 ( 987 ) 345 - 6782</span>
            </div>
            <div className='footer__adress'>
                <span><img src={mapMarker} alt='mapMarker' />Address</span>
                <p>
                    Cracker Inc.
                    10 Cloverfield Lane
                    Berlin, IL 10928
                    Germany
                </p>
            </div>
            <div className='footer__links'>
                <span><img src={links} alt='link' />Share us</span>
                <div>
                    <span><img src={pinterest} alt='pinterest' /><a href='#'>https://www.pinterest.com/</a></span>
                    <span><img src={facebook} alt='facebook' /><a href='#'>https://www.facebook.com/</a></span>
                    <span><img src={google} alt='google' /><a href='#'>https://www.google.com/</a></span>
                </div>
            </div>
        </footer>
    )
};

export default Footer;