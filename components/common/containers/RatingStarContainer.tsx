import React from 'react';
import { View } from 'react-native';
import Stars from '../RatingStar';

const STAR_FILLED = 'star';
const STAR_EMPTY = 'star-o';

const RatingStar = ({max = 5, rating = 2}) => {
  const emptyStars = max - Math.round(rating);
  return (
    <View style={{display: 'flex', flexDirection: 'row'}}>
      <Stars rating={Math.round(rating)} icon={STAR_FILLED} />
      { emptyStars > 0 ? (<Stars rating={emptyStars} icon={STAR_EMPTY} />) : null }
    </View>
  );
}

export default RatingStar;