import React from "react";

import "../styles/TopicListItem.scss";



const TopicListItem = (props) => {
  return (
    <div className="topic-list__item" key={props.topicData.id}>
      {props.label}
    </div>
  );
};

export default TopicListItem;
