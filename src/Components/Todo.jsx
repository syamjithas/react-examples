import { useState, useEffect } from "react";
import { map, addIndex } from "ramda";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  fetchTodoAsync,
  incrementIfOdd,
  selectTodo,
  selectStatus,
  selectPage,
} from "../store/features/todo/todoSlice";

const Todo = () => {
  const todoList = useSelector(selectPage(0));
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
    <>
      {map((todo) => {
        return (
          <div key={todo.id} className="todo">
            <div>{todo.title}</div>
            <div>{todo.status}</div>
          </div>
        );
      }, todoList)}
    </>
  );
};

export default Todo;
