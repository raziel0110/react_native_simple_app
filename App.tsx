import React from 'react';
import {AuthProvider} from './context/AuthContext';
import TabContainer from './navigation/TabContainer';
import {QueryClient, QueryClientProvider} from 'react-query';
const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TabContainer />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
