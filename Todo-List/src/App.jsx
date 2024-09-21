import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TodoHeading from "./components/TodoHeading";
import AddTodo from "./components/AddTodo";
import EmptyMessage from "./components/EmptyMessage";
import TodoList from "./components/TodoList";
import TodoItemsContextProvider from './store/TodoItems-store';

function App() {

  return (
    <TodoItemsContextProvider>
      <center>
        <TodoHeading></TodoHeading>
        <AddTodo></AddTodo>
        <EmptyMessage></EmptyMessage>
        <TodoList></TodoList>
      </center>
    </TodoItemsContextProvider>
  )
}

export default App;
