import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <div className="logo">
        <h3>Portfolio</h3>
      </div>
      <nav>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/blog'}>Blog</Link>
          </li>
          <li>
            <Link to={'/'}>SNS</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
