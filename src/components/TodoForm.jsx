import React from 'react'

const TodoForm = () => {
  return (
    <div className='todo-form'>
        <h2>Criar Tarefa</h2>
        <form>
            <input type='text' placeholder='Digite o titulo'></input>
            <select>
                <option value="">Selecione uma categoria</option>
                <option value="Trabalho">Selecione uma categoria</option>
                <option value="Pessoal">Selecione uma categoria</option>
                <option value="Estudos">Selecione uma categoria</option>
                <option value="Faculdade">Selecione uma categoria</option>
            
            </select>
            <button type='sunmit'> Criar tarefa </button>
        </form>
    </div>
  )
}

export default TodoForm