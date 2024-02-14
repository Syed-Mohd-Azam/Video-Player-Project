import SearchContainer from "./SearchContainer";
import PlayList from "./PlayList";
import { YOUTUBE_API } from "../constants/constants";
import { useEffect, useState } from "react";
const PlaylistComponent = () => {
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetchVideos();
  }, []);
  const fetchVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const jsonData = await data.json();
    setVideos(jsonData?.items);
  };
  return (
    <>
      <section className="w-full">
        <SearchContainer search={search} setSearch={setSearch} />
        <PlayList videos={videos} />
      </section>
    </>
  );
};
export default PlaylistComponent;
