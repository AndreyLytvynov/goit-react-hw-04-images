import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Modal from 'components/Modal/Modal';

import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

export default class ImageGalleryItem extends Component {
  static propTypes = {
    webFormatImg: PropTypes.string.isRequired,
    largeImage: PropTypes.string.isRequired,
  };

  state = {
    modalVisible: false,
  };

  openModal = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  };

  render() {
    return (
      <GalleryItem>
        <GalleryImage
          onClick={this.openModal}
          src={this.props.webFormatImg}
          alt=""
        />
        {this.state.modalVisible && (
          <Modal
            largeImage={this.props.largeImage}
            openModal={this.openModal}
          />
        )}
      </GalleryItem>
    );
  }
}
