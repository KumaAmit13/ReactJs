import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[{id:nanoid(),text:"Hello word"}]
}

const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            console.log("added")
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        
        removeTodo: (state,action)=>{
            console.log("removed")
            state.todos=state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})
export default todoSlice.reducer;//it;s auto import this todoslice
export const {addTodo,removeTodo}=todoSlice.actions;
