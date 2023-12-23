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
  ]);

  const addTodo = (text, category) => {
    const newTodos = [...todos, { /*vai receber todos os TODOs por spread e vai criar um novo objeto de TODOs */
      id: Math.floor(Math.random() * 10000), /* Gerar um numero aleatorio */
      text,
      category,
      isCompleted: false
    }]

    setTodos(newTodos)
  };

  return( 
  <div className="app">
  <h1>Lista de Tarefas</h1>
  <div className='todo-list'>
   {/* percorrer o array de objeto e exibir todos os TODO*/}
    {todos.map((todo) => (  
      <Todo key={todo.id} todo={todo}/>
    ))}
  </div>

  <TodoForm addTodo={addTodo}/>
</div>)
  

}
export default App
