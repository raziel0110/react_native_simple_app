import React from 'react';
import {AuthProvider} from './context/AuthContext';
import TabContainer from './components/navigation/TabContainer';
import {QueryClient, QueryClientProvider} from 'react-query';
const queryClient = new QueryClient();
import { Provider } from 'react-redux';
import {store} from './store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <GestureHandlerRootView style={{flex: 1}}>
            <TabContainer />
          </GestureHandlerRootView>
        </AuthProvider>
      </QueryClientProvider>
    </Provider>
  
  );
}

export default App;
