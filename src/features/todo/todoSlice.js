import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    allTodos: [],
    edit: {
      todo: {},
      isEdit: false,
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
        allTodos: state.allTodos.filter((item) => item.id !== action.payload),
      };
    },

    edit: (state, action) => {
      return {
        ...state,
        edit: { todo: action.payload, isEdit: true },
      };
    },

    update: (state, action) => {
      const { id, text, headings  , category  } = action.payload;
      return {
        ...state,
        allTodos: state.allTodos.map((todo) =>
          todo.id === id ? { ...todo, text, headings , category } : todo
        ),
        edit: { todo: {}, isEdit: false },
      };
    },

    Starred: (state, action) => {
      return {
        ...state,
        allTodos: state.allTodos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, status: action.payload.status } : todo
        ),
      };
    },
  },
});

export const { add, remove, edit, update, Starred } = todoSlice.actions;
export default todoSlice.reducer;
