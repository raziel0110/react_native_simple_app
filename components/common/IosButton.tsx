import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3A86FF',
    width: 300,
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  textInfo: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '700',
  },
  touchableContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const IosButton = ({text, action, color, icon = "user"}: any) => {
  const containerCss = color ? {...styles.container, ...color} : styles.container
  return (
    <View style={containerCss}>
      <TouchableOpacity onPress={action} style={styles.touchableContainer}>
        <FontAwesomeIcon
          name={icon}
          size={14}
          color="white"
          style={{marginRight: 3}}
        />
        <Text style={styles.textInfo}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default IosButton;
