import React from 'react';
import PropTypes from 'prop-types';

const ButtonLoadMore = ({ onClickLoadMore }) => {
  return (
    <button className="Button" type="button" onClick={onClickLoadMore}>
      Load more
    </button>
  );
};

export default ButtonLoadMore;

ButtonLoadMore.propTypes = {
  onClickLoadMore: PropTypes.func.isRequired,
};
