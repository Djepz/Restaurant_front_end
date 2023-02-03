import React, { useRef } from 'react';
import {images} from '../../constants'
import { SubHeading } from '../../components';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import './Gallery.css';

const imgs = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

const Gallery = () => {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    const {current} = scrollRef

    if(direction === 'left') {
      current.scrollLeft -= 300
    } else {
      current.scrollLeft +=300
    }
  }
  
  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button type="button" className="custom__button">View More</button>
      </div>
      <div className="app__gallery-imgs">
        <div className="app__gallery-imgs_container" ref={scrollRef}>
          {imgs.map((image, index) => (
            <div className="app__gallery-imgs_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_img" />
              <BsInstagram className="gallery__img-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-imgs_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
