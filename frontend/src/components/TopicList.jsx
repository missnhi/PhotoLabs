import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem.jsx";

const TopicList = ({topics, fetchPhotosByTopic}) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <TopicListItem
          key={topic.id}
          id={topic.id}
          title={topic.title}
          fetchPhotosByTopic={fetchPhotosByTopic}
        />
      ))}
    </div>
  );
};

export default TopicList;