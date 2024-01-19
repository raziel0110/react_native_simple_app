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
} from 'react-native';
const {width} = Dimensions.get('window');
import {SafeAreaView} from 'react-native-safe-area-context';
import useGetProduct from '../components/hooks/products/useGetProduct';

const ProductScreen = ({route}: any): React.JSX.Element => {
  const id = route.params.itemId;
  const data = useGetProduct(`https://dummyjson.com/products/${id}`);

  const renderItem = ({item}: any) => {
    return (
      <View style={styles.renderItem}>
        <Image source={{uri: item}} style={styles.caruseleImage} />
      </View>
    );
  };

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
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{data.title}</Text>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text style={{fontWeight: 'bold'}}>Description: </Text>
            <Text>{data.description}</Text>
          </View>
        </View>
        <View>
          <Button
            title={'Add to Cart'}
            color="#007AFF"
            onPress={() => alert('Add to cart')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
  },
  title: {
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
