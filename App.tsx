import React from 'react';
import {AuthProvider} from './context/AuthContext';
import StackContainer from './navigation/StackContainer';
import {QueryClient, QueryClientProvider} from 'react-query';
const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <StackContainer />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
