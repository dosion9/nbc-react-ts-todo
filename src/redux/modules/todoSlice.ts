import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: { todoList: TodoType[] } = {
  todoList: []
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodoList: (state, action: PayloadAction<TodoType[]>) => {
      state.todoList = action.payload;
    },
    createTodo: (state, action: PayloadAction<TodoType>) => {
      state.todoList.push(action.payload);
    },

    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todoList = state.todoList.filter((n) => n.id !== action.payload);
    },
    updateTodo: (state, action: PayloadAction<Pick<TodoType, "id" | "isDone">>) => {
      const { id, isDone } = action.payload;
      state.todoList = state.todoList.map((n) => (n.id === id ? { ...n, isDone: isDone } : n));
    }
  }
});

export default todoSlice.reducer;
export const { setTodoList, createTodo, deleteTodo, updateTodo } = todoSlice.actions;
