import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleInput, handleInputTitleChange, handleInputTodoChange } from "../features/todoSlice";


function Input() {

  const dispatch = useDispatch()
  const {todoList, title, todo, inputOpen} = useSelector((store) => store.todo)

  function handleTitleChange(event) {
    dispatch(handleInputTitleChange(event))
  }

  function handleTodoChange(event) {
    dispatch(handleInputTodoChange(event))
  }

  function handleSubmit(event) {
    event.preventDefault()
    if(title && todo) {
      dispatch(addTodo({title, todo}))
      toggleInputOpen()
    }
  }

  function toggleInputOpen() {
    dispatch(toggleInput())
  }

  return (
    <div>
      {!inputOpen &&
      <div className="flex justify-center items-center py-2 mb-6">
        <input onClick={toggleInputOpen} type="text" placeholder="Enter your todo..." className="text-2xl text-indent-2 border-2 rounded-lg" />
      </div>}

      {inputOpen &&
      <form onSubmit={handleSubmit}>
        <div className="grid grid-rows-4 justify-center py-2 mb-6">
          <div grid grid-cols-2>
            <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={handleTitleChange}
            className="text-xl text-indent-2 font-bold border-2 rounded-lg" />

            <button onClick = {toggleInputOpen} className="px-2 rounded-full border-2 bg-red-300 border-black">X</button>
          </div>

          <textarea
          type="text"
          placeholder="Enter your todo..."
          value={todo}
          onChange={handleTodoChange}
          className="text-2xl text-indent-2 border-2 rounded-lg pr-5 row-span-2" />

          <button className="border-2 bg-lime-300 border-black">Add</button>
        </div>
      </form>}
    </div>
  )
}

// function Input({addTodo}) {

//   const dispatch = useDispatch()
//   const {todoList} = useSelector((store) => store.todo)

//   const [inputOpen, setInputOpen] = useState(false)

//   const [title, setTitle] = useState('')
//   const [todo, setTodo] = useState('')

//   function handleTitleChange(event) {
//     setTitle(event.target.value)
//   }

//   function handleTodoChange(event) {
//     setTodo(event.target.value)
//   }

//   function handleSubmit(event) {
//     event.preventDefault()
//     if(title && todo) {
//       //addTodo(title, todo)
//       dispatch(addTodo({title, todo}))
//       toggleInputOpen()
//     }
//   }

//   function toggleInputOpen() {
//     setTitle('')
//     setTodo('')
//     setInputOpen((prevInputOpen) => !prevInputOpen)
//   }

//   return (
//     <div>
//       {!inputOpen &&
//       <div className="flex justify-center items-center py-2 mb-6">
//         <input onClick={toggleInputOpen} type="text" placeholder="Enter your todo..." className="text-2xl text-indent-2 border-2 rounded-lg" />
//       </div>}

//       {inputOpen &&
//       <form onSubmit={handleSubmit}>
//         <div className="grid grid-rows-4 justify-center py-2 mb-6">
//           <div grid grid-cols-2>
//             <input
//             type="text"
//             placeholder="Title"
//             value={title}
//             onChange={handleTitleChange}
//             className="text-xl text-indent-2 font-bold border-2 rounded-lg" />

//             <button onClick = {toggleInputOpen} className="px-2 rounded-full border-2 bg-red-300 border-black">X</button>
//           </div>

//           <textarea
//           type="text"
//           placeholder="Enter your todo..."
//           value={todo}
//           onChange={handleTodoChange}
//           className="text-2xl text-indent-2 border-2 rounded-lg pr-5 row-span-2" />

//           <button className="border-2 bg-lime-300 border-black">Add</button>
//         </div>
//       </form>}
//     </div>
//   )
// }

export default Input;