import React from "react";
import styled from "styled-components";
// import { GiBalloonDog } from "react-icons/gi";
import { GiSittingDog } from "react-icons/gi";
import Navigation from "./Navigation";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Wrapper>
        <Navigation />
        <Div2>
          <Navlink exact to="/">
            <Div>
              {/* <GiBalloonDog color="#ff206e" size="80" /> */}

              <Span4>
                {" "}
                <GiSittingDog color="#ff206e" size="80" />{" "}
              </Span4>
              <H1>
                <Span1>G</Span1>
                <Span2>B</Span2>
                <Span3>O</Span3>
              </H1>
            </Div>
            <P>
              <Span1>Good</Span1>
              <Span2>Boi</Span2>
              <Span3>Only</Span3>
            </P>
          </Navlink>
        </Div2>
      </Wrapper>
    </>
  );
};

const H1 = styled.h1`
  font-size: 150px;
  font-family: "Shadows Into Light", cursive;
`;

const P = styled.p`
  font-size: 25px;
  font-family: "Rock Salt", cursive;
  /* font-family: "Nothing You Could Do", cursive; */
  /* font-family: "Bad Script", cursive; */
  /* font-family: "Kaushan Script", cursive; */
  /* font-family: "Marck Script", cursive; */
  /* font-family: "Give You Glory", cursive; */
  /* font-family: "Caveat", cursive; */
  /* font-family: "Satisfy", cursive; */
  /* font-family: "Gloria Hallelujah", cursive; */
  /* font-family: "Dancing Script", cursive; */
  position: relative;
  left: 95px;
  bottom: 60px;
`;

const Wrapper = styled.div`
  /* background-color: #0c0f0a; */
  /* display: flex; */
  /* flex-direction: column; */
  /* margin-left: 10px; */
`;

const Span1 = styled.span`
  color: #0c0f0a;
  text-shadow: 2px 2px #41ead4;
`;
const Span2 = styled.span`
  color: #ff206e;
  text-shadow: 2px 2px #fbff12;
`;
const Span3 = styled.span`
  color: #fbff12;
  text-shadow: 2px 2px #0c0f0a;
  /* color: #41ead4; */
`;

const Span4 = styled.span`
  position: relative;
  top: 18px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Div2 = styled.div`
  width: 340px;
  height: 240px;
  margin-left: 10px;
`;

const Navlink = styled(NavLink)`
  text-decoration: none;
`;

export default Header;
