import React, {Component} from "react";
import './ItemAddControl.css';

class ItemAddControl extends Component {

  state = {
    input: ''
  }

  onInputChange = (e) => {
    this.setState({
      input: e.target.value,
    })
  }

  onSubmitForm = (e) => {
    e.preventDefault()
    this.props.onItemAdded(this.state.input);
    this.setState({
      input: ''
    })
  }

  render() {
    return (
      <form className="item-add-form d-flex"
            onSubmit={this.onSubmitForm}>
        <input type="text"
               className="form-control"
               onChange={this.onInputChange}
               placeholder="type new todo here"
               value={this.state.input}/>
        <button className="btn btn-outline-secondary">
          Add Item
        </button>
      </form>
    );
  }
}

export default ItemAddControl;
