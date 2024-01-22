import React from 'react';
import {Text, View, SafeAreaView, Platform, ActivityIndicator, Image, StyleSheet} from 'react-native';
import {useAuth} from '../context/AuthContext';
import RedirectLoginContainer from '../components/common/containers/RedirectLoginContainer';
import { useGetUser } from '../components/hooks/products/useGetUser';
import { ImageContainer } from './Account/AccountScreenStyle';

const TestScreen = (
  props: {
    navigation: {navigate: (arg0: string, arg1: {screen: any}) => void};
    route: {name: any};
  }
): React.JSX.Element => {
  const {authState}: any = useAuth();
  const action = () => {
    props.navigation.navigate('Login', {screen: props.route.name});
  };
  const message = "To access your profile please login to your account"

  if (!authState.authenticated) {
    return <RedirectLoginContainer action={action} isIos={Platform.OS === 'ios'} message={message}/>
  }

  const {isLoading, isFetching, data} = useGetUser(authState.token);
  console.log(data.data);

  if (isFetching) {
    return <ActivityIndicator color="blue"/>
  }

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View style={{height: 220}}>
        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
          <Image source={{uri: data?.data?.image}} resizeMode="cover" style={styles.image}/>
        </View>
        <View style={{marginTop: 30, display: 'flex', alignItems: 'center'}}>
          <Text style={{fontSize: 22, color: '#294B29'}}>{data?.data.company.title}</Text>
          <Text style={{fontSize: 12, color: '#294B29', fontWeight: '400'}}>{data?.data.company.department}</Text>
        </View>
      </View>
      <View style={{height:400, backgroundColor: '#294B10'}}>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#294B29",
    padding:20
  }
})

export default TestScreen;
