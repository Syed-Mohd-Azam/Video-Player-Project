import { LuSearch } from "react-icons/lu";
const SearchContainer = () => {
  return (
    <>
      <section className="flex justify-center items-center p-10">
        <article className="flex gap-0 outline outline-1 outline-sky-400 px-7 py-3 justify-center items-center rounded-l-full rounded-r-full lg:hover:w-2/3">
          <input
            className="text-xl italic md:text-2xl lg:text-3xl border-none outline-none basis-3/4 hover:cursor-pointer hover:bg-purple-50"
            type="search"
            placeholder="Search Video"
          />
          <LuSearch className="md:w-8 md:h-8 lg:w-12 lg:h-12 hover:cursor-pointer basis-1/4" />
        </article>
      </section>
    </>
  );
};
export default SearchContainer;
