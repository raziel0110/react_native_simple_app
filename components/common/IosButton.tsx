import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

const IosButton = ({text, action}: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={action}>
        <Text style={styles.textInfo}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3A86FF',
    width: 150,
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  textInfo: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '700',
  },
});

export default IosButton;
