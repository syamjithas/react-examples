
import ACTIONS from "./Actions";

const TodoList = ({ todos, todoDispatch }) => {
  return (
    <>
      {todos.map((todo) => {
        const { id, name, completed } = todo;
        const styleObj = {
          width: "150px",
          display: "inline-block",
          backgroundColor: completed ? "#fff" : "#cdcccc",
        };
        console.log(id);
        return (
          <div>
            <span key={id} style={styleObj}>
              {name}
            </span>
            <button
              onClick={() => {
                todoDispatch({ type: ACTIONS.TOGGELE_TODO, payLoad: { id } });
              }}
            >
              toggel
            </button>
            <button
              onClick={() => {
                todoDispatch({ type: ACTIONS.DELETE_TODO, payLoad: { id } });
              }}
            >
              X
            </button>
          </div>
        );
      })}
    </>
  );
};

export default TodoList;
