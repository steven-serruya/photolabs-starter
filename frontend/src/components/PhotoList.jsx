import React from 'react';

import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';
import photos from 'mocks/photos';
// const sampleDataForPhotoList = [
//   {
//     id: "1",
//     location: {
//       city: "Montreal",
//       country: "Canada",
//     },
//     urls: {
//       full: `${process.env.PUBLIC_URL}/Image-1-Full.jpeg`,
//       regular: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//     },
//     user: {
//       id: "1",
//       username: "exampleuser",
//       name: "Joe Example",
//       profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
//     },
//   },
//   {
//     id: "2",
//     location: {
//       city: "Toronto",
//       country: "Canada",
//     },
//     urls: {
//       full: `${process.env.PUBLIC_URL}/Image-2-Full.jpeg`,
//       regular: `${process.env.PUBLIC_URL}/Image-2-Regular.jpeg`,
//     },
//     user: {
//       id: "2",
//       username: "exampleuser",
//       name: "Joe Example",
//       profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
//     },
//   },
//   {
//     id: "3",
//     location: {
//       city: "Ottawa",
//       country: "Canada",
//     },
//     urls: {
//       full: `${process.env.PUBLIC_URL}/Image-3-Full.jpeg`,
//       regular: `${process.env.PUBLIC_URL}/Image-3-Regular.jpeg`,
//     },
//     user: {
//       id: "3",
//       username: "exampleuser",
//       name: "Joe Example",
//       profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
//     },
//   },



// ];



const PhotoList = ({ favourites, toggleFavourite, toggleModal }) => {
  return (
    <ul className="photo-list">
      {photos.map((photoData) => {
        return (
          <PhotoListItem
            className="photo-list-item"
            key={photoData.id}
            id={photoData.id}
            location={photoData.location}
            imageSource={photoData.urls.regular}
            username={photoData.user.username}
            profile={photoData.user.profile}
            isFav={favourites.includes(photoData.id)}
            toggleFavourite={toggleFavourite}
            photo={photoData}
            toggleModal={toggleModal}
          />
        );
      })}
    </ul>
  );
};

export default PhotoList;
