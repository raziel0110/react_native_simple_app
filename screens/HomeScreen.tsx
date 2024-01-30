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
import useDebounce from '../components/hooks/products/useDebounce';

const BASE_URL = 'https://dummyjson.com/products';

const HomeScreen = (props: {
  navigation: {navigate: (arg0: string, arg1: {itemId: any}) => void};
}): React.JSX.Element => {
  const [searchKey, setSearchKey] = useState('');
  const debounced: string = useDebounce(searchKey, 500);
  const url = searchKey.length > 0 ? `${BASE_URL}/search?q=${debounced}`
  : `${BASE_URL}`;

  const {isLoading, data, hasNextPage, fetchNextPage} = useGetProducts(url);
  const keyExtractor = (_: any, index: number) => index.toString();
  const dataArr = data?.pages?.map(page => page.data.products).flat();

  const showItem = (item: any) => {
    props.navigation.navigate('Item', {
      itemId: item.id,
    });
  };

  const renderLoader = () => {
    return (
      <View>
        <ActivityIndicator size="large"/>
      </View>
    )
  }

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

  return (
    <SafeAreaView>
      <View>
        <View style={styles.filterContainer}>
          <SearchFilter onChangeSearchKey={setSearchKey} />
        </View>
        <FlatList
          data={dataArr}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          onEndReachedThreshold={0}
          onEndReached={() => {
            if (hasNextPage && !isLoading) {
              fetchNextPage()
            }
          }}
          ListFooterComponent={renderLoader}
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
