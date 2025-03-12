import TodoList from "./components/TodoList/TodoList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Todo List</h1>
      </header>
      <TodoList />
    </div>
  );
}

export default App;
