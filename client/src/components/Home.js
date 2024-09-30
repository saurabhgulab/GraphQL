import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_QUOTES } from "../gqlOperations/queries";

const Home = () => {
  const { loading, error, data } = useQuery(GET_ALL_QUOTES);
  if (loading) return;
  <h1>loading</h1>;
  if (error) {
    console.log(error.message);
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
