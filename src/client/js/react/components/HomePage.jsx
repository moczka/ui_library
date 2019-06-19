import React from 'react';
import PropTypes from 'prop-types';
import './HomePage.scss';
import Image from '_library/Image/Image';
import data from '_data/rawData';

const HomePage = props => {
  return (
    <div className="">
      Testing....
      {data.images.map(image => (
        <div key={image.id}>
          {image.name}
          <div style={{display:`inline-block`, width: 400}}>
            <Image {...image} alt={image.name}/>
          </div>
        </div>
      ))}
    </div>
  );
};

HomePage.propTypes = {
  images: PropTypes.array
};

export default HomePage;