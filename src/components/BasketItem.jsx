const BasketItem = (props) => {
    const {id,  
           name,
           price,
           quantity,
    } = props;

    return (
        <div><li className="collection-item">
            {name} x{quantity} = {price}
            <span class="secondary-content"><i class="material-icons basket-delete">close</i></span>
            </li></div>
     
    )
}

export default BasketItem;