import React from "react";
import PropTypes from "prop-types";

const Comment = ({text, userName, ...props}) => {
  return (
    <div className="comment-wrap" {...props}>
      <span className="comment-user">{userName}</span>
      <span className="comment-text">{text}</span>
    </div>
  );
};


Comment.propTypes = {
  text: PropTypes.string,
  userName: PropTypes.string,
};

Comment.defaultProps = {
  text: "",
  userName: "",
};

export default Comment;
