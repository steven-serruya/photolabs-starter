import React from 'react';
import { useState } from 'react';
import '../styles/HomeRoute.scss';
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";


const HomeRoute = () => {

  const [currentView, setCurrentView] = useState('home');

  return (
    <div className="home-route">
      {/*use context, no props needed*/}
      <TopNavigationBar />
      <PhotoList


      />
    </div>
  );
};

export default HomeRoute;
