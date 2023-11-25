import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({

    name: "todos",
    initialState:
    {
        allTodos: [],
        edit: {
            todo:{},
            isEdit:false,

        },
    },


    reducers: {
        add: (state, action) => {
            return {
                ...state,
                allTodos: [action.payload, ...state.allTodos],
            };
        },

        remove: (state, action) => {
            return {
                ...state,
                allTodos: state.allTodos.filter((item) => item.id !== action.payload)
            };
        },
        edit: (state, action)=>{
            return{
                ...state,
                edit:{todo:action.payload , isEdit:true},
            }
        },
        update: (state, action)=>{
            return{
                ...state,
                allTodos: state.allTodos.map(todo=> todo.id === action.payload.id ? {...todo,text: action.payload.text}: todo
            ),
            edit : {todo:{}, isEdit :false},
            }
        },
    }, 
});
export const { add, remove , edit , update} = todoSlice.actions;
export default todoSlice.reducer;