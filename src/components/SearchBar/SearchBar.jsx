import React, { Component } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { toast } from 'react-toastify';
import '../../../node_modules/react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import { StyledSearchBar } from './SearchBar.styled';

export default class SearchBar extends Component {
  static propTypes = {
    handleFormSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
  };

  onChange = e => {
    this.setState({ name: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    if (this.state.name.trim() === '') {
      toast.warn('Please enter image title  ');
      return;
    }

    this.props.handleFormSubmit(this.state.name);
  };

  render() {
    return (
      <>
        <StyledSearchBar className="Searchbar">
          <form onSubmit={this.onSubmit} className="SearchForm">
            <button type="submit" className="SearchForm-button">
              <AiOutlineSearch fill="rgb(143, 140, 140)" size="30px" />
            </button>

            <input
              placeholder="Search images and photos"
              className="SearchForm-input"
              type="text"
              value={this.state.name}
              name={this.state.name}
              onChange={this.onChange}
            />
          </form>
        </StyledSearchBar>
      </>
    );
  }
}
