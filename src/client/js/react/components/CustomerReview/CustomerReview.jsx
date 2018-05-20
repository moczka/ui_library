import React from 'react';
import ReviewStars from '_components/ReviewStars/ReviewStars';
import PropTypes from 'prop-types';
import cx from '_utilities/classnames';
import './CustomerReview.scss';

const NUM_OF_STARS = 5;

const Review = props => {
  const {date, customerName, comment, stars} = props;
  return (
    <div className={cx("CustomerReview")}>
      <div className="CustomerReview-infoWrap">
        <span className="CustomerReview-date">{date}</span>
        <div className="CustomerReview-stars">
          <ReviewStars current={stars} total={NUM_OF_STARS} />
        </div>
      </div>
      <p className="CustomerReview-comment">
        {comment}
      </p>
      <span className="CustomerReview-name">{customerName}</span>
    </div>
  );
};

Review.propTypes = {
  date: PropTypes.string.isRequired,
  customerName: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired
};

export default Review;