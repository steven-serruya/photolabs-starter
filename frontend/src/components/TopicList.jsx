import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";


const TopicList = (props) => {

  return (
    <div className="top-nav-bar__topic-list">
      {props.topicData.map((topic) => {
        return (
          <TopicListItem
            key={topic.id}
            label={topic.title}
            topicData={props.topicData}
            handleTopicClick={() => props.handleTopicClick(topic.id)}
          />
        );
      })}
    </div>
  );
};

export default TopicList;
