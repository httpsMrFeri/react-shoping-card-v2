import React from 'react'

const Cart = ({ data, handlerDelete, HandlerNumber }) => {
    let total
    return (
        <div className='cart flex'>
            {
                data.map((item, index) => (
                    <div className="cartBox">
                        <div className="cartImg">
                            <img src={item.itemImg} />
                        </div>
                        <div className=" cartText">
                            <h2>Name : {item.itemName}</h2>
                            <p>Price : {item.itemPrice}</p>
                        </div>
                        <div className='cartItemNumber flex'>
                            <button onClick={() => HandlerNumber(item, -1)}>-</button>
                            <p>{item.itemNumber}</p>
                            <button onClick={() => HandlerNumber(item, +1)}>+</button>
                        </div>
                        <div className='cartDelete'>
                            <button onClick={() => handlerDelete(index)}>Delete</button>
                        </div>
                        <div className='cartTotal'>
                            total: {item.itemNumber * item.itemPrice}
                        </div>
                    </div>

                ))

            }
        </div>
    )
}

export default Cart