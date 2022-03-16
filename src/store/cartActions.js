import {
  INIT_CART,
  INPUT_VALUE,
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAR_ITEM,
} from "./cartConstants";

export const initCart = (items) => ({
  type: INIT_CART,
  payload: items,
});
export const inputValue = (id) => ({
  type: INPUT_VALUE,
  payload: id,
});
export const addItem = (id) => ({
  type: ADD_ITEM,
  payload: id,
});
export const removeItem = (id) => ({
  type: REMOVE_ITEM,
  payload: id,
});
export const clearItem = (id) => ({
  type: CLEAR_ITEM,
  payload: id,
});
