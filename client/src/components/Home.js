import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_QUOTES } from "../gqlOperations/queries";

const Home = () => {
  const { loading, error, data } = useQuery(GET_ALL_QUOTES);
  if (loading)
    return (
      <div className="progress">
        <div className="indeterminate"></div>
      </div>
    );

  if (error) {
    console.log(error.message);
  }
  if (data.quotes.length === 0) {
    return <h2>No quotes found</h2>;
  }
  return (
    <div className="container my-container">
      {data.quotes.map((quote) => {
        return (
          <blockquote>
            <h6>{quote.name}</h6>
            <p className="right-align">{quote.by.firstName}</p>
          </blockquote>
        );
      })}
    </div>
  );
};

export default Home;
