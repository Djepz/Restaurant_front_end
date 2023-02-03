import React from 'react';
import {images, data} from '../../constants'
import { SubHeading } from '../../components';
import './Laurels.css';

const AwardCard = ({award:{imgUrl, title, subtitle}}) => (
  <div className='app__laurels-awards_card'>
    <img src={imgUrl} alt="award" />
    <div className='app__laurels-award_card-content'>
      <p className='p__cormorant' style={{color: '#DCCA7'}}>{title}</p>
      <p className='p__cormorant' >{subtitle}</p>
    </div>
  </div>
)

const Laurels = () => (
  <div className='app__bg app__wrapper section__padding' id='awards'>
    <div className='app__wrapper_info'>
      <SubHeading title='Awards & Recognition'/>
      <h1 className='headtext__cormorant'>Our Laurels</h1>
      <div className='app__laurels-awwards'>
        {data.awards.map((award) => <AwardCard award={award} key={award.title}/>)}
      </div>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.laurels} alt='laures'/>
    </div>
  </div>
);

export default Laurels;
