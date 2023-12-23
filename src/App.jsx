import { useState } from 'react'
import "./App.css";
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';


function App() {
  const [todos, setTodos] = useState([
    
    {
      id:1,
      text: "criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id:2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id:3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    }
  ])

  return( 
  <div className="app">
  <h1>Lista de Tarefas</h1>
  <div className='todo-list'>
   {/* percorrer o array de objeto e exibir todos os TODO*/}
    {todos.map((todo) => (  
      <Todo todo={todo}/>
    ))}
  </div>

  <TodoForm />
</div>)
  

}
export default App
