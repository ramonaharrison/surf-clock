import React, {Component} from 'react';
import Form from './Form.js'
import LocationList from './LocationList.js'

class LocationChooser extends Component {

state = {
  locations: [],
  selectedIndex: 0
};

handleSubmit = location => {
  if (location) {
    console.log("New location submitted: " + location);
    this.setState(prevState => ({
      locations: [...prevState.locations, location],
      selectedIndex: prevState.locations.size
    }));
    this.props.onLocationChange(location)
  }
};

handleLocationChange = location => {
  console.log("Location changed: " + location);
  this.setState(prevState => ({
    selectedIndex: prevState.locations.indexOf(location)
  }));
  this.props.onLocationChange(location)
}

  render() {
    return (
      <div className="LocationChooser">
        <Form onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default LocationChooser;
