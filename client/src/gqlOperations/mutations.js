import { gql } from "@apollo/client";

export const SIGNUP_USER = gql`
  mutation createNewUser($userNew: UserInput!) {
    user: signUpUser(userNew: $userNew) {
      firstName
    }
  }
`;

export const LOGIN_USER = gql`
  mutation SigninUser($userSignin: UserSigninInput!) {
    user: signinUser(userSignin: $userSignin) {
      token
    }
  }
`;
