import React, {useContext} from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import {AppContext} from "../App";

const TopicList = () => {

  const {state, fetchPhotosByTopic} = useContext(AppContext);

  const topics = state.topicData;

  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((item) => (
        <div key={item.id}>
          <TopicListItem slug={item.slug} title={item.title} fetchPhotosByTopic={() => fetchPhotosByTopic(item.id)}/>
        </div>
      ))}
    </div>
  );
};

export default TopicList;
