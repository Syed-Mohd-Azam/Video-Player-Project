/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const VideosContainer = ({ videos: { items } }) => {
  return (
    <>
      <section>{items.map((item) => console.log(item))}</section>
    </>
  );
};
export default VideosContainer;
