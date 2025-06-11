const TodoNew = (props) => {
    console.log("check props", props);

    const { addNewTodo } = props;
    // addNewTodo("crocodile");
    const handClick = () => {
        alert("click me")
    }

    const handOnchange = (name) => {
        console.log(">>Hand Onchange", name)
    }
    return (
        <div className="todo-new">
            <input type="text" placeholder='Enter your task'
                onChange={(event) => handOnchange(event.target.value)}
            />
            <button
                style={{ cursor: "pointer" }}
                onClick={handClick}
            >Add</button>
        </div>
    );
}

export default TodoNew;