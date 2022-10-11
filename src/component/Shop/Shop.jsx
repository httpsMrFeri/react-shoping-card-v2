import React from 'react'
import Card from '../Card/Card'
const Shop = ({data , shopingItem}) => {
  return (
    <div className='shop flex'>
        {
            data.map(item=>(
                <Card
                    itemName={item.itemName}
                    itemPrice = {item.itemPrice}
                    itemQty={item.itemQty}
                    itemImg={item.itemImg}
                    key = {item.id}
                    shopingItem = {()=>shopingItem(item)}
                />
            ))
        }
    </div>
  )
}

export default Shop