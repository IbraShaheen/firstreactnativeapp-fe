import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./components/home"
import { Provider } from 'react-redux';
import store from './store/reducers/';
import ShopList from './components/shopList';
import { NativeBaseProvider } from 'native-base';
import ShopDetail from './components/ShopDetail';



export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
    <View style={styles.container}>
      <Text> Test from app</Text>
      {/* <Text>Open up App.js to start working on your app!</Text> */}

     {/* <Home/> */}
     <ShopList/>
     {/* <ShopDetail/> */}

      <StatusBar style="auto" />
    </View>
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
