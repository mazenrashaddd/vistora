import React from "react";
import "./style.css";

export default function Reviews() {
  return (
    <div className="mb-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="heading reviewHeading my-5"> OUR HAPPY CUSTOMERS </h1>
          <div className="d-flex justify-content-between align-items-center">
            <div className="slideIcon h-50 px-2 py-1 rounded-1">
              <i className="fa-solid fa-arrow-left fa-lg" role="button"></i>
            </div>
            <div className="slideIcon h-50 px-2 py-1 rounded-1">
              <i className="fa-solid fa-arrow-right fa-lg" role="button"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="row  m-auto justify-content-center align-items-center">
        <div className="col-sm-3 pe-2 position-relative">
          <div className="card p-3 rounded-4 ">
            <div className="forBlur position-absolute w-100 h-100 rounded-4"></div>
            <div className="starRate mb-2">
              <i className="fa-solid fa-star fa-xs"></i>
              <i className="fa-solid fa-star fa-xs"></i>
              <i className="fa-solid fa-star fa-xs"></i>
              <i className="fa-solid fa-star fa-xs"></i>
              <i className="fa-solid fa-star fa-xs"></i>
            </div>
            <div>
              <div className="d-flex">
                <h5 className="card-title mb-2 me-1">Liam K.</h5>
                <i className="verifiedIcon fa-solid fa-circle-check fa-sm"></i>
              </div>
              <p className="card-text">
                "This t-shirt is a fusion of comfort and creativity. The fabric
                is soft, and the design speaks volumes about the designer's
                skill. It's like wearing a piece of art that reflects my passion
                for both design and fashion."
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-3 p-2">
          <div className="card p-3 rounded-4">
            <div className="starRate mb-2">
              <i className="fa-solid fa-star fa-xs"></i>
              <i className="fa-solid fa-star fa-xs"></i>
              <i className="fa-solid fa-star fa-xs"></i>
              <i className="fa-solid fa-star fa-xs"></i>
              <i className="fa-solid fa-star fa-xs"></i>
            </div>
            <div>
              <div className="d-flex">
                <h5 className="card-title mb-2 me-1">Samantha D.</h5>
                <i className="verifiedIcon fa-solid fa-circle-check fa-sm"></i>
              </div>
              <p className="card-text">
                "I absolutely love this t-shirt! The design is unique and the
                fabric feels so comfortable. As a fellow designer, I appreciate
                the attention to detail. It's become my favorite go-to shirt."
              </p>
            </div>
          </div>
        </div>
        {/* <div className="card me-3 p-3 rounded-4">
          <div className="starRate mb-2">
            <i className="fa-solid fa-star fa-xs"></i>
            <i className="fa-solid fa-star fa-xs"></i>
            <i className="fa-solid fa-star fa-xs"></i>
            <i className="fa-solid fa-star fa-xs"></i>
            <i className="fa-solid fa-star fa-xs"></i>
          </div>
          <div>
            <div className="d-flex">
              <h5 className="card-title mb-2 me-1">Alex K.</h5>
              <i className="verifiedIcon fa-solid fa-circle-check fa-sm"></i>
            </div>
            <p className="card-text">
              "Finding clothes that align with my personal style used to be a
              challenge until I discovered Vistora. The range of options they
              offer is truly remarkable, catering to a variety of tastes and
              occasions.”
            </p>
          </div>
        </div> */}
        <div className="col-sm-3 p-2">
          <div className="card p-3 rounded-4">
            <div className="starRate mb-2">
              <i className="fa-solid fa-star fa-xs"></i>
              <i className="fa-solid fa-star fa-xs"></i>
              <i className="fa-solid fa-star fa-xs"></i>
              <i className="fa-solid fa-star fa-xs"></i>
              <i className="fa-solid fa-star fa-xs"></i>
            </div>
            <div>
              <div className="d-flex">
                <h5 className="card-title mb-2 me-1">Sarah M.</h5>
                <i className="verifiedIcon fa-solid fa-circle-check fa-sm"></i>
              </div>
              <p className="card-text">
                "I'm blown away by the quality and style of the clothes I
                received from Vistora. From casual wear to elegant dresses,
                every piece I've bought has exceeded my expectations.”
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-3 p-2">
          <div className="card p-3 rounded-4  position-relative">
            <div className="forBlur position-absolute w-100 h-100 rounded-4"></div>
            <div className="starRate mb-2">
              <i className="fa-solid fa-star fa-xs"></i>
              <i className="fa-solid fa-star fa-xs"></i>
              <i className="fa-solid fa-star fa-xs"></i>
              <i className="fa-solid fa-star fa-xs"></i>
              <i className="fa-solid fa-star fa-xs"></i>
            </div>
            <div>
              <div className="d-flex">
                <h5 className="card-title mb-2 me-1">Ethan R.</h5>
                <i className="verifiedIcon fa-solid fa-circle-check fa-sm"></i>
              </div>
              <p className="card-text">
                "This t-shirt is a must-have for anyone who appreciates good
                design. The minimalistic yet stylish pattern caught my eye, and
                the fit is perfect. I can see the designer's touch in every
                aspect of this shirt."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
