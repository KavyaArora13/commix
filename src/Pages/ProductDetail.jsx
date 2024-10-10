import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../Assets/Css/ProductDetail/ProductDetail.scss';
import ProductImageGallery from '../Components/ProductDetail/ProductImageGallery';
import ProductDetailInfo from '../Components/ProductDetail/ProductDetailInfo';
import ProductDropdownInfo from '../Components/ProductDetail/ProductDropdownInfo';
import CardComponent from '../Components/ProductPage/CardComponent';
import SectionTitle from '../Components/SectionTitle';
import ImageComparisonSlider from '../Components/ProductDetail/ImageComparisonSlider';
const ProductDetail = () => {
  const productImages = [
    `${process.env.PUBLIC_URL}/images/lip1.jpg`,
    `${process.env.PUBLIC_URL}/images/lip2.jpg`,
    `${process.env.PUBLIC_URL}/images/lip3.jpg`,
    `${process.env.PUBLIC_URL}/images/lip4.jpg`,
    `${process.env.PUBLIC_URL}/images/lip5.jpg`,
    `${process.env.PUBLIC_URL}/images/lip6.jpg`,
    `${process.env.PUBLIC_URL}/images/lip7.jpg`,
  ];

  const productDropdownInfo = {
    description: "Experience the ultimate in skincare luxury with our revolutionary formula. This product combines cutting-edge science with nature's finest ingredients to deliver unparalleled results. Suitable for all skin types, it works to hydrate, rejuvenate, and protect your skin, leaving it looking radiant and feeling silky smooth.",
    ingredients: "Aqua, Glycerin, Butylene Glycol, Niacinamide, Dimethicone, Cetearyl Alcohol, Caprylic/Capric Triglyceride, Ceteareth-20, Sodium Hyaluronate, Tocopheryl Acetate, Panthenol, Allantoin, Xanthan Gum, Carbomer, Ethylhexylglycerin, Phenoxyethanol, Parfum.",
    faqs: [
      { 
        question: "How do I use this product?", 
        answer: "Apply a small amount to clean, dry skin morning and night. Gently massage in circular motions until fully absorbed. For best results, use consistently as part of your daily skincare routine." 
      },
      { 
        question: "Is this product suitable for sensitive skin?", 
        answer: "Yes, our product is formulated to be gentle and suitable for all skin types, including sensitive skin. However, as with any new skincare product, we recommend doing a patch test before full application." 
      },
      {
        question: "How long does it take to see results?",
        answer: "While individual results may vary, most users report seeing noticeable improvements in skin texture and appearance within 2-4 weeks of consistent use."
      }
    ],
    additionalDetails: "Cruelty-free and vegan. Made with sustainable practices. Packaging is recyclable. Store in a cool, dry place away from direct sunlight. Use within 12 months of opening.",
    reviewCount: 1718
  };

  return (
    <div className="product-detail-page">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12">
            <ProductImageGallery images={productImages} />
            <div className="image-comparison-container">
              <h2 className='kavya'>Before and After</h2>
              <ImageComparisonSlider 
                beforeImage="/images/before.png"
                afterImage="/images/after.png"
                height="400px"
              />
            </div>
          </div>

          <div className="col-xl-7 col-lg-6 col-md-6 col-sm-12">
            <ProductDetailInfo />
            <ProductDropdownInfo {...productDropdownInfo} />
          </div>
        </div>

        <SectionTitle title="SHOP FROM RECENTLY VIEWED" />
        <div className="row mt-5 mb-5">
          <CardComponent
            image="/images/expected1.jpg"
            title="Allure Cleansing Foam"
            price="$50.00"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <CardComponent
            image={`${process.env.PUBLIC_URL}/images/iconic2.png`}
            title="Allure Vitamin C Serum"
            price="$30.00"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <CardComponent
            image={`${process.env.PUBLIC_URL}/images/order.png`}
            title="Allure Day Moisturizer"
            price="$50.00"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <CardComponent
            image={`${process.env.PUBLIC_URL}/images/expected3.jpg`}
            title="Allure Matte Lipstick"
            price="$40.00"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;