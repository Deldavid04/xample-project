import { useState } from 'react';
import Images from './Images';

const GalleryContainer: React.FunctionComponent = () => {
  const [selectedImg, setSelectedImg] = useState(Images[0]);
  return (
    <div className='App'>
      <div className='container'>
        <img src={selectedImg} alt='Selected' className='selected' />
        <div className='imgContainer'>
          {Images.map((img, index) => (
            <img
              style={{ border: selectedImg === img ? '4px solid pink' : '' }}
              key={index}
              src={img}
              alt='food'
              onClick={() => setSelectedImg(img)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryContainer;
