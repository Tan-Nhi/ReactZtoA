import { useState } from "react";

const TodoNew = (props) => {

    //useState hook(getter,setter)
    // const valueInput = "Crocodile";
    const [valueInput, setValueInput] = useState("Crocodile")

    const { addNewTodo } = props;

    // addNewTodo("crocodile");
    const handClick = () => {
        addNewTodo(valueInput);
        console.log("check valueInput", valueInput);

    }

    const handOnchange = (name) => {
        setValueInput(name)
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
            <div>
                My text input = {valueInput}
            </div>
        </div>
    );
}

export default TodoNew;