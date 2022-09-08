import {useContext} from "react";
import {ShopContext} from "../context";

const BasketItem = (props) => {
    const {id,  
           name,
           price,
           quantity,
    } = props;

    const {removeFromBasket, incQuantity, decQuantity } = useContext(ShopContext);

    return (
        <div>
            <li className="collection-item">
            {name} <i className="material-icons basket-quantity" onClick={() => decQuantity(id)}>remove</i> x{quantity}{" "} 
            <i className="material-icons basket-quantity" onClick={() => incQuantity(id)}>add</i> = {price * quantity} руб.
            <span className="secondary-content"
            onClick={() => removeFromBasket(id)}
            >
                <i className="material-icons basket-delete">close</i></span>
            </li>
        </div>
     
    )
}

export default BasketItem;