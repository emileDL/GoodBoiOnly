import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import LoginBtn from "./LoginBtn";
import LogoutBtn from "./LogoutBtn";
import Profile from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";
import { GiSittingDog } from "react-icons/gi";

const Navigation = () => {
  const { isLoading } = useAuth0();

  if (isLoading)
    return (
      <Div2>
        Loading...
        <GiSittingDog size="40" />
      </Div2>
    );

  return (
    <>
      <Wrapper>
        <Div>
          <Navlink exact to="/categories">
            categories
          </Navlink>
          <Navlink exact to="/businesses">
            <Span3> all businesses </Span3>
          </Navlink>
          <Navlink exact to="/parks">
            {/* <img src={newIcon} alt="new" /> */}
            <Span>NEW!</Span>
            parks
          </Navlink>
        </Div>
        <Span2>
          <LoginBtn />
          <LogoutBtn />
          <Profile />
        </Span2>
      </Wrapper>
    </>
  );
};

const Navlink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  transition: 0.5s;
  &.active {
    color: white;
    transition: 0.5s;
  }
  :hover {
    color: white;
  }
  :active {
    color: #41ead4;
  }
`;

const Wrapper = styled.div``;

const Div = styled.div`
  padding: 5px 10px;
  /* background-color: #41ead4; */
  /* background-color: #ff206e; */
  /* background-color: #fbff12; */
  /* background-image: linear-gradient(-45deg, #ff206e, #fbff12, #41ead4); */
  background-image: linear-gradient(-45deg, #41ead4, #fbff12, #ff206e);
  display: flex;
  flex-direction: row;
  /* justify-content: space-around; */
  justify-content: space-evenly;
  align-items: center;
  /* font-family: "Handlee", cursive; */
  font-family: "Major Mono Display", monospace;
  /* font-family: "Megrim", cursive; */
  /* font-family: "Poiret One", cursive; */
`;

const Div2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: "Quicksand", sans-serif;
`;

const Span = styled.span`
  color: #ff206e;
  margin-right: 7px;
  /* font-family: "Bungee Shade", cursive; */
  font-family: "Knewave", cursive;
  font-size: 20px;
  text-shadow: 2px 2px black;
  transition: 0.5s;
  :hover {
    color: #fbff12;
  }
`;

const Span2 = styled.span`
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 5px;
`;

const Span3 = styled.span`
  /* transition: 0.5s; */
  /* color: #41ead4; */
  /* &.active {
    transition: 0.5s;
  } */

  :hover {
    transition: 0.5s;
    color: #41ead4;
  }
  /* :active { */
  /* color: #41ead4; */
  /* } */
`;

export default Navigation;
