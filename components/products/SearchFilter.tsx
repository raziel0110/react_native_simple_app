import React, {useEffect, useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import useDebounce from '../hooks/products/useDebounce';

const SearchFilter = ({onChangeSearchKey}: any) => {
  const [value, setValue] = useState<string>();
  const debounced = useDebounce(value, 500);

  useEffect(() => {
    if (debounced) {
      onChangeSearchKey(debounced);
    }
  }, [debounced, onChangeSearchKey]);

  return (
    <View style={style.searchContainer}>
      <TextInput
        placeholder="Search Product"
        style={style.inputContainer}
        onChangeText={val => setValue(val)}
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
