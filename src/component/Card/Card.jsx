import React from "react";

function Card(Item) {
    
    // let F_name = "faramarz", F_num = "500", F_price = "1020"
    const {itemImg , itemName , itemQty , itemPrice,shopingItem } = Item
    return (
        <div className="cardBox">
            <div className="cardImg">
                <img src={itemImg} />
            </div>
            <div className="cardText">
                <h2>Name : {itemName}</h2>
                <p>Number : {itemQty}</p>
                <p>Price : {itemPrice}</p>
            </div>
            <div className="cardButton flex">
                <button className="buyButton" onClick={shopingItem}>Buy</button>
                <button className="showButton">Show more</button>
            </div>
        </div>
    )
}
export default Card