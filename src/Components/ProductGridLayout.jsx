import React from 'react';
import ProductFilters from './ProductFilters';  // Import the ProductFilters component

const ProductGridLayout = () => {
  return (
    <div className='product-grid-layout container mt-5'>
      <div className="row">
        {/* Left Section */}
        <div className='col-sm-12 col-md-12 col-lg-6 col-xl-3 col-12'>
          <ProductFilters />  {/* Render the ProductFilters here */}
        </div>

        {/* Right Section */}
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-9 col-12">
          <div className="result-header mb-4">
            <div className="d-flex justify-content-between align-items-center">
              <div className="result-count">
                <p>Showing all 50 results</p>
              </div>
              <div className="sort-by dropdown">
                <button 
                  className="btn btn-dark dropdown-toggle" 
                  type="button" 
                  id="dropdownMenuButton" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false">
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
            <div className="col-12" style={{ backgroundColor: "lightblue" }}>
              Hii this is Kavya
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductGridLayout;
