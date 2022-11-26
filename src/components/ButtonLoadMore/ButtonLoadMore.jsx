import React from 'react';

const ButtonLoadMore = ({ onClickLoadMore }) => {
  return (
    <button className="Button" type="button" onClick={onClickLoadMore}>
      Load more
    </button>
  );
};

export default ButtonLoadMore;
