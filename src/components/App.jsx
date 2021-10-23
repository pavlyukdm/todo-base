import TodoList from "./TodoList";
import AppHeader from "./AppHeader";
import SearchPanel from "./SearchPanel";

const App = () => {
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    );
};

export default App;
