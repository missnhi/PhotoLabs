import React from "react";

import "../styles/TopicListItem.scss";


const TopicListItem = ({id, title, fetchPhotosByTopic}) => {
  return (
    <div className="topic-list__item" onClick={()=> fetchPhotosByTopic(id)}>
      {title}
    </div>
  );
};

export default TopicListItem;
