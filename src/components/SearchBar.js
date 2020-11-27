import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.runMeWhenUserSubmits(this.state.term);
  };

  onInputClick() {
    console.log("Input was clicked");
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={(event) => this.onFormSubmit(event)} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onClick={()=> this.onInputClick()}
              onChange={(e) =>
                this.setState({ term: e.target.value.toUpperCase() })
              }
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
