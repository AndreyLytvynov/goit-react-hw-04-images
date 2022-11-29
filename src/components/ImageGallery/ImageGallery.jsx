import React from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

import { ImageGalleryList } from './ImageGallery.styled';

const ImageGallery = ({ photos }) => {
  return (
    <>
      <ImageGalleryList>
        {photos.map(({ id, webformatURL, largeImageURL }) => {
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
};

ImageGallery.propTypes = {
  photos: PropTypes.array.isRequired,
};

export default ImageGallery;
