import React from "react";
import { StyleSheet, View, Animated, Dimensions } from "react-native";

const width = Dimensions.get('screen').width;

const PageBullets = ({data, scrollX}: any) => {
  if (!Array.isArray(data)) {
    return null;
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
        return (
          <Animated.View style={[styles.dot, {width: dotWidth}]} key={idx.toString()}/>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  dot: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: "#294B29",
    marginRight: 5
  },
  container: {
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10
  }
})

export default PageBullets;