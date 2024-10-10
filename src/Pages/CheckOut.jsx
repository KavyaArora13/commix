import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import '../Assets/Css/CheckOut/CheckOut.scss'
import PersonalInfoForm from '../Components/CheckOut/PersonalInfoForm.jsx'
import ProductItem from '../Components/CheckOut/ProductItem.jsx'
import VoucherSection from '../Components/CheckOut/VoucherSection.jsx'
import TotalSummary from '../Components/CheckOut/TotalSummary.jsx'
import Touch from '../Components/Offer/Touch'

const CheckOut = () => {
  const subtotal = 2070.00;
  const shipping = 103.50;
  const total = 143910.00;
  const vat = 7195.00;

  return (
    <div className="checkout-page">
      <Header/>
      <div className="container-fluid checkout-container">
        <div className="row">
          <div className="col-12">
            <div className="checkout-header">
              <h1 className="checkout-title">Check Out</h1>
              <Link to="/product" className="continue-shopping-link">
                continue shopping
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <PersonalInfoForm />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className='payment-options'>
              <div className='payment-method'>
                <div className="payment-logo-container">
                  <img src="/images/razorpay.png" alt="razorpay" className="payment-logo" />
                  <span className="payment-name">Razor Pay</span>
                </div>
                <input type="checkbox" className="payment-checkbox"/>
              </div>
              <div className='payment-method'>
                <div className="payment-logo-container">
                  <span className="payment-name">Cash on Delivery</span>
                </div>
                <input type="checkbox" className="payment-checkbox"/>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 mb-4 pe-5">
            <div className="checkout-summary-wrapper">
              <div className="checkout-summary">
                <div className="checkout-summary-header">
                  <h2 className="checkout-summary-title">Article</h2>
                  <h2 className="checkout-summary-total">Total SAR</h2>
                </div>
                <div className="checkout-product-list">
                  <ProductItem
                    image="/images/expected1.jpg"
                    quantity={1}
                    description="Lorem"
                    name="Lorem Ipsum"
                    subDescription="Ipsum"
                    price={690.00}
                  />
                  <ProductItem
                    image="/images/order.png"
                    quantity={1}
                    description="Lorem"
                    name="Lorem Ipsum"
                    subDescription="Ipsum"
                    price={690.00}
                  />
                  <ProductItem
                    image="/images/iconic1.png"
                    quantity={1}
                    description="Lorem"
                    name="Lorem Ipsum"
                    subDescription="Ipsum"
                    price={690.00}
                  />
                </div>
              </div>
              <VoucherSection/>
              <TotalSummary 
                subtotal={subtotal}
                shipping={shipping}
                total={total}
                vat={vat}
              />
            </div>
          </div>
        </div>
      </div>
      <Touch/>
      <Footer/>
    </div>
  )
}

export default CheckOut