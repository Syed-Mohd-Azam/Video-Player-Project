import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { YOUTUBE_API } from "../constants/constants";
const PlayList = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetchVideos();
  }, []);
  const fetchVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const jsonData = await data.json();
    setList(jsonData);
  };
  return (
    <section>
      <article className="py-5 flex justify-center items-center">
        <h1 className="italic lg:text-5xl text-4xl text-blue-500">
          {" "}
          PlayList !!
        </h1>
      </article>
      <article>
        {list.length === 0 ? (
          <>
            <Shimmer />
          </>
        ) : (
          <></>
        )}
      </article>
    </section>
  );
};
export default PlayList;
