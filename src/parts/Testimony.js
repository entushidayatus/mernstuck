import React from "react";
import Star from "elements/Star";
import Button from "elements/Button";
import Zoom from "react-reveal/Zoom";
import TestimonialAccent from "assets/images/testimonial-landingpages-frame.jpg";

export default function Testimony({ data }) {
  return (
    <section className="container">
      <Zoom>
        <div className="row align-items-center">
          <div className="col-auto" style={{ marginRight: 70 }}>
            <div
              className="testimonial-hero"
              style={{ margin: `30px 0 0 30px` }}
            >
              <img
                src={data.imageUrl}
                alt="Testimonial"
                className="position-absolute"
                style={{ zIndex: 1 }}
              />
              <img
                src={TestimonialAccent}
                alt="Testimonial Frame"
                className="position-absolute"
                style={{ margin: `-30px 0 0 -30px` }}
              />
            </div>
          </div>
          <div className="col">
            <h4 style={{ marginBottom: 40 }}>{data.name}</h4>
            <Star value={data.rate} height={35} width={35} spacing={4}></Star>
            <h5 className="h2 font-weight-light line-height-2 my-2">
              {data.content}
            </h5>
            <span className="text-gray-500">
              {data.familyName}, {data.familyOccupation}
            </span>
            <div>
              <Button
                className="btn px-5"
                style={{ marginTop: 40 }}
                hasShadow
                isPrimary
                type="link"
                href={`/testimonials/${data._id}`}
              >
                Read Their Story
              </Button>
            </div>
          </div>
        </div>
      </Zoom>
    </section>
  );
}
