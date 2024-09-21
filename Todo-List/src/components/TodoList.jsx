import Item from "./Item";
import { useContext } from "react";
import { todoItemsContext} from "../store/TodoItems-store";

const TodoList = () => {
    const {todoItems} = useContext(todoItemsContext);
    return (
        <div className="container text-center">
            {todoItems.map((item) => (
                <Item item={item} key={item.TodoName}></Item>
            ))}
        </div>
    )
};

export default TodoList;