import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Modal from 'components/Modal/Modal';

import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ webFormatImg, largeImage }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(prevState => !prevState);
  };

  return (
    <GalleryItem>
      <GalleryImage onClick={openModal} src={webFormatImg} alt="" />
      {modalVisible && <Modal largeImage={largeImage} openModal={openModal} />}
    </GalleryItem>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webFormatImg: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
};
