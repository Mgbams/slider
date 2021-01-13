import React from "react";
import PropTypes from "prop-types";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";

function Person({ id, image, name, title, quote, prevClick, nextClick }) {
  let position = "activeState";
  return (
    <div className="row main-container">
      <div style={{ width: "60vw", padding: "0px 20px" }} className={position}>
        <div className="col-sm-12 text-center inner" style={{ width: "100%" }}>
          <div
            className="mt-5"
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <img
              src={image}
              alt={name}
              className="rounded-circle img-fluid"
              style={{ width: "150px", height: "150px" }}
            />
          </div>
        </div>
        <div
          className="row mt-3"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div className="d-flex justify-content-center align-items-center flex-column center-name">
            <h4 className="name">{name}</h4>
            <span>{title}</span>
          </div>
        </div>
        <div
          className="next-prev-icons"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <FiChevronLeft
              className="navigationButton"
              onClick={() => prevClick(id)}
            />
          </div>

          <div>
            <FiChevronRight
              className="navigationButton"
              onClick={() => nextClick(id)}
            />
          </div>
        </div>
        <div className="row mt-3 description">
          <p className="text-center quote-text">{quote}</p>
          <div className="mt-3">
            <FaQuoteRight className="quoteIcon" />
          </div>
        </div>
      </div>
    </div>
  );
}

Person.propTypes = {};

export default Person;
