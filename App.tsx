import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabContainer from './navigation/TabContainer';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <TabContainer />
    </NavigationContainer>
  );
}

export default App;
