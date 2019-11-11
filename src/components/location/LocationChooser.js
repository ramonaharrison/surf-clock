import React, {useState, useEffect} from 'react';
import Form from './Form.js'

const LocationChooser = (props) => {

  const [location, setLocation] = useState("Rockaway Beach, NY");

  useEffect(() => {
    props.onLocationChange(location);
  });

  const handleSubmit = location => {
    if (location) {
      setLocation(location)
    }
  };

  return (
    <div className="LocationChooser">
    <Form input={location} onSubmit={handleSubmit}/>
    </div>
  );
}

export default LocationChooser;
