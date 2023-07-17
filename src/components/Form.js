import React from "react";
import { useState } from "react";

const Form = () => {
  const [whichOne, setOne] = useState("male");
  return (
    <form>
      <h1>Select your gender</h1>
      <label htmlFor="one">Male</label>
      <input
        type="radio"
        id="one"
        onClick={() => {
          setOne("male");
        }}
        name="gender"
      />
      <label htmlFor="">Female</label>
      <input
        type="radio"
        onClick={() => {
          setOne("female");
        }}
        name="gender"
      />
      {whichOne === "male" ? (
        <div>
          <h2>Select your shirt size</h2>

          <select name="">
            <option value="Select size">Select size</option>
            <option value="small">small</option>
            <option value="medium">medium</option>
            <option value="large">large</option>
          </select>
        </div>
      ) : (
        <div>
          <h2>Select your dress size</h2>
          <select name="">
            <option value="select size">Select size</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
      )}
    </form>
  );
};
export default Form;
