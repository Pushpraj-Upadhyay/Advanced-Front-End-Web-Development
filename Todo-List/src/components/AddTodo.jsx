import { useRef } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useContext } from "react";
import { todoItemsContext} from "../store/TodoItems-store";

const AddTodo = () => {

    const {addNewItem} = useContext(todoItemsContext);

    const newTodoName = useRef();
    const newTodoDate = useRef();

    return (
        <div className="container text-center">
            <form className="row" onSubmit={(event) => {
                event.preventDefault();
                addNewItem(newTodoName.current.value, newTodoDate.current.value);
                newTodoName.current.value = "";
                newTodoDate.current.value = "";
            }}>
                <div className="col-6"><input type="text" placeholder="Type something" ref={newTodoName} /></div>
                <div className="col-4"><input type="date" name="" id="" ref={newTodoDate} /></div>
                <div className="col-2"><button className="btn btn-info"><IoMdAddCircleOutline /></button></div>
            </form>
        </div>
    )
};

export default AddTodo;