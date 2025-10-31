import React, { useState, useEffect, useRef } from 'react';
import './Book.css';
import GeneralPage from './pages/GeneralPage';
import BusinessPage from './pages/BusinessPage';
import TechnologyPage from './pages/TechnologyPage';
import AboutPage from './pages/AboutPage';


function Book() {
  const pages = [
    <GeneralPage key="general" />, 
    <BusinessPage key="business" />, 
    <TechnologyPage key="technology" />, 
    <AboutPage key="about" />
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [opening, setOpening] = useState(true);


  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") {
        setCurrentPage(prev => Math.min(prev + 1, pages.length - 1));
      } else if (e.key === "ArrowLeft") {
        setCurrentPage(prev => Math.max(prev - 1, 0));
      }
    };
  window.addEventListener("keydown", onKey);
  return () => window.removeEventListener("keydown", onKey);
}, [pages.length]);

  
  useEffect(() => {
    const timer = setTimeout(() => setOpening(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="book-container">
      {pages.map((pageElement, index) => {
        let className = 'page';
        if (opening && index === 0) className += ' opening';
        if (index < currentPage) className += ' flipped';
        if (index === currentPage) className += ' current';
        return (
          <div
            className={className}
            key={index}
            style={{ zIndex: pages.length - index }}
          >
            <div className="page-content">
              {pageElement}
              {/* Navigation buttons */}
              <div className="navigation-buttons">
                {index > 0 && (
                  <button
                    className="nav-button prev-button"
                    onClick={previousPage}
                    aria-label="Previous page"
                  >
                    ←
                  </button>
                )}
                {index < pages.length - 1 && (
                  <button
                    className="nav-button next-button"
                    onClick={nextPage}
                    aria-label="Next page"
                  >
                    →
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Book;
