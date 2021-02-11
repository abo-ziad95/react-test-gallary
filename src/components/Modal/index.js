import React from "react";
import PropTypes from "prop-types";
import {imagePropType} from "../../constants/propTypes";
import Comment from "./components/Comment";

const Modal = ({selectedImage, onModalClose}) => {
  return (
    <div className="modal-wrap" onClick={onModalClose}>
      <div className="modal">
        <button className="modal-close-btn" onClick={onModalClose}>
          X
        </button>
        <div className="modal-img-wrap">
          <img src={selectedImage.url} alt={selectedImage.url}/>
        </div>
        <div className="comments-wrap">
          {selectedImage?.comments?.map(comment => {
            return <Comment key={comment.id} text={comment.text} userName={comment.userName} />
          })}
        </div>
      </div>
    </div>
  );
};


Modal.propTypes = {
  selectedImage: imagePropType,
  onModalClose: PropTypes.func
};

Modal.defaultProps = {
  selectedImage: {},
  onModalClose: () => {},
};

export default Modal;
