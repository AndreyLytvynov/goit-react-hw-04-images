import React, { Component } from 'react';

import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

export default class ImageGallery extends Component {
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
