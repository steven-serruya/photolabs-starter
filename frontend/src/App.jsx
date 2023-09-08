import React from 'react';
import { useState } from 'react';
import './App.scss';
import photos from './mocks/photos.js';
import topics from './mocks/topics.js';
import HomeRoute from 'routes/HomeRoute';

// Note: Rendering a single component to build components in isolation

// const photoData = [
//   {
//     id: "1",
//     location: {
//       city: "Montreal",
//       country: "Canada",
//     },
//     imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//     username: "Joe Example",
//     profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
//   },
//   {
//     id: "2",
//     location: {
//       city: "Toronto",
//       country: "Canada",
//     },
//     imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//     username: "Joe Example",
//     profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
//   },
//   {
//     id: "3",
//     location: {
//       city: "Vancouver",
//       country: "Canada",
//     },
//     imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//     username: "Joe Example",
//     profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
//   }
// ];

const App = () => {
  const [favourites, setFavourites] = useState([]);
  const toggleFavourite = (photoId) => {
    console.log(photoId);
    if (favourites.includes(photoId)) {
      setFavourites(favourites.filter(id => id !== photoId));
    } else {
      setFavourites([...favourites, photoId]);
    }
  };
  return (
    <div className="App">
      <HomeRoute toggleFavourite={toggleFavourite} favourites={favourites} />



    </div>

  );
};

export default App;
