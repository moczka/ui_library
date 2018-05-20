import React from 'react';
import PropTypes from 'prop-types';
import cx from '_utilities/classnames';
import './ReviewStars.scss';

const loop = (times, cb) => {
  const result = [];
  for (let i=0; i<times; i++) {
    result.push(cb(i + 1));
  }
  return result;
};

const ReviewStars = props => {
  const {total, current} = props;
  return (
    <div className="ReviewStars">
      {loop(total, (index) => (
        <span key={`star-${index}`} className={cx("ReviewStars-item", {
          'glyphicon glyphicon-star': index <= current,
          'glyphicon glyphicon-star-empty': index > current
        })}/>
      ))}
    </div>
  );
};

ReviewStars.propTypes = {
  total: PropTypes.number,
  current: PropTypes.number
};

ReviewStars.defaultProps = {
  total: 5,
  current: 0
};

export default ReviewStars;