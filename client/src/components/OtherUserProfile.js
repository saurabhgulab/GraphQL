import React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useQuery } from "@apollo/client";
import { GET_USER_BY_ID } from "../gqlOperations/queries";

export default function OtherUserProfile() {
  const { userid } = useParams();
  const { loading, error, data } = useQuery(GET_USER_BY_ID, {
    variables: { userid },
  });

  if (loading) return <h2>Profile is loading</h2>;
  if (error) {
    console.log(error);
  }
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));
  return (
    <div className="container my-container">
      <div className="center-align">
        <h5>
          {data.user.firstName} {data.user.lastName}
        </h5>
        <h6>{data.user.email}</h6>
      </div>
      <h4>Your quotes</h4>
      <Stack spacing={1}>
        {data.user.quotes.map((quo) => {
          return (
            <div>
              <Item>
                <blockquote>
                  <h6>{quo.name}</h6>
                </blockquote>
              </Item>
            </div>
          );
        })}
      </Stack>
    </div>
  );
}
