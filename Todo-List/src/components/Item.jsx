import { TiDelete } from "react-icons/ti";
import { useContext } from "react";
import { todoItemsContext } from "../store/TodoItems-store";

const Item = ({ item }) => {
    const { deleteItem } = useContext(todoItemsContext);
    return (
        <div className="row todoItem">
            <div className="col-6 todoContent">{item.TodoName}</div>
            <div className="col-4 todoContent">{item.TodoDate}</div>
            <div className="col-2"><button className="btn btn-danger" onClick={() => deleteItem(item.TodoName)}><TiDelete /></button></div>
        </div>
    )
};

export default Item;