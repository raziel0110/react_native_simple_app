import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {
  ViewContainer,
  ImageContainer,
  DescriptionView,
  BottomDescription,
  PriceBlock,
  TitleHeader,
} from './HomeScreenStyle';
import SearchFilter from '../components/products/SearchFilter';
import {useGetProducts} from '../components/hooks/products/useGetProducts';

const HomeScreen = (props: {
  navigation: {navigate: (arg0: string, arg1: {itemId: any}) => void};
}): React.JSX.Element => {
  const [searchKey, setSearchKey] = useState('');
  const {isLoading, isFetching, data} = useGetProducts(searchKey);
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
          <TitleHeader>{item.title.substring(0,30)}</TitleHeader>
          <DescriptionView>
            <View>
              <BottomDescription>Stock: {item.stock}</BottomDescription>
            </View>
            <View>
              <Text>
                Price:<PriceBlock>{item.price}$</PriceBlock>
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
        <View style={styles.spinner}>
          <ActivityIndicator />
        </View>
      </>
    );
  }

  return (
    <SafeAreaView>
      <View>
        <View style={styles.filterContainer}>
          <SearchFilter onChangeSearchKey={setSearchKey} />
        </View>
        <FlatList
          data={data?.data?.products}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    marginTop: 5,
    marginBottom: 7,
    marginLeft: 10,
    padding: 10,
    backgroundColor: '#fff',
    width: '95%',
    borderRadius: 10,
  },
  spinner: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default HomeScreen;
