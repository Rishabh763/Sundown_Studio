import React from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import nike from "../assets/images/nike.svg";
import converse from "../assets/images/converse.svg";
import arcteryx from "../assets/images/arcteryx.svg";
import hunter from "../assets/images/hunter.svg";
import medialink from "../assets/images/medialink.svg";
import afterpay from "../assets/images/afterpay.svg";

import "swiper/css";

function Swip() {
  return (
    <div className="page4">
      <div className="indicator">
        <>&lt; &gt;</>
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src={nike} alt="" />
          <p>
            Retained Production support across retail and events in NY, CHI, LA.
            Creative Design, Design Management, Production/Project Management,
            and execution of work from concept to installation across the
            Country.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={converse} alt="" />
          <p>
            Creative Concepting, Design, Design Management, Project Management,
            and execution of work from concept to installation across the
            Country. Cross functional communication and management of third
            party partners.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={arcteryx} alt="" />
          <p>
            Production and design along with install oversight and execution
            support for the SoHo store opening on Broadway St, New York. Also
            working on creative and production work for a new store opening in
            Glendale, California.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={hunter} alt="" />
          <p>
            Design and Production partner for Hunter Holiday 2022 Pop-in at
            Nordstrom 57th St, New York, including activations in Women’s, Men’s
            and Kid’s zones. Thirty-five (35) additional smaller take-downs in
            Nordstrom stores across the US. Concept design for Holiday boot
            customization events in stores across winter 2022.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={medialink} alt="" />
          <p>
            Creative, Design, and Production Partner for 2023 CES. Scope
            Included creation of Branding Identity, Assets, and Digital Content,
            Design, Production design, Production oversight and Installation of
            client activations for IBM, Delta, Instacart, and more.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={afterpay} alt="" />
          <p>
            Creative, Design, and Production Partner for 2022 NY Fashion Week
            Pop-Up space. In Partnership with B-Reel scope including creation of
            Final Design, Design Assets, 3D Renders, Production design,
            Production/Partner oversight and creation of a two (2) story pop-up
            for Afterpay’s clients such as Crocs, JD Sports, Container Store, &
            Revolve.
          </p>
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
}

export default Swip;
