import { useContext } from "react";
import { todoItemsContext } from "../store/TodoItems-store";

const EmptyMessage = () => {
    const {todoItems} = useContext(todoItemsContext);
    return (
        <>{todoItems.length === 0 && <h3 className="EmptyMessage">No Task remaining.</h3>}</>
    )
};

export default EmptyMessage;