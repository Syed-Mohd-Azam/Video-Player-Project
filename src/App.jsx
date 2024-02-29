import { RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
import router from "./components/router";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
function App() {
  const dark = useSelector((state) => state?.dark?.darkMode);
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <section className={dark === true ? "bg-[#192734]" : "bg-purple-50"}>
          <section className="w-full min-h-screen mx-auto">
            <RouterProvider router={router} />
          </section>
        </section>
      </DndProvider>
    </>
  );
}

export default App;
