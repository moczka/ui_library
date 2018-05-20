import React from 'react';
import PropTypes from 'prop-types';
import cx from '_utilities/classnames';
import Image from '_components/Image/Image';
import Lightbox from 'react-image-lightbox';
import { Carousel } from 'react-bootstrap';
import './Slideshow.scss';


class Slideshow extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      isPreviewOpen: false,
      activeIndex: 0,
      direction: 'next'
    };
    this.handleSelect = (selectedPhoto, event) => {
      this.setState({activeIndex: selectedPhoto, direction: event.direction});
    };
    this.togglePreview = () => {
      if (!this.props.allowPreview) return;
      this.setState(prevState => ({isPreviewOpen: !prevState.isPreviewOpen}));
    };
  }

  render() {

    const { activeIndex, isPreviewOpen, direction} = this.state;
    const {photos, resolution, height, fullHeight, fullWidth, isResponsive} = this.props;
    const activePhoto = photos[activeIndex][resolution] || photos[activeIndex];

    return (
      <div className={cx("Slideshow", {
        "Slideshow--responsive": isResponsive
      })}>
        <Carousel
          activeIndex={activeIndex}
          direction={direction}
          onSelect={this.handleSelect}
          indicators={this.props.showIndicators}
        >
        {photos.length ? (
          photos.map((photoData, index) => {
            const photo = photoData[resolution] || photoData;
            return (
              <Carousel.Item key={`${photo.id}-${index}`} direction={direction}>
                <div className="Slideshow-imageWrapper" onClick={this.togglePreview}>
                  <Image alt={photo.title} src={photo.src} height={photo.height} width={photo.width} fullHeight={fullHeight} fullWidth={fullWidth}/>
                </div>
                {this.props.showCaption && (
                  <Carousel.Caption>
                    <h3>{photo.title}</h3>
                    {photo.description && (
                      <p>{photo.description}</p>
                    )}
                  </Carousel.Caption>
                )}
              </Carousel.Item>
          );
        })) : (
          <div className="Slideshow is-loading">Slideshow is loading your images!</div>
        )}
        </Carousel>
        {isPreviewOpen && (
          <Lightbox
            mainSrc={activePhoto.src}
            onCloseRequest={this.togglePreview}
          />
        )}
      </div>
    );
  }
}

Slideshow.defaultProps = {
  resolution: 'medium',
  height: 500,
  showIndicators: true,
  allowPreview: true,
  showCaption: true,
  fullHeight: false,
  fullWidth: false,
  isResponsive: false
};

Slideshow.propTypes = {
  fullWidth: PropTypes.bool,
  fullHeight: PropTypes.bool,
  resolution: PropTypes.oneOf(['original', 'medium', 'small', 'large']),
  showIndicators: PropTypes.bool,
  isResponsive: PropTypes.bool,
  showCaption: PropTypes.bool,
  allowPreview: PropTypes.bool,
  height: PropTypes.number,
  photos: PropTypes.arrayOf(PropTypes.shape({src: PropTypes.string, alt: PropTypes.string})).isRequired,
}

export default Slideshow;