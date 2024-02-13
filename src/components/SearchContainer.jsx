import { LuSearch } from "react-icons/lu";
import { BsToggleOff } from "react-icons/bs";
import { BsToggleOn } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { IoSunnyOutline } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa";
import { toggleMode } from "../utils/darkSlice";
// eslint-disable-next-line react/prop-types
const SearchContainer = ({ search, setSearch }) => {
  const dispatch = useDispatch();
  const dark = useSelector((state) => state?.dark?.darkMode);
  const handleToggle = () => {
    dispatch(toggleMode());
  };
  return (
    <>
      <section
        className="flex gap-8 p-8  justify-end items-center"
        onClick={handleToggle}
      >
        {dark === true ? (
          <>
            <BsToggleOn className="w-8 h-8 text-blue-400" />
            <FaRegMoon className="w-8 h-8 text-blue-400" />
          </>
        ) : (
          <>
            <BsToggleOff className="w-8 h-8" />
            <IoSunnyOutline className="w-8 h-8" />
          </>
        )}
      </section>
      <section className="flex justify-center items-center p-10 ">
        <article className="flex gap-0 outline outline-1 outline-sky-400  justify-center items-center rounded-l-full rounded-r-full lg:hover:w-1/2">
          <input
            className="text-xl px-7 py-3 italic md:text-2xl lg:text-3xl  outline-none basis-3/5 hover:cursor-pointer hover:bg-purple-50 hover:rounded-l-full  border-r-2 border-sky-400 text-blue-400 rounded-l-full"
            type="search"
            value={search}
            placeholder="Search Video"
            onChange={(e) => setSearch(e.target.value)}
          />
          <LuSearch className="md:w-10 md:h-10 lg:w-12 lg:h-12 hover:cursor-pointer basis-2/5 px-2 py-2 w-8 h-8 text-blue-400" />
        </article>
      </section>
    </>
  );
};
export default SearchContainer;
