import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_QUOTE } from "../gqlOperations/mutations";
// import { GET_ALL_QUOTES } from "../gqlOperations/queries";
import { useNavigate } from "react-router-dom";

const CreateQuote = () => {
  const navigate = useNavigate();
  const [quote, setQuote] = useState("");
  const [createQuote, { loading, error, data }] = useMutation(CREATE_QUOTE, {
    refetchQueries: ["getAllQuotes", "getMyProfile"],
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(quote);
    createQuote({
      variables: { name: quote },
    });
    navigate("/profile");
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
  // if (data) {
  //   console.log(data);
  // }
  return (
    <div className="container my-container">
      {error && <div className="red card-panel">{error.message}</div>}
      {data && <div className="green card-panel">{data.quote}</div>}
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
