import axios from 'axios';
import React from 'react';
import {useQuery} from 'react-query';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {ViewContainer, ImageContainer} from './HomeScreenStyle';

const ITEMS_URL = 'https://dummyjson.com/products';

const HomeScreen = (): React.JSX.Element => {
  const {isLoading, data} = useQuery('products', async () => {
    return await axios.get(ITEMS_URL);
  });
  const keyExtractor = (_: any, index: number) => index.toString();

  const showItem = (item: any) => {
    console.log(`Test ${item.id}`);
  };

  const renderItem = ({item}: any) => (
    <TouchableOpacity onPress={() => showItem(item)}>
      <ViewContainer>
        <ImageContainer source={{uri: item.images[0]}} />
        <Text>{item.id}</Text>
        <Text>{item.brand}</Text>
      </ViewContainer>
    </TouchableOpacity>
  );

  if (isLoading) {
    return (
      <>
        <Text>Loading..</Text>
      </>
    );
  }

  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={data?.data?.products}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
