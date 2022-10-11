import React, { useState } from "react";
import Header from "./Header/Header";
import Shop from "./Shop/Shop";
import Cart from "./Cart/Cart";
import { itemData } from '../data'
function Layout() {
    const [data, setData] = useState(itemData);
    const [showShoping, setShowShoping] = useState(false);
    const [shopingItem, setShopingItem] = useState([]);

    function HandlerShoping(item) {
        let temp = {}, temp2 = [], x = false
        if (shopingItem.length == 0) {
            console.log("enter 1 if")
            temp = { itemName: `${item.itemName}`, itemPrice: `${item.itemPrice}`, itemQty: `${item.itemQty}`, itemImg: `${item.itemImg}`, itemNumber: 1, id: `${item.Id}` }
            temp2 = [...temp2, temp]
        }
        else {
            console.log("else")
            for (let i = 0; i < shopingItem.length; i++) {
                console.log("for loop")
                if (shopingItem[i].itemName == item.itemName) {
                    console.log("for loop if")
                    console.log(shopingItem[i].itemName, " == ", item.itemName)
                    temp = { itemName: `${shopingItem[i].itemName}`, itemPrice: `${shopingItem[i].itemPrice}`, itemQty: `${shopingItem[i].itemQty}`, itemImg: `${shopingItem[i].itemImg}`, itemNumber: shopingItem[i].itemNumber + 1, id: `${shopingItem[i].Id}` }
                    temp2 = [...temp2, temp]
                    x = true
                }
                else {
                    console.log("for loop else")
                    console.log("elsee ", shopingItem[i].itemName, " == ", item.itemName)
                    temp = { itemName: `${shopingItem[i].itemName}`, itemPrice: `${shopingItem[i].itemPrice}`, itemQty: `${shopingItem[i].itemQty}`, itemImg: `${shopingItem[i].itemImg}`, itemNumber: 1, id: `${shopingItem[i].Id}` }
                    temp2 = [...temp2, temp]
                }
            }
            if (x == false) {
                temp = { itemName: `${item.itemName}`, itemPrice: `${item.itemPrice}`, itemQty: `${item.itemQty}`, itemImg: `${item.itemImg}`, itemNumber: 1, id: `${item.Id}` }
                temp2 = [...temp2, temp]
            }
        }
        console.log("temp2=>> ", temp2)
        setShopingItem(temp2)
        console.log(shopingItem)
    }

    function HandlerShowShoping(value) {
        value === false ? setShowShoping(true) : setShowShoping(false)
    }

    function handlerDelete(id){
        let temp = [...shopingItem]
        temp.splice(id ,1)
        setShopingItem(temp)
    }

    function HandlerNumber (item , work){
        let temp = [...shopingItem],index = shopingItem.indexOf(item)
        temp[index].itemNumber += work
        setShopingItem(temp)
    }

    return (
        <React.Fragment>
            <Header
                HandlerShowShoping={() => HandlerShowShoping(showShoping)}
                numberShop={shopingItem}
            />
            {showShoping == false ?
                <Shop
                    data={data}
                    shopingItem={HandlerShoping}
                />
                :
                <Cart
                    data={shopingItem}
                    handlerDelete = {handlerDelete}
                    HandlerNumber = {HandlerNumber}
                />
            }

        </React.Fragment>
    )
}

export default Layout;
