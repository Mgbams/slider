import React from "react";
import PropTypes from "prop-types";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";

function Person(props) {
  return (
    <div className="row" style={{ width: "60vw", padding: "0px 20px" }}>
      <div className="col-sm-12 text-center" style={{ width: "100%" }}>
        <div
          className="mt-5"
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <img
            src="https://www.gettyimages.fr/gi-resources/images/500px/983794168.jpg"
            alt=""
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
        <div>
          <FiChevronLeft className="navigationButton" />
        </div>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <h4>Mgbams Kingsley</h4>
          <span>Office Manager</span>
        </div>
        <div>
          <FiChevronRight className="navigationButton" />
        </div>
      </div>
      <div className="row mt-3 description">
        <p className="text-center">
          Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid
          viral kombucha gentrify fanny pack raclette pok pok mustache.
        </p>
        <div className="mt-3">
          <FaQuoteRight className="quoteIcon" />
        </div>
      </div>
    </div>
  );
}

Person.propTypes = {};

export default Person;
