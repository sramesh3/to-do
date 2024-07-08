import React, {useState} from "react";
import Input from "./Input";
import TodoGrid from "./TodoGrid";
import Edit from "./Edit";

function Main() {
  const [todoList, setTodoList] = useState([])
  const [editingTodo, setEditingTodo] = useState({index: null, title: '', todo: ''})
  const [editOn, setEditOn] = useState(false)

  function addTodo(title, todo) {
    setTodoList((prevTodoList) =>
      [...prevTodoList,
        {title, todo}
      ]
    )
  }

  function removeTodo(index) {
    const newTodoList = todoList.filter((todoItem, i) => i !== index)
    setTodoList(newTodoList)
    console.log(newTodoList)
  }

  function editTodo(index, title, todo) {
    setEditingTodo({index, title, todo})
    setEditOn(true)
  }

  function confirmEdit() {
    const updatedTodoList = todoList.map((todoItem, index) => {
      return(
        index === editingTodo.index ? {title: editingTodo.title, todo: editingTodo.todo} : todoItem
      )
    })

    setTodoList(updatedTodoList)
    setEditOn(false)
    setEditingTodo({index: null, title: '', todo: ''})
  }

  return (
    <div>
      <Input addTodo={addTodo}/>
      {editOn && <Edit editingTodo={editingTodo}
      setEditingTodo={setEditingTodo}
      confirmEdit={confirmEdit}/>}
      <TodoGrid 
      todoList = {todoList}
      removeTodo = {removeTodo}
      editTodo  = {editTodo}/>
    </div>
  )
}

export default Main;