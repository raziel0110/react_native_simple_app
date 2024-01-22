import React from 'react';
import {View} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const Stars = ({rating, icon}: any) => {
  const filled = icon === 'star';

  return (
    <View style={{display: 'flex', flexDirection: 'row'}}>
      {Array(rating).fill(1).map((_el, idx) => {
        return <FontAwesomeIcon name={icon} key={idx} color={filled ? '#FFA732' : '#294B29'}/>
      })}
    </View>
  );
}

export default Stars;