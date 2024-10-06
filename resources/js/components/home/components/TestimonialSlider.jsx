import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { FaUser, FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    rating: 5,
    text: "This product exceeded my expectations. Highly recommended!"
  },
  {
    id: 2,
    name: "Jane Smith",
    rating: 4,
    text: "Great experience overall. The customer service was outstanding."
  },
  {
    id: 3,
    name: "Mike Johnson",
    rating: 5,
    text: "I'm impressed with the quality and attention to detail."
  },
  {
    id: 4,
    name: "Emily Brown",
    rating: 4,
    text: "Very satisfied with my purchase. Will definitely buy again."
  }
];

const TestimonialSlider = () => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`inline-block ${index < rating ? "text-yellow-400" : "text-gray-300"}`}
        aria-hidden="true"
      />
    ));
  };

  return (
    <div className="bg-gradient-to-r from-[#2E3191] to-[#FF69B2] px-5 py-12 lg:px-20 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">What Our Customers Say</h2>
      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        }}
        className="testimonial-slider"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                  <FaUser className="text-gray-500 text-2xl" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <div className="flex" aria-label={`Rated ${testimonial.rating} out of 5 stars`}>
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">"{testimonial.text}"</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-8 text-center">
        <button className="bg-white text-[#2E3191] font-bold py-2 px-6 rounded-full hover:bg-[#FF69B2] hover:text-white transition-colors duration-300" aria-label="Navigate through testimonials">
          See More Testimonials
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;