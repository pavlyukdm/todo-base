import './TodoListItem.css';
import React, { Component } from "react";

class TodoListItem extends Component {

    state = {
        done: false,
        important: false
    }

    handleLabelClick = () => {
        this.setState((state) => ({
            done: !state.done
        }));
    }

    handleMarkImportantClick = () => {
        this.setState((state) => ({
            important: !state.important
        }));
    }

    render() {
        const { label } = this.props;
        const { done, important } = this.state;

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
                onClick={this.handleLabelClick}
            >
                {label}
            </span>
            <span className="todo-list-item-buttons">
                <button type="button"
                        className="btn btn-outline-success btn-small"
                        onClick={this.handleMarkImportantClick}>
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
