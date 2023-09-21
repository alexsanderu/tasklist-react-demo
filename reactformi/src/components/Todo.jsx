import PropTypes from 'prop-types';

const Todo = ({ isCompleted, text, id, category, removeTodo, completeTodo }) => {
  console.log(id)
  return (
    <div className="todo" style={{ textDecoration: isCompleted ? "line-through" : "" }}>
      <div className="contet">
        <p>{text}</p>
        <p className="category">({category})</p>
      </div>
      <div>
        <button className="complete" onClick={() => completeTodo(id)}>Completar</button>
        <button className="remove" onClick={() => removeTodo(id)}>x</button>
      </div>
    </div>
  )
}


Todo.propTypes = {
  category: PropTypes.string,
  text: PropTypes.string,
  id: PropTypes.number,
  removeTodo: PropTypes.func,
  completeTodo: PropTypes.func,
  isCompleted: PropTypes.bool
}

export default Todo;