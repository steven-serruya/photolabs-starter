import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

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
  return (
    <div className="App">
      <PhotoList />




    </div>

  );
};

export default App;
