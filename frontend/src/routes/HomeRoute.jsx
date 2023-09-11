import React from "react";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import "../styles/HomeRoute.scss";


const HomeRoute = ({ favourites, toggleFavourite, toggleModal, photoData, topicData }) => {
  return (
    <div className="home-route">
      <TopNavigation favourites={favourites} topicData={topicData} />
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