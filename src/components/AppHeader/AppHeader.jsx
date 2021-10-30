import './AppHeader.css';

const AppHeader = ({ done, left }) => {
    return (
        <div className="app-header d-flex">
            <h1>Todo List</h1>
            <h2>{left} more to do, {done} done</h2>
        </div>
    );
};

export default AppHeader;
