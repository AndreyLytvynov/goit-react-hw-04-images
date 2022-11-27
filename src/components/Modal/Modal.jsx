import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StyledOverlay } from './Modal.styled';

export default class Modal extends Component {
  static propTypes = {
    openModal: PropTypes.func.isRequired,
    largeImage: PropTypes.string.isRequired,
  };

  clickEsc = e => {
    if (e.code !== 'Escape') return;
    this.props.openModal();
  };
  clickOverlay = e => {
    if (e.target.tagName !== 'DIV') return;
    this.props.openModal();
  };

  componentDidMount() {
    window.addEventListener('keydown', this.clickEsc);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.clickEsc);
  }

  render() {
    return (
      <StyledOverlay onClick={this.clickOverlay}>
        <img src={this.props.largeImage} alt="" />
      </StyledOverlay>
    );
  }
}
