import SearchContainer from "./SearchContainer";
import PlayList from "./PlayList";
import { YOUTUBE_API } from "../constants/constants";
import { useEffect, useState } from "react";
const PlaylistComponent = () => {
  const [videos, setVideos] = useState([]);
  const [filterVideos, setFilterVideos] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetchVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    searchVideos(search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);
  const searchVideos = (param) => {
    if (videos.length > 0) {
      setFilterVideos(
        videos?.filter(
          (video) =>
            video?.snippet?.channelTitle
              .toLowerCase()
              .includes(param.toLowerCase()) ||
            video?.snippet?.title.toLowerCase().includes(param.toLowerCase())
        )
      );
    }
  };
  const fetchVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const jsonData = await data.json();
    setVideos(jsonData?.items);
    setFilterVideos(jsonData?.items);
  };
  return (
    <>
      <section className="w-full">
        <SearchContainer search={search} setSearch={setSearch} />
        <PlayList videos={videos} filterVideos={filterVideos} />
      </section>
    </>
  );
};
export default PlaylistComponent;
