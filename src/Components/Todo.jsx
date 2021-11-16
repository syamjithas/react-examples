import { useState, useEffect } from "react";
import { map } from "ramda";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  fetchTodoAsync,
  incrementIfOdd,
  selectTodo,
  selectStatus,
} from "../store/features/todo/todoSlice";

const Todo = () => {
  const todoList = useSelector(selectTodo);
  const todoStatus = useSelector(selectStatus);
  const [loader, setLoader] = useState(false);
  console.log(todoList);
  console.log(todoStatus);
  useEffect(() => {
    dispatch(fetchTodoAsync({ test: "test" }));
    setLoader(true);
  }, []);
  useEffect(() => {
    setLoader(todoStatus !== "idle");
  }, [todoStatus]);

  const dispatch = useDispatch();
  return (
    <div>
      {map((todo) => {
        return (
          <div className="">
            <span>{todo.title}</span>
            <span>{todo.status}</span>
          </div>
        );
      }, todoList)}
    </div>
  );
};

export default Todo;
