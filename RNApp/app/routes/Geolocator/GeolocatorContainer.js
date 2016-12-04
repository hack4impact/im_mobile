import React, { Component } from 'react';
import Meteor, { createContainer } from 'react-native';
import Geolocator from './Geolocator';

class GeolocatorContainer extends Component {
  constructor() {
    super();
    this.state = { currentLatitude: 'Unknown', currentLongitude: 'Unknown' }
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var location_lat = position.coords.latitude;
        var location_lng = position.coords.longitude;
        this.setState({currentLatitude: location_lat});
        this.setState({currentLongitude: location_lng});
      },
      (error) => {
        alert(JSON.stringify(error));
        this.currentLocation = 'Error in obtaining location';
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );    
  }

  render() {
  	return (
  		<Geolocator 
  			currentLatitude={this.state.currentLatitude}
        currentLongitude={this.state.currentLongitude}
  		/>
  	);
  }  	
}

GeolocatorContainer.propTypes = {
	currentLatitude: React.PropTypes.String,
  currentLongitude: React.PropTypes.String
};

export default GeolocatorContainer;