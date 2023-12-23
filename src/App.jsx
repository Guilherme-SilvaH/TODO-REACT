import { useState } from 'react'
import "./App.css";


import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';


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


  /* states do projeto */ 
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");




/* Funcoes do projeto(obs: poderia fazer em uma outra pagina para uma boa pratica) */ 
  const addTodo = (text, category) => {
    const newTodos = [...todos, { /*vai receber todos os TODOs por spread e vai criar um novo objeto de TODOs */
      id: Math.floor(Math.random() * 10000), /* Gerar um numero aleatorio */
      text,
      category,
      isCompleted: false
    }]

    setTodos(newTodos)
  };

  const removeTodo = (id) => {
    const newTodos = [...todos] /* faz uma copia dos itens que tem no array de obj */
    const filteredTodos = newTodos.filter(todo =>  /* Filter nao altera o array original */ 
      todo.id !== id ? todo : null
      ); /* Filter para podermos saber qual o id que nao esta igual e se tiver igual, vamos excluir */ 

      setTodos(filteredTodos); /* Atualizar o estado */
  };
  const completeTodo = (id) => {
    const newTodos = [...todos] /* faz uma copia dos itens que tem no array de obj */
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo); /* Filter altera o array original */ 
    setTodos(newTodos);

  };
  

  /* Aqui é o que vai ser exibido na Pagina */ 
  return( 
  <div className="app">
  <h1>Lista de Tarefas</h1>
  <Search search={search} setSearch={setSearch}></Search>
  <Filter filter={filter} setFilter={setFilter} setSort={setSort}></Filter>
  <div className='todo-list'>
   {/* percorrer o array de objeto e exibir todos os TODO*/}
    {todos
    .filter((todo) => 
    filter === "All" /* Esse filtro faz com que se tiver "All" vai estar true, dps faz outro filtro que se tiver completo, retorna apenas os isComplete, se nao, retorna o que nao estiver isComplete*/
     ? true 
     : filter === "Completed" 
     ? todo.isCompleted 
     : !todo.isCompleted
     )

    .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()) /* faz um filtro que se o pesquisar for igual a funcao pesquisar, ele ja aplica o filtro */
    )

    .sort( (a, b) =>   /* Este método sort recebe uma função de comparação como argumento. A função de comparação compara dois elementos, a e b, do array. */
      sort === "Asc"  /* Verifica se a variável sort é igual a "Asc" (ascendente) */
        ? a.text.localeCompare(b.text) /*Se sort for "Asc", usa localeCompare para comparar os textos (text) de a e b e determinar a ordem ascendente.*/
        : b.text.localeCompare(a.text) /* b.text.localeCompare(a.text): Se sort não for "Asc" (ou seja, será "Desc"), inverte a ordem usando localeCompare de b para a.*/
    )
 
    

    .map((todo) => (  
      <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
    ))}
  </div>

  <TodoForm addTodo={addTodo}/>
</div>)
  

}
export default App
