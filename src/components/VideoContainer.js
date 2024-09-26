import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideo();
  }, []); // This will only run once when the component mounts.

  const getVideo = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();

    setVideos(json.items);
  };
  return (
    <div className="flex flex-wrap ">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};
export default VideoContainer;
