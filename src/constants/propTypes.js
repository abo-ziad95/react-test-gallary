import PropTypes from "prop-types";

export const imagePropType = PropTypes.shape({
  id: PropTypes.string,
  url: PropTypes.string,
  comments: PropTypes.shape({
    id: PropTypes.string,
    userName: PropTypes.string,
    text: PropTypes.string,
  })
});
