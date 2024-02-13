import { LuSearch } from "react-icons/lu";
const SearchContainer = () => {
  return (
    <>
      <section className="flex justify-center items-center p-10">
        <article className="flex gap-0 outline outline-1 outline-sky-400  justify-center items-center rounded-l-full rounded-r-full lg:hover:w-1/2">
          <input
            className="text-xl px-7 py-3 italic md:text-2xl lg:text-3xl  outline-none basis-3/5 hover:cursor-pointer hover:bg-purple-50 hover:rounded-l-full  border-r-2 border-sky-400"
            type="search"
            placeholder="Search Video"
          />
          <LuSearch className="md:w-10 md:h-10 lg:w-12 lg:h-12 hover:cursor-pointer basis-2/5 px-2 py-2 w-8 h-8" />
        </article>
      </section>
    </>
  );
};
export default SearchContainer;
