import * as ReactDOM from "react-dom";

const App = () => {
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    )
};

const AppHeader = () => {
    return <h1>Todo List</h1>;
};

const SearchPanel = () => {
    return <input placeholder="search"/>;
};

const TodoList = () => {
  return (
      <ul>
          <li>Learn react</li>
          <li>Build App</li>
      </ul>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
