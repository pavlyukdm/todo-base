import React, {Component} from "react";
import TodoList from "../TodoList";
import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import ItemStatusFilter from "../ItemStatusFilter";
import ItemAddControl from "../ItemAddControl";
import './App.css'

class App extends Component {
    state = {
        todoData: [
            {id: 1, label: 'Learn React', important: true},
            {id: 2, label: 'Master Redux', important: false},
            {id: 3, label: 'Build App', important: false},
        ]
    }

    onDeleted = (id) => {
        this.setState(({todoData}) => {
            return {todoData: todoData.filter((item) => item.id !== id)}
        })
    }

    onItemAdded = (text) => {
        const newItem = {
            id: new Date(),
            label: text,
            important: false
        }
        this.setState(({todoData}) => {
            return {todoData: [...todoData, newItem]};
        })
        console.log('click')
    }

    render() {
        return (
            <div className="todo-app">
                <AppHeader/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>
                <TodoList
                    todos={this.state.todoData}
                    onDeleted={(id) => this.onDeleted(id)}
                />
                <ItemAddControl onItemAdded={this.onItemAdded}
                />
            </div>
        );
    }
}

export default App;
