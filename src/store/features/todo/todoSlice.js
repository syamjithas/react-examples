import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchTodo } from "./todoAPI";
const initialState = {
  todosList: [],
  status: "idle",
};

export const fetchTodoAsync = createAsyncThunk(
  "todos/fetchTodo",
  async (page) => {
    const response = await fetchTodo(page);
    return response.data;
  }
);

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.todosList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodoAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTodoAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.todosList = action.payload;
      });
  },
});

export const { increment, decrement, incrementByAmount } = todosSlice.actions;

export const selectTodo = (state) => state.todos.todosList;
export const selectStatus = (state) => state.todos.status;

export const selectPage = (pageNum) => (state) =>
  state.todos.todosList.slice(pageNum * 10, (pageNum + 1) * 10);

export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectTodo(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
};

export default todosSlice.reducer;
