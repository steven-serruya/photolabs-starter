import React, { useContext, useState } from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";
import { AppContext } from "../App";

const TopNavigation = () => {

  const { state } = useContext(AppContext);
  const [currentView, setCurrentView] = useState('home');

  const isFavPhotoExist = () => {
    return state.favorite.length > 0;
  };

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList />
      <FavBadge isFavPhotoExist={isFavPhotoExist()} onClick={() => setCurrentView('likedPhotos')} />
    </div>
  );
};

export default TopNavigation;
