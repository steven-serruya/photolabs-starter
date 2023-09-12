// Import required modules and components

import React from "react";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import "../styles/HomeRoute.scss";

// HomeRoute component displays the top navigation and list of photos

const HomeRoute = ({ favourites, toggleFavourite, toggleModal, photoData, topicData, handleTopicClick }) => {
  return (
    <div className="home-route">
      <TopNavigation favourites={favourites} topicData={topicData} handleTopicClick={handleTopicClick} />
      <PhotoList
        favourites={favourites}
        toggleFavourite={toggleFavourite}
        toggleModal={toggleModal}
        photoData={photoData}

      />

    </div>
  );
};

export default HomeRoute;