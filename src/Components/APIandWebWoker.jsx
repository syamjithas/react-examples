import { useState, useEffect } from "react";
import asyncFilter from "../Util/app.worker";
import WebWorker from "../Util/WebWorker";
const worker = new WebWorker(asyncFilter);
const APIandWebWoker = () => {
  const [comments, setComments] = useState([]);
  const [filterd, setFilterd] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((json) => {
        setComments(json);
      });
    return () => {
      // worker.terminate();
    };
  }, []);

  useEffect(() => {
    if (worker) {
      worker.onmessage = ({ data }) => {
        setFilterd(data || []);
      };
      worker.postMessage({ comments, search });
    }
  }, [search,comments]);

  return (
    <>
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>
        {filterd.map((item) => {
          return <div key={item.id}>{item.name}</div>;
        })}
      </div>
    </>
  );
};

export default APIandWebWoker;
