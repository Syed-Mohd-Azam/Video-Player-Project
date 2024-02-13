import SearchContainer from "./SearchContainer";
import PlayList from "./PlayList";
import { YOUTUBE_API } from "../constants/constants";
import { useEffect, useState } from "react";
const PlaylistComponent = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchVideos();
  }, []);
  const fetchVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const jsonData = await data.json();
    setVideos(jsonData);
  };
  return (
    <>
      <section className="w-full">
        <SearchContainer />
        <PlayList videos={videos} />
      </section>
    </>
  );
};
export default PlaylistComponent;
