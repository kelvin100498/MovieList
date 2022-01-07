import React, {useEffect} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import Router from './Router';
import SplashScreen from 'react-native-splash-screen';
import {COLOR} from './src/config/color';
import {Provider} from 'react-redux';
import {Store} from './src/store/store';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: COLOR.red,
    background: COLOR.black,
    card: COLOR.black,
    text: 'white',
    border: COLOR.black,
  },
};

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={Store}>
      <NavigationContainer theme={MyTheme}>
        <Router />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
