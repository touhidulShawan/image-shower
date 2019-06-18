import React from "react";
import "../assets/css/ImageLists.min.css";
import ImageCard from "./ImageCard";

const ImageLists = props => {
  const images = props.images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="img__card">{images}</div>;
};

export default ImageLists;
