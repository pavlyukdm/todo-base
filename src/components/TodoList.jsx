import TodoListItem from "./TodoListItem";

const TodoList = () => {
    const todoItems = ["Learn react", "Build App"]

    return (
        <ul>
            <li><TodoListItem label="Learn react" important /></li>
            <li><TodoListItem label="Build App" /></li>
        </ul>
    );
};

export default TodoList;
