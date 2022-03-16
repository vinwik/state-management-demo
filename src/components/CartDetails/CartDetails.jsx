import React from "react";
import styled from "styled-components";
import CartItem from "../CartItem/CartItem";

const CartDetails = ({ data, dispatch }) => {
  return (
    <StyledCartDetails>
      <h2>Shopping Cart</h2>
      {data.map((item) => (
        <CartItem key={item.id} {...item} dispatch={dispatch} />
      ))}
    </StyledCartDetails>
  );
};

const StyledCartDetails = styled.div`
  padding: 3rem;

  @media screen and (max-width: 1023px) {
    padding: 1.6rem 1.2rem;
  }
`;

export default CartDetails;
