import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { confirmEdit, handleEditTitleChange, handleEditTodoChange } from "../features/todoSlice";

function Edit() {
  const {editingTodo} = useSelector((store) => store.todo)
  const dispatch = useDispatch()

  function handleTitleChange(event) {
    dispatch(handleEditTitleChange(event))
  }

  function handleTodoChange(event) {
    dispatch(handleEditTodoChange(event))
  }

  function handleSubmit(event) {
    event.preventDefault()
    dispatch(confirmEdit())
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

// function Edit({editingTodo, setEditingTodo, confirmEdit}) {
//   function handleTitleChange(event) {
//     setEditingTodo((prevEditingTodo) => (
//       {
//         ...prevEditingTodo,
//         title: event.target.value
//       }
//     ))
//   }

//   function handleTodoChange(event) {
//     setEditingTodo((prevEditingTodo) => (
//       {
//         ...prevEditingTodo,
//         todo: event.target.value
//       }
//     ))
//   }

//   function handleSubmit(event) {
//     event.preventDefault()
//     confirmEdit()
//   }

//   return(
//     <form onSubmit={handleSubmit}>
//         <div className="grid grid-rows-4 justify-center py-2 mb-6">
//           <input
//           type="text"
//           placeholder="Title"
//           value={editingTodo.title}
//           onChange={handleTitleChange}
//           className="text-xl text-indent-2 font-bold border-2 rounded-lg" />

//           <textarea
//           type="text"
//           placeholder="Enter your todo..."
//           value={editingTodo.todo}
//           onChange={handleTodoChange}
//           className="text-2xl text-indent-2 border-2 rounded-lg pr-5 row-span-2" />

//           <button className="border-2 bg-lime-300 border-black">Confirm</button>
//         </div>
//       </form>
//   )
// }

export default Edit;