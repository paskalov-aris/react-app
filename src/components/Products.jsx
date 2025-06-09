import React from "react";

const Products = () => {
  const productList = [
    {
      id: 1,
      discount: "-10%",
      image: "/images/img-11.jpg",
      title: "product",
      price: "$12.99",
      oldPrice: "$15.99",
    },
    {
      id: 2,
      discount: "-15%",
      image: "/images/img-22.jpg",
      title: "product",
      price: "$12.99",
      oldPrice: "$15.99",
    },
    {
      id: 3,
      discount: "-5%",
      image: "/images/img-33.jpg",
      title: "product",
      price: "$12.99",
      oldPrice: "$15.99",
    },
    {
      id: 4,
      discount: "-20%",
      image: "/images/img-44.jpg",
      title: "product",
      price: "$12.99",
      oldPrice: "$15.99",
    },
    {
      id: 5,
      discount: "-17%",
      image: "/images/img-55.jpg",
      title: "product",
      price: "$12.99",
      oldPrice: "$15.99",
    },
    {
      id: 6,
      discount: "-3%",
      image: "/images/img-66.jpg",
      title: "product",
      price: "$12.99",
      oldPrice: "$15.99",
    },
    {
      id: 7,
      discount: "-18%",
      image: "/images/img-77.jpg",
      title: "product",
      price: "$12.99",
      oldPrice: "$15.99",
    },
    {
      id: 8,
      discount: "-10%",
      image: "/images/img-88.jpg",
      title: "product",
      price: "$12.99",
      oldPrice: "$15.99",
    },
    {
      id: 9,
      discount: "-5%",
      image: "/images/img-99.jpg",
      title: "product",
      price: "$12.99",
      oldPrice: "$15.99",
    },
  ];

  const handleCartClick = (productId) => {
    // Перехід на сторінку продукту
    window.location.href = `/product/${productId}`;
  };

  return (
    <section className="products" id="products">
      <h1 className="heading">
        latest <span>products</span>
      </h1>
      <div className="box-container">
        {productList.map((product) => (
          <div className="box" key={product.id}>
            <span className="discount">{product.discount}</span>
            <div className="image">
              <img src={product.image} alt="product" />
              <div className="icons">
                <button
                  className="fas fa-heart"
                  aria-label="Add to favorites"
                ></button>
                <button
                  className="cart-btn"
                  onClick={() => handleCartClick(product.id)}
                >
                  add to cart
                </button>
                <button className="fas fa-share" aria-label="Share"></button>
              </div>
            </div>
            <div className="content">
              <h3>{product.title}</h3>
              <div className="price">
                {product.price} <span>{product.oldPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
