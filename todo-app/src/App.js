import { useState } from 'react';
import './App.css';
import Input from './components/Input';
import Note from './components/Note';

function App() {
  const [todoList, setTodoList] = useState(["Buy milk", "Wash dishes", "Clean room", "Take dog for a walk"]);

  const saveTodo = todo => {
    console.log(todo);
    setTodoList(prevTodos => {
      return [...prevTodos, todo];
    })
  }

  const deleteTodo = todoId => {
    setTodoList(prevTodos => {
      return prevTodos.filter((todo, index) => {
        return index !== todoId;
      });
    });
  }

  return (
    <div className="todo-container">
      <div className="heading">
        <h1>Todo App</h1>
      </div>
      <Input onSaveTodo={saveTodo} />
      {
        todoList.map((note, index) => <Note key={index} id={index} todo={note} onDeleteTodo={deleteTodo}/>)
      }
    </div>
  );
}
export default App;
