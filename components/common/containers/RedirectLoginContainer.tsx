import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import IosButton from '../IosButton';

import AndroidButton from '../AndroidButton';

const RedirectLoginContainer = (props: any): React.JSX.Element => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.unauthenticatedInfo}>
          <Text>
            {props.message || "To access your checkout page please login to your account"}
          </Text>
        </View>
        {props.isIos ? (
          <IosButton text="Login" action={props.action} />
        ) : (
          <AndroidButton goTo={props.action} title="Login" />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    unauthenticatedInfo: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default RedirectLoginContainer;