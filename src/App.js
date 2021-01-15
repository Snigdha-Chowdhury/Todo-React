import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(["Milk", "Bread"]);
  const [initialValue, setInitialValue] = useState("");
  console.log(initialValue);
  console.log(todos);
  const addTodoFunc = (event) => {
  console.log("h");
  setTodos([...todos, initialValue]);
  }
  return (
    <div className="App">
     <h1>
       Welcome Todo
     </h1>
     <div>
     <input  onChange={event => setInitialValue(event.target.value)} />
     <button onClick={addTodoFunc}>Add Todo</button>
     </div>
     <ul>
       {
         todos.map(todo => <li>{todo}</li>)
       }
     </ul>
    </div>
  );
}

export default App;
