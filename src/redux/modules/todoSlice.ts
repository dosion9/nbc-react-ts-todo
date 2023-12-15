import { createSlice } from "@reduxjs/toolkit";
import { TodoType } from "types";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

type TodoListType = {
  todoList: TodoType[];
};

const initialState: TodoListType = {
  todoList: []
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    createTodo: (state, action: PayloadAction<{ title: string; content: string }>) => {
      const { title, content } = action.payload;

      const newTodo: TodoType = {
        title,
        content,
        id: uuidv4(),
        isDone: false
      };
      state.todoList.push(newTodo);
    },

    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todoList = state.todoList.filter((n) => n.id !== action.payload);
    },
    updateTodo: (state, action: PayloadAction<string>) => {
      state.todoList = state.todoList.map((n) => (n.id === action.payload ? { ...n, isDone: !n.isDone } : n));
    }
  }
});

export default todoSlice.reducer;
export const { createTodo, deleteTodo, updateTodo } = todoSlice.actions;
