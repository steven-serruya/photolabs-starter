import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = ({ favourites, topicData, handleTopicClick, setCurrentView }) => {

  const favClickEventHandler = (event) => {
    setCurrentView('likedPhotos');
    handleTopicClick(null);
  };

  const clickEventHandlerLogo = (event) => {
    setCurrentView('home');
    handleTopicClick(null);
  };
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={clickEventHandlerLogo}>PhotoLabs</span>
      <TopicList topicData={topicData} handleTopicClick={handleTopicClick} />
      <FavBadge
        isFavPhotoExist={favourites.length > 0}
        onClick={favClickEventHandler}


      />

    </div>
  );
};

export default TopNavigation;