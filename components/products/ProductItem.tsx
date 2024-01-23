import React from 'react';
import { Text, View } from 'react-native';
import { BottomDescription, DescriptionView, ImageContainer, PriceBlock, TitleHeader, ViewContainer } from '../../screens/HomeScreenStyle';

interface CheckoutCart {
  thumbnail: string;
  title: string;
  stock: number;
  price: number;
}

const ProductItem = ({item}: any): React.JSX.Element => {
  return (
    <ViewContainer>
      <View>
        <ImageContainer source={{uri: item.thumbnail}} resizeMode="cover" />
      </View>
      <View>
        <TitleHeader>{item.title}</TitleHeader>
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
  )
};

export default ProductItem;