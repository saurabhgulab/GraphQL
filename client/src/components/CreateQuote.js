import React, { useState } from "react";

const CreateQuote = () => {
  const [quote, setQuote] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(quote);
  };
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
