import { createRating } from "../../utils/functions/createRating";
import avatar from "../../assets/images/avatar.jpg";

export const Testimonial = () => {
  const testimonialData = [
    {
      image: avatar,
      rating: 5,
      text: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
      fullName: "Sara Taylor",
      role: "Consumer",
    },
  ];

  const Counters = ({ title, subtitle }) => {
    return (
      <div className="counters">
        <h4 className="counters__title">{title}</h4>
        <p className="counters__subtitle">{subtitle}</p>
      </div>
    );
  };

  const counterss = [
    { title: "100%", subtitle: "Organic" },
    { title: "285", subtitle: "Active Product" },
    { title: "350+", subtitle: "Organic Orchads" },
    { title: "25+", subtitle: "Years of Farming" },
  ];

  return (
    <div className="testimonials" id="testimonials">
      <div className="container">
        <div className="testimonials__content">
          <h3 className="testimonials__subtitle">Testimonial</h3>
          <h2 className="testimonials__title">What Our Customer Saying?</h2>
          {testimonialData.map((testimonial, index) => (
            <div key={index} className="testimonials__card">
              <div className="testimonials__image">
                <img
                  className="testimonials__image-avatar"
                  src={testimonial.image}
                  alt="testimonial-img"
                />
              </div>
              <div className="testimonials__rating">
                {createRating(testimonial.rating)}
              </div>
              <div className="testimonials__text">{testimonial.text}</div>
              <div className="testimonials__full-name">
                {testimonial.fullName}
              </div>
              <div className="testimonials__role">{testimonial.role}</div>
            </div>
          ))}
          <div className="testimonials__navigation">
            <span className="testimonials__navigation-item"></span>
            <span className="testimonials__navigation-item active"></span>
            <span className="testimonials__navigation-item"></span>
          </div>
        </div>

        <div className="testimonials__counterss">
          {counterss.map((counters, index) => (
            <Counters
              title={counters.title}
              subtitle={counters.subtitle}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
