import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
  editingTodo: {index: null, title: '', todo: ''},
  editOn: false,
  inputOpen: false,
  title: '',
  todo: '',
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodoItem = action.payload
      state.todoList.push(action.payload)
    },
    removeTodo: (state, action) => {
      const index = action.payload
      state.todoList = state.todoList.filter((todoItem, i) =>
      i !== index)
    },
    editTodo: (state, action) => {
      const newEditingTodo = action.payload
      state.editingTodo = newEditingTodo
      state.editOn = true
    },
    confirmEdit: (state) => {
      const updatedTodoList = state.todoList.map((todoItem, index) => {
        return index === state.editingTodo.index
          ? { title: state.editingTodo.title, todo: state.editingTodo.todo }
          : todoItem;
      })

      state.todoList = updatedTodoList
      state.editOn = false
      state.editingTodo = {index: null, title: '', todo: ''}
    },
    handleEditTitleChange: (state, action) => {
      const event = action.payload
      state.editingTodo = {
        ...state.editingTodo,
        title: event.target.value
      }
    },
    handleEditTodoChange: (state, action) => {
      const event = action.payload
      state.editingTodo = {
        ...state.editingTodo,
        todo: event.target.value
      }
    },
    toggleInput: (state) => {
      state.title = ''
      state.todo = ''
      state.inputOpen = !state.inputOpen
    },
    handleInputTitleChange: (state, action) => {
      const event = action.payload
      state.title = event.target.value
    },
    handleInputTodoChange: (state, action) => {
      const event = action.payload
      state.todo = event.target.value
    },
  }
})

//console.log(todoSlice)
export const {addTodo, removeTodo, editTodo, confirmEdit, handleEditTitleChange, handleEditTodoChange, toggleInput, handleInputTitleChange, handleInputTodoChange} = todoSlice.actions

export default todoSlice.reducer