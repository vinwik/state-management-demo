import React, { useReducer, useEffect } from "react";
import CartDetails from "../components/CartDetails/CartDetails";
import CartTotal from "../components/CartTotal/CartTotal";

import styled from "styled-components";

import { initialState, cartReducer } from "../store/cartReducer";
import { initCart } from "../store/cartActions";

// Declared in .env
// Hint: Points to root folder ;)
const API_URL = process.env.REACT_APP_API_URL;

const CartPage = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Simulate fetch from API
  const fetchData = async () => {
    try {
      const res = await fetch(`${API_URL}/data.json`);
      const { products } = await res.json();
      if (res.ok) {
        // Format response
        products.forEach((item) => {
          item.quantity = 1;
          item.price = Number(item.price);
        });

        // Dispatch response to the Cart reducer
        dispatch(initCart(products));
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Fetch data on first load
    fetchData();
  }, []);

  return (
    <StyledCartPage>
      <CartDetails data={state.cartItems} dispatch={dispatch} />
      <CartTotal data={state.cartItems} dispatch={dispatch} />
    </StyledCartPage>
  );
};

const StyledCartPage = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  min-height: 100vh;

  @media screen and (max-width: 1239px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
  }
`;

export default CartPage;
