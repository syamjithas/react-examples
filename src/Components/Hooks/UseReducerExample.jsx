import { useReducer, useState } from "react";
import { map, filter, compose, not, propEq } from "ramda";
import { idGenerator } from "../../Util/utilFunctions";
import ACTIONS from "./UseReducer/Actions";
import TodoList from "./UseReducer/TodoList";

const todoReducer = (todos, actions) => {
  switch (actions.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(actions.payLoad.name)];
    case ACTIONS.TOGGELE_TODO:
      return map((todo) => {
        if (todo.id === actions.payLoad.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      }, todos);
    case ACTIONS.DELETE_TODO:
      return filter(compose(not, propEq("id", actions.payLoad.id)), todos);
    default:
      return todos;
  }
};

const newTodo = (name) => {
  return { id: idGenerator.next().value, name, completed: false };
};

const UseReducerExample = () => {
  const [todos, todoDispatch] = useReducer(todoReducer, []);
  console.log(todos);
  const [name, setName] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    todoDispatch({ type: ACTIONS.ADD_TODO, payLoad: { name } });
    setName("");
  };
  return (
    <>
      <form onSubmit={handelSubmit}>
        Type Test and press enter to add item to list
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      <TodoList todos={todos} todoDispatch={todoDispatch} />
    </>
  );
};

export default UseReducerExample;
