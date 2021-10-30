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
      {id: 1, label: 'Learn React', important: true, done: false},
      {id: 2, label: 'Master Redux', important: false, done: true},
      {id: 3, label: 'Build App', important: false, done: false},
    ]
  }

  onDeleted = (id) => {
    this.setState(({todoData}) => {
      return {todoData: todoData.filter((item) => item.id !== id)}
    })
  }

  toggleProperty = (id, prop) => {
    const idx = this.state.todoData.findIndex(el => el.id === id)
    this.setState(({todoData}) => ({
      todoData: [
        ...todoData.slice(0, idx),
        {
          ...todoData[idx],
          [prop]: !todoData[idx][prop]
        },
        ...todoData.slice(idx + 1)
      ]
    }))
  }

  onToggleImportant = (id) => {
    this.toggleProperty(id, 'important')
  }

  onToggleDone = (id) => {
    this.toggleProperty(id, 'done')
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
    const {todoData} = this.state;
    const doneCount = todoData.filter((el) => el.done === true).length;
    const leftTodoCount = todoData.length - doneCount

    return (
      <div className="todo-app">
        <AppHeader done={doneCount} left={leftTodoCount}/>
        <div className="search-panel d-flex">
          <SearchPanel/>
          <ItemStatusFilter/>
        </div>
        <TodoList
          todos={todoData}
          onDeleted={(id) => this.onDeleted(id)}
          onToggleImportant={(id) => this.onToggleImportant(id)}
          onToggleDone={(id) => this.onToggleDone(id)}
        />
        <ItemAddControl onItemAdded={this.onItemAdded}
        />
      </div>
    );
  }
}

export default App;
