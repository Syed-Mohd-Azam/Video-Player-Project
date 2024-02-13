import SearchContainer from "./SearchContainer";
import PlayList from "./PlayList";
const PlaylistComponent = () => {
  return (
    <>
      <section className="w-full">
        <SearchContainer />
        <PlayList />
      </section>
    </>
  );
};
export default PlaylistComponent;
