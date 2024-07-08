import React, {useState} from "react";

function Edit({editingTodo, setEditingTodo, confirmEdit}) {
  function handleTitleChange(event) {
    setEditingTodo((prevEditingTodo) => (
      {
        ...prevEditingTodo,
        title: event.target.value
      }
    ))
  }

  function handleTodoChange(event) {
    setEditingTodo((prevEditingTodo) => (
      {
        ...prevEditingTodo,
        todo: event.target.value
      }
    ))
  }

  function handleSubmit(event) {
    event.preventDefault()
    confirmEdit()
  }

  return(
    <form onSubmit={handleSubmit}>
        <div className="grid grid-rows-4 justify-center py-2 mb-6">
          <input
          type="text"
          placeholder="Title"
          value={editingTodo.title}
          onChange={handleTitleChange}
          className="text-xl text-indent-2 font-bold border-2 rounded-lg" />

          <textarea
          type="text"
          placeholder="Enter your todo..."
          value={editingTodo.todo}
          onChange={handleTodoChange}
          className="text-2xl text-indent-2 border-2 rounded-lg pr-5 row-span-2" />

          <button className="border-2 bg-lime-300 border-black">Confirm</button>
        </div>
      </form>
  )
}

export default Edit;