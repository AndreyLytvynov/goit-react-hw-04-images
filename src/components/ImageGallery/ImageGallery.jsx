import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

export default class ImageGallery extends Component {
  static propTypes = {
    photos: PropTypes.array.isRequired,
  };

  render() {
    return (
      <>
        <ul className="ImageGallery">
          {this.props.photos.map(({ id, webformatURL, largeImageURL }) => {
            return (
              <ImageGalleryItem
                key={id}
                id={id}
                webFormatImg={webformatURL}
                largeImage={largeImageURL}
              />
            );
          })}
        </ul>
      </>
    );
  }
}
