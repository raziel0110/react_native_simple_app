import React from 'react'
import {StyleSheet, Text, View} from 'react-native';

interface BadgeUI {
  items: number;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red', 
    position:'relative',
    top: 0,
    right: 3,
    height: 14,
    width: 14,
    borderRadius: 50
  },
  text: {
    color: 'white',
    fontSize: 10,
    textAlign: 'center'
  },
});

const Badge = ({items}: BadgeUI ) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{items}</Text>
    </View>
  );
};

export default Badge;