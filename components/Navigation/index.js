import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CART_LIST, HOME, PRODUCTDETAIL, SHOPDETAIL, SHOPLIST } from "./types";

import Home from "../home";
import ShopList from "../shopList";
import ShopDetail from "../ShopDetail";
import ProductDetail from "../ShopDetail/ProductDetail";
import CartList from "../CartList";
import CartButton from "../Buttons/CartButton";

const StackNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator
      initialRouteName={HOME}
      screenOptions={{
        headerStyle: {
          backgroundColor: "#023047",
        },
        headerTintColor: "white",

        cardStyle: {
          backgroundColor: "#219ebc",
        },
        // headerTransparent:true
      }}
    >
      <Screen name={HOME} component={Home} options={{ headerShown: false }} />

      <Screen
        name={SHOPLIST}
        component={ShopList}
        options={{ title: "Shops",
        headerRight:() => (<CartButton/>) }}
      />

      <Screen
        name={SHOPDETAIL}
        component={ShopDetail}
        options={({ route }) => {
          return { headerTitle: route.params.shop.name,
          headerRight:() => (<CartButton/>) };
        }}
      />

      <Screen
        name={PRODUCTDETAIL}
        component={ProductDetail}
        options={({ route }) => {
          return { headerTitle: route.params.product.name };
        }}
      />

      <Screen name={CART_LIST} component={CartList} />
    </Navigator>
  );
};

export default StackNavigator;
