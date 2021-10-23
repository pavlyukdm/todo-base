import TodoList from "./TodoList";
import AppHeader from "./AppHeader";
import SearchPanel from "./SearchPanel";

const App = () => {
    const todoData = [
        {id: 1, label: 'Learn React', important: true},
        {id: 2, label: 'Master Redux', important: false},
        {id: 3, label: 'Build App'},
    ]

    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList todos={todoData} />
        </div>
    );
};

export default App;
