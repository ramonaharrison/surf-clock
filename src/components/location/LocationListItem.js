import React from "react";

const LocationListItem = props => {
  return (
    <li
    onClick={() => props.handleLocationChange(props.location)}>
      <button>
        <span>{props.location}</span>
      </button>
    </li>
  );
};

export default LocationListItem;
