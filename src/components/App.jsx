import React, { Component } from 'react';
import Loader from 'components/Loader/Loader';
import { animateScroll as scroll } from 'react-scroll';
import { ToastContainer } from 'react-toastify';

import { getAllPages } from 'API/imageAPI';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import ButtonLoadMore from './ButtonLoadMore/ButtonLoadMore';

class App extends Component {
  state = {
    name: '',
    photos: [],
    page: 1,
    loader: false,
    quantityPhotos: 0,
    visibleLoadMoreBtn: false,
  };

  handleFormSubmit = name => {
    this.setState({ name, page: 1, photos: [], visibleLoadMoreBtn: false });
  };

  onClickLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  scrollWindow = () => {
    if (this.state.page > 1) {
      scroll.scrollToBottom();
    }
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.name !== this.state.name ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({ loader: true, visibleLoadMoreBtn: false });

        const photos = await getAllPages(this.state.name, this.state.page);

        console.log(photos);

        this.setState(prevState => {
          const arrPhotos = [...prevState.photos, ...photos.hits];
          return {
            photos: arrPhotos,
            loader: false,
            quantityPhotos: arrPhotos.length,
            visibleLoadMoreBtn: arrPhotos.length >= photos.total ? false : true,
          };
        });

        this.scrollWindow();
      } catch (error) {
        console.log(error);
      }
    }
  }

  render() {
    const { loader, photos } = this.state;

    return (
      <>
        <SearchBar handleFormSubmit={this.handleFormSubmit} />

        <ToastContainer />

        {loader && <Loader />}

        <ImageGallery photos={photos} />

        {this.state.visibleLoadMoreBtn && (
          <ButtonLoadMore onClickLoadMore={this.onClickLoadMore} />
        )}
      </>
    );
  }
}

export default App;
