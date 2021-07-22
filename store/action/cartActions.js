import React from "react";
import instance from "./instance";
import { ADD_ITEM, CHECK_OUT, DELETE_ITEM } from "./types";

export const addToCart = (newItem) => ({
  type: ADD_ITEM,
  payload: newItem,
});

export const deleteFromCart = (productId) => ({
  type: DELETE_ITEM,
  payload: productId,
});

export const checkoutCart = (items) => async(dispatch)=>{
  // const res = await instance.post("/checkout", items)
  await instance.post("/checkout", items)

  console.log(items)
  dispatch({
    type: CHECK_OUT,
    payload: [],

  })

};