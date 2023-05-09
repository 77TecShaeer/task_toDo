
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import RootContainer from './navigations/AppRoot/RootContainer';
import { persistor, store } from './redux/store';
import 'react-native-gesture-handler';


const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer onReady={() => SplashScreen.hide()} >
                    <RootContainer />
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
};

export default App;
