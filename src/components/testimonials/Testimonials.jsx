import React from "react";
import "./testimonials.css";
import AVATAR1 from "../../assets/avatar1.jpg";
import AVATAR2 from "../../assets/avatar2.jpg";
import AVATAR3 from "../../assets/avatar3.jpg";
import AVATAR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVATAR1,
    name: "Tina Snow",
    review:
      "I would recommend anyone trying to get the word out about their business. It has saved me so much time with the Website Development!, Thank you for the Service",
  },
  {
    avatar: AVATAR2,
    name: "Shatta Wale",
    review:
      "With Portfolio design , we have finally accomplished things that have been waiting forever to get done. Thanks Prashanth :)",
  },
  {
    avatar: AVATAR3,
    name: "Kwame Despite",
    review: "Cryptography website has made a huge difference!",
  },
  {
    avatar: AVATAR4,
    name: "Nana Ama McBrown",
    review:
      "UI/UX design has really helped our business. Definitely worth the investment. Thank you!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="clients__avatar">
                <img src={avatar} />
              </div>
              <h5 className="clients__name"> {name}</h5>
              <small className="clients__review"> {review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
