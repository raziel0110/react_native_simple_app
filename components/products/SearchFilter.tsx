import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const SearchFilter = ({onChangeSearchKey}: any) => {
  return (
    <View style={style.searchContainer}>
      <TextInput
        placeholder="Search Product"
        style={style.inputContainer}
        onChangeText={val => onChangeSearchKey(val)}
      />
      <FontAwesomeIcon
        name="search"
        size={20}
        color="lightgray"
        style={style.searchIcon}
      />
    </View>
  );
};

const style = StyleSheet.create({
  searchContainer: {
    position: 'relative',
  },
  searchIcon: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  inputContainer: {
    marginLeft: 25,
    fontSize: 16,
    color: 'gray',
  },
});

export default SearchFilter;
