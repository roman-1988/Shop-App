import {useContext} from "react";
import {ShopContext} from "../context";

const Cart = () => {
 const {order, handleBasketShow = Function.prototype} = useContext(ShopContext);

 const quantity = order.length;
 return (
    <div className="cart orange accent-3 white-text" onClick={handleBasketShow}>
        <i className="material-icons">local_grocery_store</i>
        {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
 )
}

export default Cart;