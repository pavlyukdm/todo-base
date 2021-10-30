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
    ],
    term: '',
    filter: 'all'
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
  }

  onSearch = (term) => {
    this.setState({term})
  }

  onFilterChange = (filter) => {
    this.setState({filter})
  }

  search = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => item.label.includes(term))
  }

  filter = (items, filter) => {
    switch (filter) {
      case 'all':
        return items
      case 'active':
        return items.filter(item => !item.done)
      case 'done':
        return items.filter(item => item.done)
      default:
        return items
    }

  }


  render() {
    const {todoData, term, filter} = this.state;
    const visibleItems = this.filter((this.search(todoData, term)), filter)
    const doneCount = todoData.filter((el) => el.done === true).length;
    const leftTodoCount = todoData.length - doneCount

    return (
      <div className="todo-app">
        <AppHeader done={doneCount} left={leftTodoCount}/>
        <div className="search-panel d-flex">
          <SearchPanel onSearch={this.onSearch}/>
          <ItemStatusFilter filter={filter}
                            onFilterChange={this.onFilterChange}/>
        </div>
        <TodoList
          todos={visibleItems}
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
