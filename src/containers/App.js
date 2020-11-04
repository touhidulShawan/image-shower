import React, { Component } from "react";
import "../assets/css/App.min.css";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import ImageLists from "../components/ImageLists";

class App extends Component {
  state = {
    searchKetword: "",
    imageData: [],
  };

  inputChangeHandler = (event) => {
    const searchValue = event.target.value;
    this.setState({ searchKetword: searchValue });
  };

  formSubmitHandler = (event) => {
    event.preventDefault();
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: { query: this.state.searchKetword },
        headers: {
          Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`,
        },
      })
      .then((response) => {
        this.setState({ imageData: response.data.results });
      });
  };

  render() {
    return (
      <div className="main__wrapper">
        <SearchBar
          handleChange={this.inputChangeHandler}
          handleSubmit={this.formSubmitHandler}
        />
        <ImageLists images={this.state.imageData} />
      </div>
    );
  }
}

export default App;
