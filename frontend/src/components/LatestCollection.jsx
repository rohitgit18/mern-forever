// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext.jsx';
// import Title from './Title';
// import ProductItem from './ProductItem.jsx';

// function LatestCollection() {

//     const { products } = useContext(ShopContext);
//     const [latestProducts, setLatestProducts] = useState([]);

//     useEffect(() => {
//         setLatestProducts(products.slice(0, 10));  // Setting latest 10 products on mount or when `products` change
//     }, [products]);  // Re-run the effect when `products` changes

//     return (
//         <div className='my-10'>
//             <div className='text-center py-8 text-3xl'>
//                 <Title text1={'LATEST'} text2={'COLLECTIONS'} />
//                 <p className='w-3/4 m-auto text-xs sm:text-base text-gray-600'>
//                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
//                 </p>
//             </div>

//             {/* Rendering Products */}
//             <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
//                 {
//                     latestProducts.map((item, index) => (
//                         <ProductItem 
//                             key={index} 
//                             id={item.id} 
//                             image={item.image} 
//                             name={item.name} 
//                             price={item.price} 
//                         />
//                     ))
//                 }
//             </div>
//         </div>
//     );
// }

// export default LatestCollection;

//---------------------------------------------------------------------------------


import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext.jsx';
import Title from './Title';
import ProductItem from './ProductItem.jsx';

function LatestCollection() {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
      //  console.log("Products:", products); // Debug log
        setLatestProducts(products.slice(0, 10));  // Setting latest 10 products
    }, [products]);

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'LATEST'} text2={'COLLECTIONS'} />
                <p className='w-3/4 m-auto text-xs sm:text-base text-gray-600'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
                </p>
            </div>

            {/* Rendering Products */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {latestProducts.map((item, index) => (
                    <ProductItem 
                        key={index} 
                        id={item.id || item._id}  // Ensure correct ID field is used
                        image={item.image} 
                        name={item.name} 
                        price={item.price} 
                    />
                ))}
            </div>
        </div>
    );
}

export default LatestCollection;
