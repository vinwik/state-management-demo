import React from "react";
import styled from "styled-components";
import {
  inputValue,
  addItem,
  removeItem,
  clearItem,
} from "../../store/cartActions";

import PropTypes from "prop-types";

// Create array from 1 to 9 for select options
const quantityArray = Array.from(Array(9)).map((v, i) => i + 1);

const CartItem = ({ id, name, image, category, price, quantity, dispatch }) => {
  // Converting output amount to string with 2 decimals prevents javascript float issue
  const amount = (price * quantity).toFixed(2);

  const handleChange = (e) => {
    // Converting value to number
    const value = Number(e.target.value);
    dispatch(inputValue({ id, quantity: value }));
  };

  return (
    <StyledCartItem>
      <img src={image} alt={name} width="200" />
      <div className="cart-item__details">
        <p>{name}</p>
        <span>{category}</span>
      </div>
      <div className="cart-item__counter">
        <button
          disabled={!Boolean(quantity > 1)}
          onClick={() => dispatch(removeItem(id))}
          className="button--counter"
        >
          &#8722;
        </button>
        <span className="cart-item__quantity">{quantity}</span>
        <button
          disabled={!Boolean(quantity < 9)}
          onClick={() => dispatch(addItem(id))}
          className="button--counter"
        >
          &#43;
        </button>
      </div>
      <select
        value={quantity || 1}
        onChange={handleChange}
        className="cart-item__select"
      >
        {quantityArray.map((value) => (
          <option key={value}>{value}</option>
        ))}
      </select>
      <div className="cart-item__amount">
        <span>£</span>
        <span>{amount}</span>
      </div>
      <button
        onClick={() => dispatch(clearItem(id))}
        className="button--remove"
      >
        Remove
      </button>
    </StyledCartItem>
  );
};

const StyledCartItem = styled.div`
  display: grid;
  grid-template-columns: 150px 2fr repeat(3, 125px);
  align-items: center;
  gap: 1.2em;
  margin: 2em 0;

  img {
    width: 150px;
  }

  p {
    font-weight: 600;
  }

  .cart-item__counter,
  .button--remove,
  .cart-item__amount {
    margin: 0 auto;
  }

  .cart-item__select {
    display: none;
  }

  button {
    font-size: 1rem;
    border: none;
    background-color: transparent;
  }

  button:not(:disabled) {
    cursor: pointer;
  }

  .button--counter {
    padding: 4px 8px;
    background-color: var(--secondary-color);
    border-radius: 50%;
  }

  .button--counter:disabled {
    background-color: var(--light-grey);
  }

  .cart-item__quantity {
    margin: 0 1rem;
  }

  .button--remove:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 1023px) {
    grid-template-columns: 100px 2fr 70px;
    gap: 0.8em;

    img {
      grid-row: 1/3;
      width: 100px;
    }

    .cart-item__select,
    .cart-item__amount {
      margin: 0;
      margin-left: auto;
    }

    .cart-item__amount {
      grid-column: 3/4;
      justify-self: flex-end;
    }

    .cart-item__counter {
      display: none;
    }

    .cart-item__select {
      display: block;
      width: 35px;
      height: 35px;
      padding: 2px;
      text-align: center;
    }

    .button--remove {
      grid-column: 2/3;
      grid-row: 2/3;
      justify-self: flex-start;
      margin: 0;
      margin-right: auto;
    }
  }
`;

// Checking Data price and quantity types
CartItem.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  dispatch: PropTypes.func,
};

export default CartItem;
