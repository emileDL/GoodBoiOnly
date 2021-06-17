import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const LogoutBtn = () => {
  const { logout, isAuthenticated } = useAuth0();

  return isAuthenticated && <Btn onClick={() => logout()}>sign out</Btn>;
};

const Btn = styled.button`
  font-size: 18px;
  /* font-family: "Quicksand", sans-serif; */
  font-family: "Dancing Script", cursive;
  border: none;
  background: none;
  cursor: pointer;
  color: #ff206e;
  /* text-shadow: 1px 1px black; */
  transition: 0.3s;
  :hover {
    color: white;
    text-shadow: 1px 1px #ff206e;
  }
  :active {
    color: #fbff12;
  }
`;

export default LogoutBtn;
