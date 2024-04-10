import React, { useState } from 'react';
import ProductList from './Component/ProductList';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import AddItem from './Component/AddItem';

function App() {
    const [productList, setProductList] = useState([
        {
            price: 99999,
            name: 'iphone 10s CSSMathMax',
            quantity: 0,
        },
        {
            price: 888888,
            name: 'Redmi 10s CSSMathMax',
            quantity: 0,
        }
    ]);

    const [totalAmount, setTotalAmount] = useState(0);

    const incrementQuantity = (index) => {
        const newProductList = [...productList];
        let newTotalAmount = totalAmount;
        newProductList[index].quantity++;
        newTotalAmount += newProductList[index].price;
        setProductList(newProductList);
        setTotalAmount(newTotalAmount); // Update totalAmount state
    }
    
    const decrementQuantity = (index) => {
        const newProductList = [...productList];
        if (newProductList[index].quantity > 0) {
            newProductList[index].quantity--;
            let newTotalAmount = totalAmount - newProductList[index].price;
            setProductList(newProductList);
            setTotalAmount(newTotalAmount); // Update totalAmount state
        }
    }
    
    const resetQuantity = () => {
        const newProductList = productList.map(product => ({
            ...product,
            quantity: 0
        }));
        setProductList(newProductList);
        setTotalAmount(0); // Reset total amount to 0
    }
    
    const removeItem = (index) => {
        const newProductList = [...productList];
        let newTotalAmount = totalAmount - newProductList[index].quantity * newProductList[index].price;
    
        newProductList.splice(index, 1); 
        setProductList(newProductList);
        setTotalAmount(newTotalAmount);
    };

    const addItem = (productName, productPrice) => {
        // Make a copy of the existing productList array
        const newProductList = [...productList];
        // Add the new item to the copied array
        newProductList.push({ name: productName, price: productPrice, quantity: 0 });
        // Calculate the new total amount
        let newTotalAmount = totalAmount + productPrice;
        // Update the state with the new product list and total amount
        setProductList(newProductList);
        setTotalAmount(newTotalAmount);
      };
    
    return (
        <>
            <Navbar />
            <main className='container mt-5'>
                <AddItem addItem={addItem}/>
                <ProductList productList={productList} 
                incrementQuantity={incrementQuantity}
                 decrementQuantity={decrementQuantity}
                 removeItem={removeItem}/>
            </main>

            <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />

        </>
    );
}

export default App;
