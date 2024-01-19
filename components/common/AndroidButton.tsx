import React from 'react';
import {Button, View} from 'react-native';

const AndroidButton = (props: any): React.JSX.Element => {
  return (
    <View>
      <Button onPress={props.goTo} title={props.title}></Button>
    </View>
  );
};

export default AndroidButton;
