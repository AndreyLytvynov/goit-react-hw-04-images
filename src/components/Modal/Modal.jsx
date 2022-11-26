import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    if (e.target.className !== 'Overlay') return;
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
      <div className="Overlay" onClick={this.clickOverlay}>
        <img className="Modal" src={this.props.largeImage} alt="" />
      </div>
    );
  }
}
