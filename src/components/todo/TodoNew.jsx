const TodoNew = (props) => {
    console.log("check props", props);

    const { addNewTodo } = props;
    // addNewTodo("crocodile");
    return (
        <div className="todo-new">
            <input type="text" placeholder='Enter your task' />
            <button>Add</button>
        </div>
    );
}

export default TodoNew;