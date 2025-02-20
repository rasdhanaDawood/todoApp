import { useState } from "react";
import "./TodoApp.css";
import ListComponent from "./ListComponent";

export function TodoApp() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  

  const storeItems = (event) => {
    event.preventDefault();
    if (input !== "") {
      setItems([...items, { title: input, status: false }]);
      setInput("");
    }
  };
  return (
    <div className="todo-container">
      <form className="input-section" onSubmit={storeItems}>
        <h1>Todo App</h1>
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Enter items..."
        />
      </form>
      <ul>
        <ListComponent items={items} setItems={setItems}  />
      </ul>
    </div>
  );
}
export default TodoApp;
