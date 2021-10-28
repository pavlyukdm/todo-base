import './TodoListItem.css';
import React, { Component } from "react";

class TodoListItem extends Component {

    render() {
        const { label, important, done, onDeleted, onToggleDone, onToggleImportant } = this.props;

        let classes = "todo-list-item";
        if (done) {
            classes += " done"
        }
        if (important) {
            classes += " important"
        }

        return (
            <span className={classes}>
            <span
                className="todo-list-item-label"
                onClick={onToggleDone}
            >
                {label}
            </span>
            <span className="todo-list-item-buttons">
                <button type="button"
                        className="btn btn-outline-success btn-small"
                        onClick={onToggleImportant}>
                !
            </button><button type="button"
                             className="btn btn-outline-danger btn-small"
                             onClick={onDeleted}>
                X
            </button>
            </span>
        </span>

        );
    }
}

export default TodoListItem;

