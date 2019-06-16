import React from "react";
import "../assets/css/ImageCard.min.css";

const ImageCard = props => {
  const images = props.images.map(({ id, urls, description }) => {
    return <img src={urls.regular} alt={description} key={id} />;
  });
  return <div className="img__card">{images}</div>;
};

export default ImageCard;
