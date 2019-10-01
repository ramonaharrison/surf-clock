import React from "react";

const LocationListItem = props => {
  return (
    <li
    className="mdc-chip-set mdc-chip-set--choice"
    onClick={() => props.handleLocationChange(props.location)}>
      <button className="mdc-chip">
        <span className="mdc-chip__text">{props.location}</span>
      </button>
    </li>
  );
};

export default LocationListItem;
