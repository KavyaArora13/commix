import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../Assets/Css/Profile/Sidebar.scss';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <section className="sidebar-section">
        <h2 className="sidebar-heading">ONLINE ORDERING</h2>
        <ul className="sidebar-list">
          <li>
            <NavLink to="/profile/order-history" className="sidebar-link" activeClassName="active">
              Order History
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile/my-addresses" className="sidebar-link" activeClassName="active">
              My addresses
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile/favorite-orders" className="sidebar-link" activeClassName="active">
              Favorite Orders
            </NavLink>
          </li>
        </ul>
      </section>

      <section className="sidebar-section">
        <h2 className="sidebar-heading">ACCOUNT SETTINGS</h2>
        <ul className="sidebar-list">
          <li>
            <NavLink to="/profile/delete-account" className="sidebar-link" activeClassName="active">
              Delete Account
            </NavLink>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Sidebar;