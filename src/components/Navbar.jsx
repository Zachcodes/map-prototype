import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Link to="/create-account">Sign in</Link>
      <Link to="/services">Find services</Link>
    </div>
  );
};

export default Navbar;
