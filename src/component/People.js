import React from "react";
import Person from "./Person";

function People() {
  return (
    <div>
      <div
        className="row d-flex justify-content-center"
        style={{ width: "60vw", padding: "0px 20px" }}
      >
        <h2>
          <span className="span mr-2 font-weight-bold">/ </span>
          Reviews
        </h2>
      </div>
      <Person />
    </div>
  );
}

export default People;
