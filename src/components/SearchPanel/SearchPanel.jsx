import React from "react";
import './SearchPanel.css';

class SearchPanel extends React.Component {
  state = {
    term: ''
  }

  handleSearchChange = (e) => {
    const term = e.target.value
    this.setState({
      term
    })
    this.props.onSearch(term)
  }


  render() {
    return (
      <input placeholder="search"
             className="form-control search-input"
             onChange={this.handleSearchChange}
             value={this.state.input}
      />
    );
  }
}

export default SearchPanel;
