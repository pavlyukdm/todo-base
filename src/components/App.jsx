import TodoList from "./TodoList";
import AppHeader from "./AppHeader";
import SearchPanel from "./SearchPanel";
import './App.css'
import ItemStatusFilter from "./ItemStatusFilter";

const App = () => {
    const todoData = [
        {id: 1, label: 'Learn React', important: true},
        {id: 2, label: 'Master Redux', important: false},
        {id: 3, label: 'Build App'},
    ]

    return (
        <div className="todo-app">
            <AppHeader />
            <div className="search-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>
            <TodoList todos={todoData} />
        </div>
    );
};

export default App;
