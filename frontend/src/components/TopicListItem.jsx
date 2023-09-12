import React from "react";

import "../styles/TopicListItem.scss";



const TopicListItem = ({ label, handleTopicClick, id }) => {
  const handleClick = (e, id) => {
    e.preventDefault();  // Prevents the default action of the <a> tag
    handleTopicClick(id);
  };

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
