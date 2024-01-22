import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  Button,
  ActivityIndicator,
} from 'react-native';
const {width} = Dimensions.get('window');
import {SafeAreaView} from 'react-native-safe-area-context';
import useGetProduct from '../components/hooks/products/useGetProduct';
import IosButton from '../components/common/IosButton';
import RatingStar from '../components/common/containers/RatingStarContainer';
import { useDispatch, useSelector } from 'react-redux';
import { addToCard } from '../context/features/checkoutSlice';

const ProductScreen = ({route}: any): React.JSX.Element => {
  const dispatch = useDispatch();
  const id = route.params.itemId;
  const data: any = useGetProduct(`https://dummyjson.com/products/${id}`);

  const addToCart = () => {
    dispatch(addToCard(data))
  }

  const renderItem = ({item}: any) => {
    return (
      <View style={styles.renderItem}>
        <Image source={{uri: item}} style={styles.caruseleImage} />
      </View>
    );
  };

  if (!data) {
    return <ActivityIndicator />
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.imageContainer}>
          <FlatList
            data={data.images}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            keyExtractor={item => item}
            renderItem={renderItem}
          />
        </View>
        <View>
          <Text style={styles.title}>{data.title}</Text>
        </View>
        <View style={{display:'flex', flexDirection:'row', justifyContent: 'space-around', marginTop: 10}}>
          <View>
            <Text style={styles.text}>Rating:({data.rating})</Text>
            <RatingStar rating={data.rating} />
          </View>
          <View>
            <Text style={styles.text}>
              Stock: {data.stock}
            </Text>
          </View>
          <View>
            <Text style={styles.text}>Price: {data.price}$</Text>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: 7}}>
            <Text style={{fontWeight: 'bold'}}>Description: </Text>
            <Text>{data.description}</Text>
          </View>
        </View>
        <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <IosButton action={addToCart} text="Add to Cart" color={{backgroundColor:'#294B29'}} icon="shopping-cart" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#294B29", 
    fontWeight: 'bold'
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    aspectRatio: 2,
  },
  caruseleImage: {
    width: '60%',
    height: width * 0.6,
  },
  infoContainer: {
    padding: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    marginTop: 5,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  renderItem: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '90%',
    height: 30,
    backgroundColor: '#8ECAE6',
  },
});

export default ProductScreen;
