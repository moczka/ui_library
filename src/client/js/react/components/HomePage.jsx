import React from 'react';
import PropTypes from 'prop-types';
import cx from '_utilities/classnames';
import './HomePage.scss';
import Image from '_library/Image/Image';

const HomePage = props => {
  const {images} = props;
  return (
    <div className="">
      Testing....
      {images.map(image => (
        <div key={image.id}>
          {image.name}
          <div style={{display:`inline-block`}}>
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