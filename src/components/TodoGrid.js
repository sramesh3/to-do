import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";

function TodoGrid() {
  const {todoList} = useSelector((store) => store.todo)
  return (
    todoList.length === 0 ? 
    
    <div className="font-bold text-5xl text-center">There are no todos!</div> 
    : 
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-4">
        {todoList.map((todoItem, index) => (
          <Card 
          key={index}
          index={index}
          title={todoItem.title}
          todo={todoItem.todo}
          />
        ))}
      </div>
  )
}

// function TodoGrid({todoList, removeTodo, editTodo, editOn}) {
//   return (
//     todoList.length === 0 ? 
    
//     <div className="font-bold text-5xl text-center">There are no todos!</div> 
//     : 
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-4">
//         {todoList.map((todoItem, index) => (
//           <Card 
//           key={index}
//           index={index}
//           title={todoItem.title}
//           todo={todoItem.todo}
//           removeTodo={removeTodo}
//           editTodo={editTodo}
//           editOn={editOn}
//           />
//         ))}
//       </div>
//   )
// }

export default TodoGrid;