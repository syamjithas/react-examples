export default function filter() {
  onmessage = function ({ data }) {
    const { comments, search } = data;
    if (search === "") {
      postMessage(comments);
    } else {
      postMessage(comments.filter((item) => item.name.indexOf(search) > -1));
    }
  };
}
