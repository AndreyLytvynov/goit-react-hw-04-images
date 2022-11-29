import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { StyledOverlay } from './Modal.styled';

const Modal = ({ openModal, largeImage }) => {
  useEffect(() => {
    const clickEsc = e => {
      if (e.code !== 'Escape') return;
      openModal();
    };

    window.addEventListener('keydown', clickEsc);

    return () => {
      window.removeEventListener('keydown', clickEsc);
    };
  }, [openModal]);

  const clickOverlay = e => {
    if (e.target.tagName !== 'DIV') return;
    openModal();
  };

  return (
    <StyledOverlay onClick={clickOverlay}>
      <img src={largeImage} alt="" />
    </StyledOverlay>
  );
};

export default Modal;

Modal.propTypes = {
  openModal: PropTypes.func.isRequired,
  largeImage: PropTypes.string.isRequired,
};
