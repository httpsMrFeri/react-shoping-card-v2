import React from 'react'

const header = ({ HandlerShowShoping , numberShop}) => {

  return (
    <React.Fragment>
      <header className='header'>
        <button onClick={HandlerShowShoping}> Show/Hide </button>
        <p>{numberShop.length}</p>
      </header>
    </React.Fragment>
  )
}

export default header