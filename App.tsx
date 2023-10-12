import React from 'react';
import RootNavigation from './navigation/RootNavigation';
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          <RootNavigation/>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
