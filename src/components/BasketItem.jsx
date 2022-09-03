const BasketItem = (props) => {
    const {id,  
           name,
           price,
           quantity,
           removeFromBasket = Function.prototype
    } = props;

    return (
        <div>
            <li className="collection-item">
            {name} x{quantity} = {price * quantity} руб.
            <span class="secondary-content"
            onClick={() => removeFromBasket(id)}
            >
                <i class="material-icons basket-delete">close</i></span>
            </li>
        </div>
     
    )
}

export default BasketItem;