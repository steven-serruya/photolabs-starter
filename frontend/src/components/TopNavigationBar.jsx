import React, { useContext } from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";
import { AppContext } from "../App";

const TopNavigation = () => {

  const { state } = useContext(AppContext);

  const isFavPhotoExist = () => {
    return state.favorite.length > 0;
  };

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList />
      <FavBadge isFavPhotoExist={isFavPhotoExist()} />
    </div>
  );
};

export default TopNavigation;
