import React, { useState, useEffect } from 'react';
import Loader from 'components/Loader/Loader';
import { animateScroll as scroll } from 'react-scroll';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';

import { getAllPages } from 'API/imageAPI';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import ButtonLoadMore from './ButtonLoadMore/ButtonLoadMore';

// import PropTypes from 'prop-types';

const App = () => {
  const [name, setName] = useState('');
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [loaderVisible, setLoaderVisible] = useState(false);
  const [visibleLoadMoreBtn, setVisibleLoadMoreBtn] = useState(false);

  const handleFormSubmit = formName => {
    if (formName === name) {
      toast.warn('Please enter other name');
      return;
    }

    setName(formName);
    setPage(1);
    setPhotos([]);
    setVisibleLoadMoreBtn(false);
  };

  const onClickLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  useEffect(() => {
    if (name === '') return;

    setLoaderVisible(true);
    setVisibleLoadMoreBtn(false);

    async function fetchAPI() {
      try {
        const photos = await getAllPages(name, page);

        if (photos.total === 0) {
          toast.warn('Sorry, nothing found, please enter other name');
          setLoaderVisible(false);
          setVisibleLoadMoreBtn(false);
          return;
        }

        setPhotos(prevState => [...prevState, ...photos.hits]);

        setLoaderVisible(false);
        setVisibleLoadMoreBtn(photos.length > photos.total ? false : true);
      } catch (error) {
        console.log(error);
      }
    }

    fetchAPI();

    if (page > 1) {
      scroll.scrollToBottom();
    }
  }, [name, page]);

  return (
    <>
      <SearchBar handleFormSubmit={handleFormSubmit} />

      <ToastContainer
        position="top-center"
        autoClose={2000}
        className="foo-bar"
      />

      {loaderVisible && <Loader />}

      <ImageGallery photos={photos} />

      {visibleLoadMoreBtn && (
        <ButtonLoadMore onClickLoadMore={onClickLoadMore} />
      )}
    </>
  );
};

export default App;
