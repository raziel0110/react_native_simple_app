import React from 'react';
import {useRoute} from '@react-navigation/native';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const ProductScreen = (): React.JSX.Element => {
  const route = useRoute();
  const id = route.params && route.params?.itemId ? route.params.itemId : null;
  return (
    <SafeAreaView>
      <Text>Product ID: {id}</Text>
    </SafeAreaView>
  );
};

export default ProductScreen;
