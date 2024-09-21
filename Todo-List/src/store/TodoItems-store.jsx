import { createContext } from "react";
import { useReducer } from 'react';

export const todoItemsContext = createContext([{
    todoItems: [],
    addNewItem: () => { },
    deleteItem: () => { },
}]);

const todoReducer = (currTodoItems, action) => {
    let newTodoItems = currTodoItems;
    if (action.type === 'NEW_ITEM') {
        newTodoItems = [...currTodoItems, { TodoName: action.payload.TodoName, TodoDate: action.payload.TodoDate }];
    }

    else if (action.type === 'DELETE_ITEM') {
        newTodoItems = currTodoItems.filter((item) => item.TodoName != action.payload.TodoName);
    }

    return newTodoItems;

};

const TodoItemsContextProvider = ({ children }) => {
    const [todoItems, dispatchTodoItems] = useReducer(todoReducer, []);

    const addNewItem = (TodoName, TodoDate) => {
        if (TodoName != '' && TodoDate != '') {
            const actionObj = {
                type: "NEW_ITEM",
                payload: {
                    TodoName,
                    TodoDate,
                },
            }
            dispatchTodoItems(actionObj);
        }
    };

    const deleteItem = (TodoName) => {
        const actionObj = {
            type: 'DELETE_ITEM',
            payload: {
                TodoName,
            }
        }
        dispatchTodoItems(actionObj);
    };
    return (
        <todoItemsContext.Provider value={{
            todoItems,
            addNewItem,
            deleteItem,
        }}>
            {children}
        </todoItemsContext.Provider>
    )
};

export default TodoItemsContextProvider;

