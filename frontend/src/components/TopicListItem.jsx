import React from "react";

import "../styles/TopicListItem.scss";

const topic = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = () => {
  return (
    <div key={topic.id} className="topic-list__item" >
      {topic.label}
    </div>
  );
};

export default TopicListItem;
