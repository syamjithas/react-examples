const slowdown = () => {
  const seconds = 1;
  const start = new Date().getTime();
  let end = start;
  while (end - start < seconds * 1000) {
    end = new Date().getTime();
  }
};

function* getTodoId() {
  let index = 0;
  while (true) {
    yield `${new Date()
      .toDateString()
      .toLowerCase()
      .replace(" ", "_")}_${index++}`;
  }
}
const idGenerator = getTodoId();
export { slowdown, idGenerator };
