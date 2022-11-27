import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

import { ImageGalleryList } from './ImageGallery.styled';

export default class ImageGallery extends Component {
  static propTypes = {
    photos: PropTypes.array.isRequired,
  };

  render() {
    return (
      <>
        <ImageGalleryList>
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
        </ImageGalleryList>
      </>
    );
  }
}
