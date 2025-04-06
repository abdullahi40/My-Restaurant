import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { images } from '../../constants';

import  Newsletter  from '../../components/Footer/Newsletter';
import FooterOverlay from '../../components/Footer/FooterOverlay'

import './Footer.css'

function Footer() {
  return (
    <div className='app__footer section__padding'>
      <FooterOverlay />
      <Newsletter  />
      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Contact Us</h1>
          <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
          <p className="p__opensans">+1 212-344-1230</p>
          <p className="p__opensans">+1 522-378-1539</p>
        </div>
        <div className="app__footer-links_logo">
           <img src={images.gericht} alt="afooter_logo" />
           <p className="p__opensans">The best way to find yourself is to lose youself in the service of others</p>
           <img src={images.spoon} alt="spoon" className='spoon__img' style={{marginTop: 15}} />
           <div className="app__footer-links_icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
           </div>
        </div>
        <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">ًWorking Hours</h1>
          <p className="p__opensans">Mosay-Fiday:</p>
          <p className="p__opensans">08:00am-12:00 am</p>
          <p className="p__opensans">Saturday-Sunday:</p>
          <p className="p__opensans">07:00am-11:00</p>
        </div>
      </div>
      <div className="footer__copyright">
        <p className="p__opensans">2024 Gericht. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
