import React, {Component} from "react";
import './ItemAddControl.css';

class ItemAddControl extends Component {

  render() {
    return (
      <div className="item-add-form">
        <button
          className="btn btn-outline-secondary"
          onClick={() => this.props.onItemAdded('Some text')}>
          Add  Item
        </button>
      </div>
    );
  }
}

export default ItemAddControl;
