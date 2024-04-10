import React from 'react';
import Product from './Product';

export default function ProductList({ productList, incrementQuantity, decrementQuantity, removeItem }) {
    return (
        <>
            {productList.length > 0 ? (
                productList.map((product, i) => (
                    <Product
                        product={product}
                        key={i}
                        index={i}
                        incrementQuantity={incrementQuantity}
                        decrementQuantity={decrementQuantity}
                        removeItem={removeItem}
                    />
                ))
            ) : (
                <h1>No products available</h1>
            )}
        </>
    );
}
