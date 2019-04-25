import React from "react";
import PropTypes from "prop-types";

const Items = ({
  title,
  id,
  img,
  display,
  buttonHandler,
  type,
  titleButton
}) => {
  let button = (
    <button
      className={"display__flex"}
      id={id}
      onClick={evt => buttonHandler(evt, type)}
    >
      {titleButton}
    </button>
  );

  return (
    <li key={id} id={id}>
      <figure className="figure__container">
        <img src={img} alt={title} />
        <figcaption className="center">{title} </figcaption>
        {display ? button : null}
      </figure>
    </li>
  );
};

Items.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
  img: PropTypes.string,
  buttonHandler: PropTypes.func,
  type: PropTypes.string,
  titleButton: PropTypes.string
};

export default Items;
