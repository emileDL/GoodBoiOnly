import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import JSONPretty from "react-json-pretty";
import styled from "styled-components";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <Div>
        <P>hello {user.given_name}!</P>
        <Img src={user.picture} alt={user.name} />
        {/* <p>{user.name}</p> */}
        {/* <p>{user.email}</p> */}
        {/* <JSONPretty data={user} /> */}
      </Div>
    )
  );
};

const Img = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;

const P = styled.p`
  margin-right: 5px;
  font-family: "Quicksand", sans-serif;
  /* font-family: "Dancing Script", cursive; */
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  /* margin-right: 5px; */
  margin-top: 2px;
`;

export default Profile;
