import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import CartProduct from '../Components/Cart/CartProduct'
import OrderSummary from '../Components/Cart/OrderSummary'
import RecommendedProduct from '../Components/Cart/RecommendedProduct'
import CardComponent from '../Components/ProductPage/CardComponent'
import Touch from '../Components/Offer/Touch'
import '../Assets/Css/Cart/Cart.scss'

const Cart = () => {
  // Cart products array
  const cartProducts = [
    {
      id: 1,
      image: "/images/iconic1.png",
      title: "Neque porro quisquam est qui dolorem ipsum quia",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a ",
      price: 261.00,
      oldPrice: 349.00,
      discount: 25
    },
    {
      id: 2,
      image: "/images/iconic2.png",
      title: "Neque porro quisquam est qui dolorem ipsum quia",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a ",
      price: 261.00,
      oldPrice: 349.00,
      discount: 25
    },
    {
        id: 3,
        image: "/images/expected3.jpg",
        title: "Neque porro quisquam est qui dolorem ipsum quia",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a ",
        price: 261.00,
        oldPrice: 349.00,
        discount: 25
    },
  ];

  // Calculate subtotal based on cart products
  const subtotal = cartProducts.reduce((total, product) => total + product.price, 0);
  const itemCount = cartProducts.length;

  // Sample recommended products data
  const recommendedProducts = [
    { id: 1, image: "/images/order.png", title: "Recommended Product 1", rating: 4, reviewCount: 333, price: 239.99 },
    { id: 2, image: "/images/expected1.jpg", title: "Recommended Product 2", rating: 5, reviewCount: 50, price: 239.99 },
    { id: 3, image: "/images/iconic1.png", title: "Recommended Product 3", rating: 3, reviewCount: 600, price: 239.99 },
    { id: 4, image: "/images/iconic2.png", title: "Recommended Product 4", rating: 4, reviewCount: 4, price: 239.99 },
    { id: 5, image: "/images/expected2.jpg", title: "Recommended Product 5", rating: 5, reviewCount: 7890, price: 239.99 },
  ];

  const bestSellers = [
    { id: 1, name: "Allure Cleansing Foam", price: "$50.00", image: `${process.env.PUBLIC_URL}/images/expected1.jpg`, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 2, name: "Allure Vitamin C Serum", price: "$30.00", image: `${process.env.PUBLIC_URL}/images/expected2.jpg`, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 3, name: "Allure Day Moisturizer", price: "$50.00", image: `${process.env.PUBLIC_URL}/images/expected3.jpg`, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 4, name: "Allure Matte Lipstick", price: "$40.00", image: `${process.env.PUBLIC_URL}/images/expected4.jpg`, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
  ];

  return (
    <>
      <Header />
      <div className="container-fluid mt-3">
        <div className="cart-header">
          <h1>Cart</h1>
          <Link to="/" className="continue-shopping">
            <span>←</span>
            continue shopping
          </Link>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-8 col-lg-9 col-xl-9 mb-4">
            {cartProducts.map(product => (
              <CartProduct 
                key={product.id}
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
                oldPrice={product.oldPrice}
                discount={product.discount}
              />
            ))}
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3">
            <OrderSummary subtotal={subtotal} itemCount={itemCount} />
            <div className="recommended-products">
              <h5>Recommended Products</h5>
              {recommendedProducts.map(product => (
                <RecommendedProduct key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5 p-4">
        <div className="col-lg-10 col-md-9 col-sm-12">
          <p className="section-subtitle1">
            Top Seller
          </p>
          <h2 className="section-title1">
            Explore Our Best Collections
          </h2>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-12 d-flex justify-content-end align-items-center">
          <button className="btn btn-dark view-all-button1">VIEW ALL</button>
        </div>
      </div>
      <div className='row mt-4 p-4'>
        {bestSellers.map((product) =>(
          <CardComponent
            key={product.id}
            image={product.image}
            title={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
      <Touch/>
      <Footer />
    </>
  )
}

export default Cart