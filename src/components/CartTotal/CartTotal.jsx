import React from "react";

import styled from "styled-components";
import Button from "../Button/Button";

import { priceCount } from "../../utils/cartUtils";

import PropTypes from "prop-types";

const CartTotal = ({ data }) => {
  const subtotal = priceCount(data);
  const vat = subtotal * 0.2;
  const total = subtotal + vat;

  return (
    <StyledCartTotal>
      <h2>Order Summary</h2>
      <div className="cart-total__details">
        <div className="cart-total__subtotal">
          <p>Subtotal</p>
          <div>
            <span>£</span>
            <span>{subtotal.toFixed(2)}</span>
          </div>
        </div>
        <div className="cart-total__vat">
          <p>VAT 20%</p>
          <div>
            <span>£</span>
            <span>{vat.toFixed(2)}</span>
          </div>
        </div>
        <div className="cart-total__total">
          <p>Total</p>
          <div>
            <span>£</span>
            <span>{total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      <Button>Checkout</Button>
    </StyledCartTotal>
  );
};

const StyledCartTotal = styled.div`
  background-color: var(--primary-color);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  color: var(--white);
  display: flex;
  flex-direction: column;

  h2,
  .cart-total__details {
    padding: 3rem;
  }

  .cart-total__details {
    padding-top: 1rem;
  }

  .cart-total__subtotal,
  .cart-total__vat,
  .cart-total__total {
    display: flex;
    justify-content: space-between;
    padding: 0 0 2rem;
    text-transform: uppercase;
  }

  button {
    margin-top: auto;
  }

  @media screen and (min-width: 1240px) {
    position: sticky;
    top: 0;
    height: 100vh;
  }

  @media screen and (max-width: 1023px) {
    h2,
    .cart-total__details {
      padding: 1.6rem 1.2rem;
    }
  }
`;

// Checking Data price and quantity types
CartTotal.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      price: PropTypes.number,
      quantity: PropTypes.number,
    })
  ),
};

export default CartTotal;
