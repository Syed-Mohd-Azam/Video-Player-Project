import { createBrowserRouter } from "react-router-dom";
import PlaylistComponent from "./PlaylistComponent";
import VideoPlayer from "./VideoPlayer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PlaylistComponent />,
  },
  {
    path: "/watch",
    element: <VideoPlayer />,
  },
]);
export default router;
