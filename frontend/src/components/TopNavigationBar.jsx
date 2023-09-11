import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = ({ favourites, topicData, handleTopicClick }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topicData={topicData} handleTopicClick={handleTopicClick} />
      <FavBadge isFavPhotoExist={favourites.length > 0} />
    </div>
  );
};

export default TopNavigation;