import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });

    console.log(this); // now this refers to the class App
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar runMeWhenUserSubmits={(term) => this.onSearchSubmit(term)} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
