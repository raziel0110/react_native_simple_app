import React from 'react';
import {AuthProvider} from './context/AuthContext';
import StackContainer from './navigation/StackContainer';

function App(): React.JSX.Element {
  return (
    <AuthProvider>
      <StackContainer />
    </AuthProvider>
  );
}

export default App;
