import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { todoAPI } from "apis/todo";
import { TodoType } from "types";

export const __getTodoList = createAsyncThunk("getTodoList", async (_, thunkAPI) => {
  try {
    const res = await todoAPI.getTodoList();
    return thunkAPI.fulfillWithValue(res);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __createTodo = createAsyncThunk("createTodo", async (payload: TodoType, thunkAPI) => {
  try {
    const res = await todoAPI.createTodo(payload);
    return thunkAPI.fulfillWithValue(res);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __deleteTodo = createAsyncThunk("deleteTodo", async (payload: Pick<TodoType, "id">, thunkAPI) => {
  const { id } = payload;
  try {
    const res = await todoAPI.deleteTodo(id);
    return thunkAPI.fulfillWithValue(res);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __updateTodo = createAsyncThunk(
  "updateTodo",
  async (payload: Pick<TodoType, "id" | "isDone">, thunkAPI) => {
    try {
      const res = await todoAPI.updateTodo(payload);
      return thunkAPI.fulfillWithValue(res);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const initialState: { isLoading: boolean; isError: boolean; error: any; todoList: TodoType[] } = {
  isLoading: false,
  isError: false,
  error: null,
  todoList: []
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__getTodoList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__getTodoList.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.todoList = payload;
      })
      .addCase(__getTodoList.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.error = payload;
      });
    builder
      .addCase(__createTodo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__createTodo.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.todoList.push(payload);
      })
      .addCase(__createTodo.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.error = payload;
      });
    builder
      .addCase(__deleteTodo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__deleteTodo.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.todoList = state.todoList.filter((n) => n.id !== payload);
      })
      .addCase(__deleteTodo.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.error = payload;
      });
    builder
      .addCase(__updateTodo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__updateTodo.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const { id, isDone } = payload;
        state.todoList = state.todoList.map((n) => (n.id === id ? { ...n, isDone: isDone } : n));
      })
      .addCase(__updateTodo.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.error = payload;
      });
  }
});

export default todoSlice.reducer;
