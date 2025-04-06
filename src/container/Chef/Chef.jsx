import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="chef's Word" />
      <h className="headtext__cormorant">What we believe in</h>

      <div className="app__chef-content">
        <div className="app__chef-content_quota">
          <img src={images.quote} alt="qoute" />
          <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci alias ad perferendis excepturi, eius tempore veritatis labore, </p>
        </div>
        <p className="p__opensans">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione labore sunt quo facere voluptates praesentium ipsum, vel, porro tenetur, culpa dignissimos quasi ullam! Fuga quam debitis nemo eos dolor quis.</p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
