import './TodoListItem.css';
import React, { Component } from "react";

class TodoListItem extends Component {

    render() {
        const { label, important = false } = this.props;

        const style = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal',
        };

        return (
            <span className="todo-list-item">
            <span
                className="todo-list-item-label"
                style={style}
            >
                {label}
            </span>
            <span className="todo-list-item-buttons">
                <button type="button"
                        className="btn btn-outline-success btn-small">
                !
            </button><button type="button"
                             className="btn btn-outline-danger btn-small">
                X
            </button>
            </span>
        </span>

        );
    }
}

export default TodoListItem;
