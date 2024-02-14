import { RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
import router from "./components/router";
function App() {
  const dark = useSelector((state) => state?.dark?.darkMode);
  return (
    <>
      <section className={dark === true ? "bg-[#192734]" : "bg-white"}>
        <section className="w-full min-h-screen mx-auto">
          <RouterProvider router={router} />
        </section>
      </section>
    </>
  );
}

export default App;
