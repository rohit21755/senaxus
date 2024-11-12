"use client";
import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { FaCaretLeft } from "react-icons/fa";
import img from "@/assets/hero.png"

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      date: "May 8, 2020",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus",
      image: img
    },
    // Add more testimonials as needed
    {
      id: 2,
      date: "May 10, 2020",
      title: "Another great testimonial example here",
      content: "Similar lorem ipsum content for variety...",
      image: img
    },
    // Add more testimonials to match the 6 dots shown in the design
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Our Testimonials</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our testimonials are heartfelt reflections of the nurturing environment we provide, where
          children flourish both academically and emotionally.
        </p>
      </div>

      {/* Testimonial Slider */}
      <div className="relative">
        {/* Decorative Bars */}
        <div className="absolute right-0 top-0 -z-10">
          <div className="flex gap-2">
            {[...Array(12)].map((_, i) => (
              <div 
                key={i} 
                className="w-2 bg-blue-100"
                style={{
                  height: `${(i < 6 ? i + 1 : 12 - i) * 20}px`
                }}
              />
            ))}
          </div>
        </div>

        {/* Main Content */}
        {/* <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
          <div className="relative border-2">
            <Image
              src={testimonials[currentSlide].image}
              alt="Testimonial"
              className="rounded-lg"
            />
          </div>
          <div className="space-y-4">
            <p className="text-gray-500">{testimonials[currentSlide].date}</p>
            <h3 className="text-xl font-bold">{testimonials[currentSlide].title}</h3>
            <p className="text-gray-600 leading-relaxed">
              {testimonials[currentSlide].content}
            </p>
          </div>
        </div> */}

        {/* Navigation */}
        <div className="flex items-center justify-center gap-8">
          {/* Previous Button */}
          <button 
            onClick={prevSlide}
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="Previous testimonial"
          >
        left 
          </button>

          {/* Dots */}
          <div className="flex gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-gray-800 w-4' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button 
            onClick={nextSlide}
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="Next testimonial"
          >
            right
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;