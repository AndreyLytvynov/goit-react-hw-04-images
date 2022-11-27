import React from 'react';
import PropTypes from 'prop-types';

import { LoadMore } from './ButtonLoadMore.styled';

const ButtonLoadMore = ({ onClickLoadMore }) => {
  return (
    <LoadMore type="button" onClick={onClickLoadMore}>
      Load more
    </LoadMore>
  );
};

export default ButtonLoadMore;

ButtonLoadMore.propTypes = {
  onClickLoadMore: PropTypes.func.isRequired,
};
