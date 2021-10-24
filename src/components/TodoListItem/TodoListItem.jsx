import './TodoListItem.css';
import React, { Component } from "react";

class TodoListItem extends Component {

    state = {
        done: false
    }

    handleLabelClick = () => {
        this.setState({
            done: true
        })
    }

    render() {
        const { label, important = false } = this.props;
        const { done } = this.state;

        const style = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal',
        };

        let classes = "todo-list-item";
        if (done) {
            classes += " done"
        }

        return (
            <span className={classes}>
            <span
                className="todo-list-item-label"
                style={style}
                onClick={this.handleLabelClick}
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
