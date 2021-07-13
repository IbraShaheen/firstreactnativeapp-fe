import { ADD_ITEM, CHECK_OUT, DELETE_ITEM } from "../action/types";

const initialState = {
  items: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const newProduct = action.payload;
      const foundProduct = state.items.find(
        (item) => item.productId === newProduct.productId
      );
      if (foundProduct)
        return {
          ...state,
          items: state.items.map((item) =>
            item === foundProduct ? newProduct : item
          ),
        };
      else
        return {
          ...state,
          items: [...state.items, { ...newProduct }],
        };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.productId !== action.payload),
      };
    case CHECK_OUT:
      return {
        ...state,
        items: [],
      };

    default:
      return state;
  }
};

export default reducer;