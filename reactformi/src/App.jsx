import { useState, useEffect } from 'react'
import "./App.css"
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';

function App() {
  const [todos, setTodos] = useState([

    {
      id: 1,
      text: "criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    }

  ])
  const [todosFiltered, setTodosFiltered] = useState([...todos]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Asc")
  const [filtro, setFiltro] = useState("Todas")

  const addTodo = (text, category) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 1000),
      text,
      category,
      isCompleted: false,
    }]

    setTodos(newTodos)

  };

  const filterList = (filterState) => {
    if (filterState === 'Todas') {
      setTodosFiltered([...todos])
      return;
    }

    const filtered = todos.filter(todo => {
      return filterState === 'true' ? todo.isCompleted : !todo.isCompleted
    })
    setTodosFiltered(filtered)
    setFiltro(filterState)
  }

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(todo => todo.id != id ? todo : null);
    setTodos(filteredTodos)
    

  }

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo);
    setTodos(newTodos);
  }

  useEffect(() => {
    filterList(filtro)
  }, [todos])




  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter setFilter={filterList} setSort={setSort} />
      <div className="todo-list">
        {todosFiltered.filter((todo) => todo.text.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
          .sort((a, b) => sort === "Asc"
            ? a.text.localeCompare(b.text)
            : b.text.localeCompare(a.text))
          .map((todo, key) => (
            <Todo {...todo} key={key} removeTodo={removeTodo} completeTodo={completeTodo} />
          ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App
