const TodoData = (props) => {
    //props là 1 biến object {}

    // {
    //     name: "Crocodile",
    //         age: 25,
    //             data: {}
    // }
    const { name, age, data } = props; //cách 1

    // const name = props.name; // cách 2
    // const age = props.age;
    // const data = props.data;


    // console.log("check props", props);
    return (
        <div className="todo-data">
            <div>My name {name}</div>
            <div>Learn React</div>
            <div>Watching Youtube</div>
        </div>
    );
}

export default TodoData;