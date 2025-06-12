const TodoData = (props) => {
    //props là 1 biến object {}
    const { todoList } = props;


    console.log("check props", todoList);
    return (
        <div className="todo-data">
            {todoList.map((item, index) => {
                console.log("check map ", item, index)
                return (

                    <div className={`todo-item`} key={item.id}>
                        <div>{item.name}</div>
                        <button>delete</button>
                    </div>
                )
            })}

        </div>
    );
}

export default TodoData;