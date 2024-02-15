import SearchContainer from "./SearchContainer";
import Country from "./Country";
import PlayList from "./PlayList";
import { YOUTUBE_API } from "../constants/constants";
import { API_KEY } from "../constants/constants";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const PlaylistComponent = () => {
  const country = useSelector((state) => state?.country?.countryCode);
  const [videos, setVideos] = useState([]);
  const [filterVideos, setFilterVideos] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetchVideos(country);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country]);
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
  const fetchVideos = async (country) => {
    const data = await fetch(YOUTUBE_API + country + API_KEY);
    const jsonData = await data.json();
    setVideos(jsonData?.items);
    setFilterVideos(jsonData?.items);
  };
  return (
    <>
      <section className="w-full">
        <SearchContainer search={search} setSearch={setSearch} />
        <Country />
        <PlayList videos={videos} filterVideos={filterVideos} />
      </section>
    </>
  );
};
export default PlaylistComponent;
