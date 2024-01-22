import React from 'react'
import { Text, View } from 'react-native';

interface BadgeUI {
  items: number;
}

const Badge = ({items}: BadgeUI ) => {
  return (
    <View style={{
      backgroundColor: 'red', 
      position:'relative',
      top: 0,
      right: 3,
      height: 14,
      width: 14,
      borderRadius: 50
    }}>
      <Text style={{color: 'white', fontSize: 10, textAlign: 'center'}}>{items}</Text>
    </View>
  )
}

export default Badge;