import React from 'react';
import { StyleSheet, Text, View, Image, Animated, TouchableOpacity, Button } from 'react-native';
import { BottomDescription, PriceBlock } from '../../screens/HomeScreenStyle';
import { Dimensions } from 'react-native';
import { Swipeable, TextInput } from 'react-native-gesture-handler';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';
import { removeItemCart, addQuantity, removeQuantity } from '../../context/features/checkoutSlice';


const width = Dimensions.get('screen').width;

interface CheckoutCart {
  thumbnail: string;
  title: string;
  stock: number;
  price: number;
  quantity: number;
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
    fontSize: 18,
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
    marginTop: 8,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  quantityButton: {
    marginLeft: 10,
    marginRight: 10,
    height: 20,
    width: 30,
    backgroundColor: '#294B29',
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  quantityText: {
    color: 'white',
    fontWeight: '700',
  }
});

const ProductItem = (props: {item: CheckoutCart}): React.JSX.Element => {
  const {item} = props;
  const dispatch = useDispatch();

  const onDeleteItem = () => {
    dispatch(removeItemCart(item));
  }

  const onRemoveQuantity = () => {
    dispatch(removeQuantity(item));
  }

  const onAddQuantity = () => {
    dispatch(addQuantity(item));
  }

  const rightSwipe = (_progress: string | number, dragX: { interpolate: (arg0: { inputRange: number[]; outputRange: number[]; extrapolate: string; }) => any; }) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    })
    return (
      <TouchableOpacity onPress={onDeleteItem}>
        <View style={{backgroundColor: 'rgba(255,99,125, 0.7)', height: 105, width: 60, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Animated.Text style={{transform: [{scale: scale}]}}>
            <FontAwesomeIcon name="trash" size={30} color="white" />
          </Animated.Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <Swipeable renderLeftActions={rightSwipe}>
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
          <View style={{marginTop: 5}}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Text>Quantity: </Text>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <TouchableOpacity onPress={onRemoveQuantity} style={styles.quantityButton}>
                  <Text style={styles.quantityText}>-</Text>
                </TouchableOpacity>
                <Text>{item.quantity}</Text>
                <TouchableOpacity onPress={onAddQuantity} style={styles.quantityButton}>
                  <Text style={styles.quantityText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Swipeable>
  )
};

export default ProductItem;