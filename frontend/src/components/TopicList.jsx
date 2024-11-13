import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem.jsx";

const TopicList = ({topics}) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <TopicListItem key={topic.id} {...topic}/>
      ))}
    </div>
  );
};

export default TopicList;