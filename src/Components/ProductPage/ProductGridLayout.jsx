import React, { useState } from 'react';
import ProductFilters from './ProductFilters'; // Import the ProductFilters component
import ProductCard from './ProductCard'; // Import the ProductCard component
import CardComponent from './CardComponent';
import '../../Assets/Css/ProductPage/ProductGridLayout.scss'

const products = [
  { id: 1, name: "Allure Cleansing Foam", price: "$500.00", category: "Cleansers", rating: 4.8, image: `${process.env.PUBLIC_URL}/images/iconic1.png` },
  { id: 2, name: "Allure Vitamin C Serum", price: "$30.00", category: "Serums", rating: 4.8, image: `${process.env.PUBLIC_URL}/images/iconic2.png` },
  { id: 3, name: "Allure Day Moisturizer", price: "$50.00", category: "Face Moisturizers", rating: 4.8, image: `${process.env.PUBLIC_URL}/images/expected1.jpg` },
  { id: 4, name: "Allure Detox Clay Mask", price: "$50.00", category: "Face Mask", rating: 4.8, image: `${process.env.PUBLIC_URL}/images/expected2.jpg` },
  { id: 5, name: "Allure SPF 30 Sunscreen", price: "$15.00", category: "Sunscreens", rating: 4.8, image: `${process.env.PUBLIC_URL}/images/expected3.jpg` },
  { id: 6, name: "Kavya", price: "$10.00", category: "Face Mask", rating: 4.8, image: `${process.env.PUBLIC_URL}/images/iconic1.png` },
  { id: 7, name: "Allure Micellar Water", price: "$10.00", category: "Cleansers", rating: 4.8, image: `${process.env.PUBLIC_URL}/images/iconic1.png` },
  { id: 8, name: "Allure Night Cream", price: "$50.00", category: "Face Moisturizers", rating: 4.8, image: `${process.env.PUBLIC_URL}/images/iconic1.png` },
  { id: 9, name: "Allure Facial Wash", price: "$20.00", category: "Cleansers", rating: 4.8, image: `${process.env.PUBLIC_URL}/images/iconic1.png` },
  { id: 10, name: "Kavya Arora", price: "$20.00", category: "Cleansers", rating: 4.8, image: `${process.env.PUBLIC_URL}/images/iconic1.png` },
];

const bestSellers = [
  { id: 1, name: "Allure Cleansing Foam", price: "$50.00", image: `${process.env.PUBLIC_URL}/images/expected1.jpg`, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 2, name: "Allure Vitamin C Serum", price: "$30.00", image: `${process.env.PUBLIC_URL}/images/expected2.jpg`, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 3, name: "Allure Day Moisturizer", price: "$50.00", image: `${process.env.PUBLIC_URL}/images/expected3.jpg`, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 4, name: "Allure Matte Lipstick", price: "$40.00", image: `${process.env.PUBLIC_URL}/images/expected4.jpg`, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
];

const itemsPerPage = 9;

const ProductGridLayout = ({ searchTerm }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };


  const filteredProducts = searchTerm.trim() === ''
    ? products
    : products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      

  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="product-grid-layout container mt-5">
      <div className="row">
        {/* Left Section */}
        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-3 col-12">
          <ProductFilters />
        </div>

        {/* Right Section */}
        <div className="col-sm-12 col-md-12 col-lg-8 col-xl-9 col-12">
          <div className="result-header mb-4">
            <div className="d-flex justify-content-between align-items-center">
              <div className="result-count">
                <p>Showing all {products.length} results</p>
              </div>
              <div className="sort-by dropdown">
                <button
                  className="btn btn-dark dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Recommendation
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li><a className="dropdown-item" href="#">List Dropdown 1</a></li>
                  <li><a className="dropdown-item" href="#">List Dropdown 2</a></li>
                  <li><a className="dropdown-item" href="#">List Dropdown 3</a></li>
                  <li><a className="dropdown-item" href="#">List Dropdown 4</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            {displayedProducts.length > 0 ? (
              displayedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p>No products found</p>
            )}
          </div>

          <nav>
            <ul className="pagination justify-content-center ">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button className="page-link" onClick={handlePreviousPage}>
                  &laquo;
                </button>
              </li>
              {[...Array(totalPages).keys()].map((num) => (
                <li
                  key={num + 1}
                  className={`page-item ${currentPage === num + 1 ? 'active' : ''}`}
                >
                  <button className="page-link" onClick={() => setCurrentPage(num + 1)}>
                    {num + 1}
                  </button>
                </li>
              ))}
              <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button className="page-link" onClick={handleNextPage}>
                   &raquo;
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-lg-10 col-md-9 col-sm-12">
          <p className="section-subtitle">
            Top Seller
          </p>
          <h2 className="section-title">
            Explore Our Best Collections
          </h2>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-12 d-flex justify-content-end align-items-center">
          <button className="btn btn-dark view-all-button">VIEW ALL</button>
        </div>
      </div>
      <div className='row mt-4'>
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
    </div>
  );
};

export default ProductGridLayout;
