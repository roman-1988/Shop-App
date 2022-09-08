import {useContext} from "react";
import {ShopContext} from "../context";
import BasketItem from "./BasketItem";

const BasketList = () => {
    const {
        order = [], 
        handleBasketShow = Function.prototype,
    } = useContext(ShopContext);

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0);

    return (
        <ul className="collection basket-list">
        <li className="collection-item active">Корзина</li>
        {
            order.length ? order.map(item => (
                <BasketItem key={item.id} 
                 {...item}
                />
            )) : <li className="collection-item">Корзина пуста</li>
        }
        <li className="collection-item active">Общая стоимость: {totalPrice} руб.</li>
        <li className="collection-item">
        <button className="btn btn-small">Оформить</button>
        </li>
        <i className="material-icons basket-close" onClick={handleBasketShow}>close</i>
      </ul>
    );
}

export default BasketList;

