function Card({title, todo, index, removeTodo, editTodo}) {

  function handleDelete() {
    removeTodo(index)
  }

  function handleEdit() {
    editTodo(index, title, todo)
  }

  return (
    <div key={index} className="flex flex-col bg-slate-300 border-2 border-black">
      <div className="flex justify-center items-center
       bg-slate-300 py-3 border-b-2 border-black font-bold">{title}</div>
       <div className="grid grid-cols-2 bg-slate-300"></div>

      <div className="flex justify-center items-center
       bg-slate-300 py-5 border-b-2 border-black">{todo}</div>
       <div className="grid grid-cols-2 bg-slate-300">

        <button onClick={handleEdit} className="bg-sky-200 border-r-2 border-black">Edit</button>

        <button onClick={handleDelete} className="bg-red-200">Delete</button>
       </div>
    </div>
  )
}

export default Card;