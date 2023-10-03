import { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCardButton.module.css";

const HeaderCardButton = (props) => {
  const [btnIsAnimated, setBtnIsAnimated] = useState(false)
  const cartCtx = useContext(CartContext)

  const { items } = cartCtx

  const numerOfCartItems = items.reduce((actualNumber, item) => {
    return actualNumber + item.amount
  }, 0)

  const btnClasses = `${classes.button} ${btnIsAnimated ? classes.bump : ''}`

  useEffect( () => {
    if(items.length === 0){
      return
    }
    setBtnIsAnimated(true)

    const timer = setTimeout(() => {
      setBtnIsAnimated(false)
    }, 300)

    return () => {
      clearTimeout(timer)
    }

  }, [items])

  return (
    <button className={btnClasses} onClick={props.onClick} > 
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numerOfCartItems}</span>
    </button>
  );
};

export default HeaderCardButton;
