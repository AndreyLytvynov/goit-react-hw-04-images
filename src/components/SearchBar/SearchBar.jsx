import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { toast } from 'react-toastify';
import '../../../node_modules/react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import { StyledSearchBar } from './SearchBar.styled';
import { useState } from 'react';

const SearchBar = ({ handleFormSubmit }) => {
  const [name, setName] = useState('');

  const onChange = e => {
    setName(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    if (name.trim() === '') {
      toast.warn('Please enter image title  ');
      return;
    }

    handleFormSubmit(name);
  };

  return (
    <>
      <StyledSearchBar className="Searchbar">
        <form onSubmit={onSubmit} className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <AiOutlineSearch fill="rgb(143, 140, 140)" size="30px" />
          </button>

          <input
            placeholder="Search images and photos"
            className="SearchForm-input"
            type="text"
            value={name}
            name={name}
            onChange={onChange}
          />
        </form>
      </StyledSearchBar>
    </>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
};
