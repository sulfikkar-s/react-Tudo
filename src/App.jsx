import { useState } from "react";
import './App.css'

function App() {
  const [task, setTask] = useState({
    text: '',
    color: ''
  });
  const [todos, setTodos] = useState([]);


  const addTodo = (e) => {
    e.preventDefault()
    if (task.text.trim()=== "") return;
    setTodos([...todos, task]);
    setTask({
    text: '',
    color: ''
  });
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="container-fluid bg-gradient vh-100 d-flex justify-content-center align-items-center px-3">
  <div className="card p-4 shadow w-100" style={{ maxWidth: "400px", width: "100%" }}>
  <h3 className="text-center mb-3">📝 Todo App</h3>

      <form onSubmit={addTodo}>
    <div className="input-group mb-3 d-flex gap-2 ">
      <input className="form-control "
        type="text"
        
        placeholder="Enter todo"
        value={task.text}
        onChange={(e) => setTask({
          text: e.target.value,
          color: `rgb(${Math.floor(Math.random()*128)+207}, ${Math.floor(Math.random()*128)+207}, ${Math.floor(Math.random()*128)+207})`
        })}
      />
      <button className="btn btn-primary "onClick={addTodo}>
        Add
      </button>
    </div>
      </form>


    <ul className="list-group">
      {todos.map((item, index) => (
        <li style={{background: item.color}}
          key={index}
          className="list-group-item d-flex justify-content-between align-items-center text-break"
        >
          {item.text}
          <button
            className="btn btn-sm btn-danger"
            onClick={() => deleteTodo(index)}
          >
            x
          </button>
        </li>
      ))}
    </ul>
  </div>
</div>

    )}
export default App;