import React, { PropTypes } from 'react';
import { Image, Text, View } from 'react-native';
import Geocoder from 'react-native-geocoder';
import styles from './styles';
import images from '../../config/images';
import Button from '../../components/Button';
import Map from '../../components/Map';



const Geolocator = (props) => {
	return (
		<View style={styles.container}>
		    <Map country={props.currentCountry} countryCode={props.countryCode} back={false} />
		</View>
	);
};

Geolocator.propTypes = {
	currentLatitude: React.PropTypes.number,
	currentLongitude: React.PropTypes.number,
	currentCountry: React.PropTypes.string,
	countryCode: React.PropTypes.string
};

export default Geolocator;