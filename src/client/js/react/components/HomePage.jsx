import React from 'react';
import PropTypes from 'prop-types';
import cx from '_utilities/classnames';
import './HomePage.scss';

export const HomePage = props => {
  const {images} = props;
  return (
    <div className="">
      Testing....
      {images.map(image => (
        <p>
          {image.name}
          <img src={image.src} />
        </p>
      ))}
    </div>
  );
};

HomePage.propTypes = {
  images: PropTypes.array
};