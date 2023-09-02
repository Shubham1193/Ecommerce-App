import React from 'react'
import { useState, useEffect } from 'react';
import { auth, fs } from '../Config/Config';
import {IndividualProduct} from './IndividualProduct'

export const Products = ({products, addToCart}) => {

    // console.log(products);
    // getting current user function
    function GetCurrentUser() {
        const [user, setUser] = useState(null);
        useEffect(() => {
            auth.onAuthStateChanged(user => {
                if (user) {
                    fs.collection('users').doc(user.uid).get().then(snapshot => {
                        setUser(snapshot.data().Fullname);
                    })
                }
                else {
                    setUser(null);
                }
            })
        }, [])
        return user;
    }
    
    const user = GetCurrentUser();
    // state of cart products
    const [cartProducts, setCartProducts] = useState([]);

    // getting cart products from firestore collection and updating the state
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                fs.collection('Cart' + user.uid).onSnapshot(snapshot => {
                    const newCartProduct = snapshot.docs.map((doc) => ({
                        ID: doc.id,
                        ...doc.data(),
                    }));
                    setCartProducts(newCartProduct);
                })
            }
            else {
                console.log('user is not signed in to retrieve cart');
            }
        })
    }, [])
    console.log(products)

    const isProductInCart = (productId) => {
        return cartProducts.some((product) => product.ID === productId); // some map over cartproducts and check if already added 
      };

    return products.map((individualProduct)=>(
        <IndividualProduct key = {individualProduct.ID} individualProduct={individualProduct}
           addToCart={addToCart} alreadyAdded={isProductInCart(individualProduct.ID)}
        />
    ))
}

export default Products