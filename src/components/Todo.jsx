import React from 'react'

const Todo = ({todo, removeTodo, completeTodo}) => {
  return (
    <div className="todo" style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>   {/* aplica um estilo quando o isComplete estiver True */}
    <div className="content">
      {/* imprir o texto do TODO*/}
      <p>{todo.text}</p>
      <p className='category'>({todo.category})</p>
    </div>
    <div>
      <button className='complete'onClick={() => completeTodo(todo.id)}>Completar</button>
      <button className='remove' onClick={() => removeTodo(todo.id) }>x</button>
    </div>
  </div>
  )
}

export default Todo