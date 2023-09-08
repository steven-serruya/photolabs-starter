import React from "react";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import "../styles/HomeRoute.scss";


const HomeRoute = ({ favourites, toggleFavourite }) => {
  return (
    <div className="home-route">
      <TopNavigation favourites={favourites} />
      <PhotoList favourites={favourites} toggleFavourite={toggleFavourite} />

    </div>
  );
};

export default HomeRoute;