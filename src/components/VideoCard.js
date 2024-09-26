import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-4 m-2 w-72 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-200">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <div className="mt-2">
        <h3 className="font-semibold text-lg line-clamp-2">{title}</h3>
        <p className="text-gray-600 text-sm">{channelTitle}</p>
        <p className="text-gray-500 text-sm">{statistics.viewCount} views</p>
      </div>
    </div>
  );
};

export default VideoCard;
