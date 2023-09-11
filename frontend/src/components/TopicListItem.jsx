import React from "react";

import "../styles/TopicListItem.scss";



const TopicListItem = ({ label, handleTopicClick, id }) => {
  return (
    <div className="topic-list__item">
      <a href="#" onClick={(e) => {
        handleTopicClick(id);
      }}>
        {label}
      </a>
    </div>
  );
};


export default TopicListItem;
