import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {
  ViewContainer,
  ImageContainer,
  DescriptionView,
  BottomDescription,
  PriceBlock,
} from './HomeScreenStyle';
import {useGetProducts} from '../components/hooks/products/useGetProducts';

const HomeScreen = (props: {
  navigation: {navigate: (arg0: string, arg1: {itemId: any}) => void};
}): React.JSX.Element => {
  const {isLoading, isFetching, data} = useGetProducts();
  const keyExtractor = (_: any, index: number) => index.toString();

  const showItem = (item: any) => {
    props.navigation.navigate('Item', {
      itemId: item.id,
    });
  };

  const renderItem = ({item}: any) => (
    <TouchableOpacity onPress={() => showItem(item)}>
      <ViewContainer>
        <View>
          <ImageContainer source={{uri: item.thumbnail}} resizeMode="cover" />
        </View>
        <View>
          <Text>{item.title}</Text>
          <DescriptionView>
            <View>
              <BottomDescription>Stock: {item.stock}</BottomDescription>
            </View>
            <View>
              <Text>
                Price:
                <PriceBlock>{item.price}$</PriceBlock>
              </Text>
            </View>
          </DescriptionView>
        </View>
      </ViewContainer>
    </TouchableOpacity>
  );

  if (isLoading || isFetching) {
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
