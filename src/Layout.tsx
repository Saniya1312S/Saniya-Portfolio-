import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Navbar from './components/NavBar';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate('/browse');
    }
  };

  return (
    <div className="layout-shell">
      <Navbar />
      <div className="layout-back-row">
        <button
          type="button"
          className="layout-back-button"
          onClick={handleBackClick}
          aria-label="Go back"
        >
          <FaArrowLeft />
        </button>
      </div>
      <div className="layout-content content">{children}</div>
    </div>
  );
};

export default Layout;
