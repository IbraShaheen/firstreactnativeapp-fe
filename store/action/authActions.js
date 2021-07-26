import { SET_USER } from "./types";
import instance from "./instance";
import decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CART_LIST } from "../../components/Navigation/types";



export const signup = (userData, navigation) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signup", userData);
      dispatch(setUser(res.data.token));
      navigation.navigate(CART_LIST);
    } catch (error) {
      console.log(error.message);
    }
  };
};


export const signin = (userData, navigation) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signin", userData);
      dispatch(setUser(res.data.token));
      // console.log(res.data.token);
      navigation.goBack();
    } catch (error) {
      console.log(error.message);
    }
  };
};


export const signout = () => {
  return setUser();
};


export const checkForToken = async (dispatch) => {
  //    token = localStorage.getItem("myToken")

  const token = await AsyncStorage.getItem("myToken");

  if (token) {
    //check if token expiered or not when the user refresh the page
    const currentTime = Date.now();
    const user = decode(token);
    if (user.exp > currentTime) return dispatch(setUser(token));
  }
  dispatch(setUser());
};

const setUser = (token) => async (dispatch) => {
  if (token) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;

    await AsyncStorage.setItem("myToken", token);

    return dispatch({
      type: SET_USER,
      //decode enable me to see what is inside the toke it self(the payload that i make it inside the BE, so it is an object)
      payload: decode(token),
    });
  } else {
    delete instance.defaults.headers.common.Authorization;

    await AsyncStorage.removeItem("myToken");
    return dispatch({
      type: SET_USER,
      payload: null,
    });
  }
};