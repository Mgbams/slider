import React, { useState, useEffect } from "react";
import Person from "./Person";
import data from "../data";

function People() {
  const [value, setValue] = useState(0);
  const [person, setPerson] = useState(data[value]);

  const prevClick = (id) => {
    console.log("prev", id);
    if (id === 1) {
      setValue(data.length - 1);
    } else {
      setValue((value) => value - 1);
    }
  };

  const nextClick = (id) => {
    console.log("next", id);
    if (id < 4) {
      setValue((value) => value + 1);
    } else {
      setValue(0);
    }
  };

  useEffect(() => {
    setPerson(data[value]);

    const intervalId = setInterval(() => {
      if (value === 3) {
        setValue(0);
      } else {
        setValue((value) => value + 1);
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [value]);

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
      <Person {...person} prevClick={prevClick} nextClick={nextClick} />
    </div>
  );
}

export default People;
