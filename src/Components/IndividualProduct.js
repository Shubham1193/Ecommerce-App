
import React from 'react'


export const IndividualProduct = ({individualProduct, addToCart , alreadyAdded}) => {
    console.log(individualProduct);
    const handleAddToCart = () => {
        addToCart(individualProduct)
    }
    console.log(individualProduct)

    return (
        <div className='product'>
            <div className='product-img'>
                <img src={individualProduct.url} alt="product-img" />
            </div>
            <div className='product-text title'>{individualProduct.title}</div>
            <div className='product-text description'>{individualProduct.description}</div>
            <div className='product-text price'>$ {individualProduct.price}</div>
           
      {alreadyAdded ? (
        <div className='btn btn-danger btn-md cart-btn'>IN CART</div>
      ) : (
        <div className='btn btn-danger btn-md cart-btn' onClick={handleAddToCart}>
          ADD TO CART
        </div>
      )}
            
        </div>
    )
}

export default IndividualProduct