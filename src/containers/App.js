import React, { Component } from "react";
import "../assets/css/App.min.css";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import ImageCard from "../components/ImageCard";
class App extends Component {
  state = {
    searchKetword: "",
    imageData: []
  };

  inputChangeHandler = event => {
    const searchValue = event.target.value;
    this.setState({ searchKetword: searchValue });
  };

  formSubmitHandler = event => {
    event.preventDefault();
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: { query: this.state.searchKetword },
        headers: {
          Authorization:
            "Client-ID f3f95c2a970cf32315f88d54860d7ca8d00f782fe39ddabf292ae8e2a0e086b7"
        }
      })
      .then(response => {
        this.setState({ imageData: response.data.results });
        console.log(this.state.imageData);
      });
  };

  render() {
    return (
      <div className="main__wrapper">
        <SearchBar
          handleChange={this.inputChangeHandler}
          handleSubmit={this.formSubmitHandler}
        />
        <ImageCard images={this.state.imageData} />
      </div>
    );
  }
}

export default App;
