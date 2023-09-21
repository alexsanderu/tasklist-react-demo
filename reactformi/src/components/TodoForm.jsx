import { useState } from 'react'
import PropTypes from 'prop-types';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("")
  const [category, setCategory] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value || !category) return;
    addTodo(value, category)
    setValue("")
    setCategory("")
  }

  return (
    <div>
      <h2>Criar tarefa:</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Digite o título" value={value} onChange={(e) => setValue(e.target.value)} />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Estudos">Estudos</option>
          <option value="Pessoal">Pessoal</option>
        </select>
        <button type="submit">Criar tarefa</button>
      </form>
    </div>
  )
}

TodoForm.propTypes = {
  addTodo: PropTypes.func
}

export default TodoForm