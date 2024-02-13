import PlaylistComponent from "./components/PlaylistComponent";
import { useSelector } from "react-redux";
function App() {
  const dark = useSelector((state) => state?.dark?.darkMode);
  return (
    <>
      <section className={dark === true ? "bg-[#192734]" : "bg-white"}>
        <section className="w-4/5 min-h-screen mx-auto">
          <PlaylistComponent />
        </section>
      </section>
    </>
  );
}

export default App;
