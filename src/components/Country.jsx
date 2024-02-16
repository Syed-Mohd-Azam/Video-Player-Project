import { useDispatch } from "react-redux";
import { countryCode } from "../utils/countrySlice";

/* eslint-disable react/prop-types */
const Country = () => {
  const dispatch = useDispatch();
  const handleSelectOption = (event) => {
    dispatch(countryCode(event.target.value));
  };
  return (
    <>
      <section className="w-full h-34 p-3 flex justify-center items-center">
        <select
          className="px-4 py-3 rounded-full border-none outline outline-1 outline-blue-600 text-2xl font-semibold text-blue-500 italic hover:cursor-pointer w-fit "
          onChange={(event) => handleSelectOption(event)}
        >
          <option value="IN">Select Country</option>
          <option value="IN">India</option>
          <option value="SA">Saudia Arabia</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="GB">United Kingdom</option>
          <option value="DE">Germany</option>
          <option value="RU">Russia</option>
          <option value="AU">Australia</option>
        </select>
      </section>
    </>
  );
};
export default Country;
