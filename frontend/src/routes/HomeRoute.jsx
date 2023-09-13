import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";


const HomeRoute = () => {


  return (
    <div className="home-route">
      {/*use context, no props needed*/}
      <TopNavigationBar />
      <PhotoList />
    </div>
  );
};

export default HomeRoute;
