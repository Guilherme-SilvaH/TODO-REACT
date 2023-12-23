import React from 'react'
import { useState } from 'react'



const TodoForm = ({addTodo}) => {

    const [value, setValue] = useState(""); /* Seram preenchidos pelos inputs */
    const [category, setCategory] = useState(""); /* Seram preenchidos pelos inputs */

    const handlesubmit = (e) => { /* vai receber como um parametro um evento, que sera o evento de envio de formulario */
        e.preventDefault()/* nao deixa o formulario ser enviado sem dados */
        if(!value || !category) return;
        // ADCIONAR TODO
        // LIMPAR OS CAMPOS
        addTodo(value, category)
        setValue("")
        setCategory("")
    }
  return (
    <div className='todo-form'>
        <h2>Criar Tarefa</h2>
        <form onSubmit={handlesubmit}>
            <input type='text' 
            value={value}  /* colocamos o value para trabalhar com o valor dentro do input, no caso vamos usar para limpar os dados */
            placeholder='Digite o titulo' 
            onChange={(e) => setValue(e.target.value)}>
            </input>  {/* onChange recebe uma arr func com parametro de evento e set o value pegando o valor do evento do input */}

            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                    <option value="Faculdade">Faculdade</option>
            </select>

            <button type='sunmit'> Criar tarefa </button>

        </form>
    </div>
  )
}

export default TodoForm