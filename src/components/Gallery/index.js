import React from "react";
import PropTypes from "prop-types";
import {imagePropType} from "../../constants/propTypes";

const Gallery = ({gallery, onImageSelected, onDeleteImage}) => {
  return (
    <>
      {gallery.map((image) => (
        <div onClick={() => onImageSelected(image)} className="image-wrap" key={image.id}>
          <img className="image" src={image.url}/>
          <button onClick={(e) => onDeleteImage(e, image)} className="btn">Delete</button>
        </div>
      ))}
    </>
  );
};


Gallery.propTypes = {
  gallery: PropTypes.arrayOf(imagePropType),
  onDeleteImage: PropTypes.func,
  onImageSelected: PropTypes.func,
};

Gallery.defaultProps = {
  gallery: [],
  onImageSelected: () => {},
  onDeleteImage: () => {},
};

export default Gallery;
