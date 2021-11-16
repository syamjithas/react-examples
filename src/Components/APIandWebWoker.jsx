import { useState, useEffect } from "react";
import asyncFilter from "../util/app.worker";
import WebWorker from "../util/webWorker";

const APIandWebWoker = () => {
  const [comments, setComments] = useState([]);
  const [filterd, setFilterd] = useState([]);
  const [search, setSearch] = useState("");
  const [worker, serWorker] = useState();
  console.log("render");
  useEffect(() => {
    serWorker(new WebWorker(asyncFilter));
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((json) => {
        setComments(json);
      });
    return () => {
      console.log("unmount");
    };
  }, []);

  useEffect(() => {
    console.log("unmount");
    return () => {
      console.log("unmount");
      worker && worker.terminate();
    };
  }, [worker]);

  useEffect(() => {
    if (worker) {
      worker.onmessage = ({ data }) => {
        setFilterd(data || []);
      };
      worker.postMessage({ comments, search });
    }
  }, [search, comments, worker]);

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
