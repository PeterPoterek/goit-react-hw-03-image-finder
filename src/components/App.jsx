import React, { Component } from 'react';
import axios from 'axios';

import Searchbar from './Searchbar/Searchbar.jsx';
import ImageGallery from './ImageGallery/ImageGallery.jsx';
import Button from './Button/Button.jsx';

class App extends Component {
  apiKey = '41114633-51106070bf303d1c44ed5d4b9';
  url = 'https://pixabay.com/api/';

  state = {
    currentSearchInput: '',
    imagesToRender: [],
    currentPage: 1,
    totalHits: 0,
  };

  handleImageSearch = e => {
    e.preventDefault();

    const userSearchInput = e.target[1].value;
    this.setState({ currentSearchInput: userSearchInput });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentSearchInput !== this.state.currentSearchInput) {
      axios
        .get(this.url, {
          params: {
            key: this.apiKey,
            q: this.state.currentSearchInput,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            page: 1,
            per_page: 12,
          },
        })
        .then(res => {
          this.setState({
            imagesToRender: res.data.hits,
            currentPage: 1,
            totalHits: res.data.totalHits,
          });
        });
    }
  }

  renderMoreImages = () => {
    const { currentSearchInput, currentPage, imagesToRender, totalHits } =
      this.state;
    const imagesPerPage = 12;

    if (currentPage * imagesPerPage < totalHits) {
      axios
        .get(this.url, {
          params: {
            key: this.apiKey,
            q: currentSearchInput,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            page: currentPage + 1,
            per_page: 12,
          },
        })
        .then(res => {
          const newImages = res.data.hits;
          const updatedImages = [...imagesToRender, ...newImages];

          this.setState({
            imagesToRender: updatedImages,
            currentPage: currentPage + 1,
          });
        });
    }
  };
  render() {
    const { imagesToRender, totalHits } = this.state;

    return (
      <>
        <Searchbar handleImageSearch={this.handleImageSearch} />
        <ImageGallery imagesToRender={imagesToRender} />
        {imagesToRender.length > 0 && imagesToRender.length < totalHits && (
          <Button renderMoreImages={this.renderMoreImages} />
        )}
      </>
    );
  }
}

export default App;
