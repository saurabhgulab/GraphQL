import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_QUOTE } from "../gqlOperations/mutations";

const CreateQuote = () => {
  const [quote, setQuote] = useState("");
  const [createQuote, { loading, error, data }] = useMutation(CREATE_QUOTE);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(quote);
    createQuote({
      variables: { name: quote },
    });
  };
  if (loading)
    return (
      <div className="progress">
        <div className="indeterminate"></div>
      </div>
    );
  if (error) {
    console.log(error.message);
  }
  if (data) {
    console.log(data);
  }
  return (
    <div className="container my-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={quote}
          placeholder="what's in your mind"
          onChange={(e) => setQuote(e.target.value)}
        />
        <button className="btn submit_button_1" type="submit" name="action">
          Submit
          <i className="material-icons right">arrow_forward</i>
        </button>
      </form>
    </div>
  );
};

export default CreateQuote;
