import React from "react";
import {TextInput, View} from "react-native";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const SearchFilter = () => {
  return (
    <View>
      <TextInput placeholder="Search Product">
        <FontAwesomeIcon name="search" size={20} color="lightgray" />
      </TextInput>
    </View>
  );
};

export default SearchFilter;
