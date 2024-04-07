import React from 'react';
import AddToCartButton from './AddToCartButton';

function Products() {

    const products = [
        { id: 1, name: 'Beach Print', description: 'Description 1', image: 'https://static.zara.net/assets/public/a562/5cdf/14b74829ad6a/538797cb460c/03033194330-p/03033194330-p.jpg?ts=1711539238957&w=315', price: 20.00, salePrice: 15, freeShipping: true },
        { id: 2, name: 'Product 2', description: 'Description 2', image: 'https://static.zara.net/assets/public/7dd6/51db/58fa454598f5/c687d1ead14c/03067006704-a2/03067006704-a2.jpg?ts=1706544545728&w=315', price: 30.00, salePrice: 25, freeShipping: false },
        { id: 3, name: 'Product 3', description: 'Description 3', image: 'https://static.zara.net/assets/public/0c54/9cb7/d184462b93b4/57b19fc9ebd8/05755014620-a1/05755014620-a1.jpg?ts=1710417839251&w=315', price: 40.00, salePrice: 35, freeShipping: true },
        { id: 4, name: 'Product 4', description: 'Description 3', image: 'https://static.zara.net/assets/public/7a28/e0f6/b14b49739479/4607aba35e18/02451305808-015-a1/02451305808-015-a1.jpg?ts=1708688620469&w=3155', price: 40.00, salePrice: 35, freeShipping: true },
        { id: 5, name: 'Product 5', description: 'Description 3', image: 'https://static.zara.net/assets/public/c129/8913/e5294c1dbf57/3c1bf1bf80fa/08741081330-a1/08741081330-a1.jpg?ts=1711539251146&w=315', price: 40.00, salePrice: 35, freeShipping: true },
        { id: 6, name: 'Product 6', description: 'Description 3', image: 'https://static.zara.net/assets/public/a20e/641c/a77541b7a40a/4462a0afdbf7/02364572251-015-a1/02364572251-015-a1.jpg?ts=1708688618841&w=315', price: 40.00, salePrice: 35, freeShipping: true },
        { id: 7, name: 'Product 7', description: 'Description 3', image: 'https://static.zara.net/assets/public/2498/9c00/f6bd4688acd2/9ffb8bf2b09f/04938005505-p/04938005505-p.jpg?ts=1711557129119&w=750', price: 40.00, salePrice: 35, freeShipping: true },
    ];
    return (
        <div className="row row-cols-1 row-cols-md-4">
            {products.map(product => {
                const {id, name, price, salePrice, image} = product; // Corrected destructuring
                return (
                    <div className="col mb-4" key={id}>
                        <div className="card h-100 rounded-0 position-relative border-0">
                            <img src={image} className="card-img-top card-photo" alt={name}/>
                            <div className="card-body text-center p-0">
                                <h5 className="card-title mt-3">{name}</h5>
                                <div className="yellow-dash mx-auto mb-3"></div>
                                <p className="card-text mb-0">$ <span className="font-weight-bold item-price">{salePrice}</span>.90 </p>
                                <p className="card-text text-black-50"> or 9 x {price} </p>
                                <AddToCartButton/>
                            </div>
                            {product.freeShipping && <p className="free-shipping p-1 bg-dark text-white position-absolute small text-center">Free shipping</p>}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
export default Products;