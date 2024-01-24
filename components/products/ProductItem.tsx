import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { BottomDescription, DescriptionView, ImageContainer, PriceBlock, TitleHeader, ViewContainer } from '../../screens/HomeScreenStyle';
import { Dimensions } from 'react-native';

const width = Dimensions.get('screen').width;

interface CheckoutCart {
  thumbnail: string;
  title: string;
  stock: number;
  price: number;
}

const styles = StyleSheet.create({
  imageContainer: {
    width: 75,
    height: 75,
    borderRadius: 15,
    marginRight: 24,
    shadowColor: '#294B29',
    shadowOpacity: 0.3,
  },
  titleHeader: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  itemContainer: {
    padding: 15,
    display: 'flex',
    width: width, 
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: 'white',
    shadowOpacity: 0.2,
    shadowOffset: {width: 1, height: 7},
    shadowColor: '#294B29',
  },
  descriptionContainer: {
    marginTop: 16,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  }
});

const ProductItem = (props: {item: CheckoutCart}): React.JSX.Element => {
  const {item} = props;
  return (
    <View style={styles.itemContainer}>
      <View>
        <Image source={{uri: item.thumbnail}} resizeMode="cover" style={styles.imageContainer}/>
      </View>
      <View>
        <Text style={styles.titleHeader}>{item.title}</Text>
        <View style={styles.descriptionContainer}>
          <View>
            <BottomDescription>Stock: {item.stock}</BottomDescription>
          </View>
          <View>
            <Text>
              Price:<PriceBlock>{item.price}$</PriceBlock>
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
};

export default ProductItem;