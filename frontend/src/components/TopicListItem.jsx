import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({slug, title, fetchPhotosByTopic}) => {
  return (
    <div className="topic-list__item" data-slug={slug}>
      <span onClick={fetchPhotosByTopic}>{title}</span>
    </div>
  );
};

export default TopicListItem;
