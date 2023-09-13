import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = ({ favourites, topicData, handleTopicClick, setCurrentView }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={() => setCurrentView('home')}>PhotoLabs</span>
      <TopicList topicData={topicData} handleTopicClick={handleTopicClick} />
      <FavBadge
        isFavPhotoExist={favourites.length > 0}
        onClick={() => setCurrentView('likedPhotos')}
      />

    </div>
  );
};

export default TopNavigation;