import React, { Component } from 'react';

import Searchbar from './Searchbar/Searchbar.jsx';
import ImageGallery from './ImageGallery/ImageGallery.jsx';

class App extends Component {
  apiKey = '41114633-51106070bf303d1c44ed5d4b9';

  constructor() {
    super();

    this.state = {
      currentSearchInput: '',
    };
  }

  handleImageSearch = e => {
    e.preventDefault();

    const userSearchInput = e.target[1].value;
    this.setState({ currentSearchInput: userSearchInput });

    console.log(this.state.currentSearchInput);
  };
  render() {
    return (
      <>
        <Searchbar handleImageSearch={this.handleImageSearch} />
        <ImageGallery />
      </>
    );
  }
}

export default App;
