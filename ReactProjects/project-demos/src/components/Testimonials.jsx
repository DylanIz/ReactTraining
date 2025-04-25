import React, { useState } from "react";
import "../styles.css";
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      quote: "This is the best product I've ever used",
      author: "John Doe",
    },
    {
      quote: "Great service and great products",
      author: "Jane Doe",
    },
    {
      quote: "I'm so happy with my purchase",
      author: "John Smith",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className="testimonials">
      <div className="testimonials-quote">
        {testimonials[currentIndex].quote}
      </div>
      <div className="testimonials-author">
        {testimonials[currentIndex].author}
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Testimonials;
