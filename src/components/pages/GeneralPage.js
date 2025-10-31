import React from 'react';
import './PageStyles.css';

/**
 * The first page of the book. Replace the placeholder content with your
 * personal introduction, a photo and any other elements you want to display.
 */
function GeneralPage() {
  return (
    <div className="page-inner">
      <h1 className="page-title">Welcome</h1>
      <p className="page-subtitle">Your Name Here</p>
      {/* Replace with your own photo stored in /public directory */}
      <img
        src={process.env.PUBLIC_URL + '/my_photo.png'}
        alt="Your portrait"
        className="page-photo"
      />
      <p className="page-description">
        This is the opening page of your personal website. You can briefly introduce yourself here. Describe
        your interests, background and what visitors will find in the following pages.
      </p>
    </div>
  );
}

export default GeneralPage;
