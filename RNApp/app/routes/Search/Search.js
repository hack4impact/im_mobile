import React from 'react';
import { Text, View } from 'react-native';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import styles from './styles';

const Search = (props) => {
  return (
    <View style={styles.container}>
    <Header/>
      <SearchBar
      />
    </View>
  );
};

Search.propTypes = {
  onDetailsPress: React.PropTypes.func,
};

export default Search;
