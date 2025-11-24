import React, { useState } from "react";

const StudyAbroad = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-gray-100 py-10 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        About <span style={{ color: '#00b4e6' }}>Developer</span>
        </h2>

        {/* Main Content */}
        <p className="text-gray-700 mt-4">
        <strong>Vajra West City </strong>stands as a symbol of trust, innovation, and contemporary living in Hyderabad’s rapidly evolving real estate landscape. Since its inception, Vajra West City has been committed to redefining urban lifestyles by delivering thoughtfully planned residential communities that reflect excellence in design, engineering, and long-term value. <br></br><br></br>
        Our team at <strong> Vajra West City</strong>, we believe that a home is not just a place to live, but a space that inspires growth, connection, and well-being. Our mission is to create environments where families thrive, relationships deepen, and lifestyles are elevated. Quality, transparency, and timely delivery are the cornerstones that guide every step of our development process.
        </p>

        
      </div>
    </div>
  );
};

export default StudyAbroad;
