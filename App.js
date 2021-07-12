import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./components/home"
import { Provider } from 'react-redux';
import store from './store/reducers/';
import ShopList from './components/shopList';
import { NativeBaseProvider } from 'native-base';
import ShopDetail from './components/ShopDetail';

import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from './components/Navigation';


export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>

    {/* <View style={styles.container}> */}
      <NavigationContainer>

        <StackNavigator/>

     {/* <Home/>
     <ShopList/>
     <ShopDetail/> */}
     </NavigationContainer>
    {/* </View> */}
      <StatusBar style="auto" />
    </NativeBaseProvider>

    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
