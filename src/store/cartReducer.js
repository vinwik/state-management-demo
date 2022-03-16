import {
  INIT_CART,
  INPUT_VALUE,
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAR_ITEM,
} from "./cartConstants";
import {
  amendInputValue,
  addItemToCart,
  removeItemFromCart,
} from "../utils/cartUtils";

export const initialState = {
  cartItems: [],
};

export const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case INIT_CART:
      return {
        ...state,
        cartItems: payload,
      };
    case INPUT_VALUE:
      return {
        ...state,
        cartItems: amendInputValue(state.cartItems, payload),
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, payload),
      };
    case CLEAR_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== payload
        ),
      };
    default:
      return state;
  }
};
