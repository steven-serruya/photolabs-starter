import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";



const PhotoListItem = (props) => {

  return (
    <div className="photo-list-item">
      <PhotoFavButton />
      <div className="photo">
        <img src={props.imageSource} alt={`Photo ${props.id}`} />
      </div>
      <div className="info">
        <div className="username">{props.username}</div>
        <div className="location">
          {props.location.city}, {props.location.country}
        </div>
        <div className="profile-picture">
          <img src={props.profile} alt={`Profile ${props.id}`} />
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
