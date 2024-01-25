import React, { Component } from 'react';
import axios from 'axios';

import Searchbar from './Searchbar/Searchbar.jsx';
import ImageGallery from './ImageGallery/ImageGallery.jsx';

class App extends Component {
  apiKey = '41114633-51106070bf303d1c44ed5d4b9';
  url = 'https://pixabay.com/api/';

  constructor() {
    super();

    this.state = {
      currentSearchInput: '',
      imagesToRender: '',
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentSearchInput !== this.state.currentSearchInput) {
      console.log(this.state.currentSearchInput);

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
          this.setState({ imagesToRender: res.data.hits });
        });
    }
  }

  handleImageSearch = e => {
    e.preventDefault();

    const userSearchInput = e.target[1].value;
    this.setState({ currentSearchInput: userSearchInput });
  };
  render() {
    return (
      <>
        <Searchbar handleImageSearch={this.handleImageSearch} />
        <ImageGallery imagesToRender={this.state.imagesToRender} />
      </>
    );
  }
}

export default App;
