import React from "react";
import LocationListItem from "./LocationListItem";

const LocationList = props => {
  const locations = props.locations.map((d, i) => {
    return (
      <LocationListItem
        handleLocationChange={props.handleLocationChange}
        location={d}
        key={i}
      />
    );
  });
  console.log(locations);
  return <ul id="switcher">{locations}</ul>;
};

export default LocationList;
