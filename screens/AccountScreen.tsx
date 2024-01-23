import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Platform,
  ActivityIndicator,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import {useAuth} from '../context/AuthContext';
import RedirectLoginContainer from '../components/common/containers/RedirectLoginContainer';
import {useGetUser} from '../components/hooks/products/useGetUser';

const TestScreen = (props: {
  navigation: {navigate: (arg0: string, arg1: {screen: any}) => void};
  route: {name: any};
}): React.JSX.Element => {
  const {authState}: any = useAuth();
  const action = () => {
    props.navigation.navigate('Login', {screen: props.route.name});
  };
  const message = 'To access your profile please login to your account';

  if (!authState.authenticated) {
    return (
      <RedirectLoginContainer
        action={action}
        isIos={Platform.OS === 'ios'}
        message={message}
      />
    );
  }

  const {isFetching, data} = useGetUser(authState.token);
  console.log(data?.data);

  if (isFetching) {
    return <ActivityIndicator color="blue" />;
  }

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View style={{height: 220}}>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <Image
            source={{uri: data?.data?.image}}
            resizeMode="cover"
            style={styles.image}
          />
        </View>
        <View style={{marginTop: 30, display: 'flex', alignItems: 'center'}}>
          <Text style={{fontSize: 22, color: '#294B29'}}>
            {data?.data.company.title}
          </Text>
          <Text style={{fontSize: 12, color: '#294B29', fontWeight: '400'}}>
            {data?.data.company.department}
          </Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.innerBottomContainer}>
          <Text style={styles.header}>Details</Text>
          <Text style={styles.textLabel}>First name & Last name</Text>
          <TextInput
            value={`${data?.data.lastName} ${data?.data.lastName}`}
            style={styles.inputName}
          />
          <Text style={[styles.textLabel, styles.common]}>Email</Text>
          <TextInput style={styles.inputName} value={data?.data.email} />
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              flexDirection: 'row',
            }}>
            <View>
              <Text style={[styles.textLabel, styles.common]}>Phone</Text>
              <TextInput
                value={data?.data.phone}
                style={[styles.inputName, {width: 150}]}
              />
            </View>
            <View style={{marginTop: 10}}>
              <Text style={styles.textLabel}>Username</Text>
              <TextInput
                value={data?.data.username}
                style={[styles.inputName, {width: 150}]}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 150 / 2,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#294B29',
    padding: 20,
  },
  bottomContainer: {
    height: 600,
    marginTop: 50,
    backgroundColor: '#294B10',
    opacity: 0.7,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
  },
  innerBottomContainer: {
    marginTop: 50,
    width: 350,
    display: 'flex',
    justifyContent: 'center',
  },
  header: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'sans-serif',
    marginBottom: 15,
    color: 'white',
  },
  inputName: {
    width: 300,
    height: 40,
    padding: 10,
    fontSize: 20,
    color: 'white',
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 1,
    marginLeft: 40,
  },
  textLabel: {
    marginLeft: 45,
    paddingBottom: 5,
    color: 'lightgray',
  },
  common: {
    marginTop: 10,
  },
});

export default TestScreen;
