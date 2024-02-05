import React from "react";
import { StyleSheet, View, Animated, Dimensions } from "react-native";

const width = Dimensions.get('screen').width;

const SliderBullets = ({data, scrollX, currentIndex}: any): React.JSX.Element => {
  if (!Array.isArray(data)) {
    return <></>;
  }

  return (
    <View style={styles.container}>
      { data.map((_: any, idx: number) => {
        const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width ]
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 30, 10],
          extrapolate: 'clamp'
        })

        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: ['#287028', '#294B29', '#287028'],
          extrapolate: 'clamp'
        });

        return (
          <Animated.View style={[styles.dot, {width: dotWidth, backgroundColor}]}/>
        );

      })}
    </View>
  )
}

const styles = StyleSheet.create({
  dot: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: "#287028",
    marginRight: 5
  },
  container: {
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10
  },
});

export default SliderBullets;