import React from "react";
import styled from "styled-components";
import { GiSittingDog } from "react-icons/gi";
import { ImFacebook } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { SiInstagram } from "react-icons/si";
import { CgCopyright } from "react-icons/cg";

const Footer = () => {
  return (
    <>
      <Div>
        <div>
          <GiSittingDog color="#ff206e" />
          <Span1>G</Span1>
          <Span2>B</Span2>
          <Span3>O</Span3>
        </div>
        <Div2>
          <CgCopyright />
          copyright all rights reserved
        </Div2>
        <div>
          {/* follow us! */}
          <ImFacebook color="#41ead4" />
          <SiInstagram color="#ff206e" />
          <Span4>
            {/* <ImTwitter color="#fbff12" /> */}
            <ImTwitter />
          </Span4>
        </div>
      </Div>
    </>
  );
};

const Div = styled.div`
  /* color: #ff206e; */
  /* background-color: black; */
  /* background-image: linear-gradient(-45deg, #ff206e, #fbff12, #41ead4); */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* position: fixed; */
  /* bottom: 0; */
  /* left: 0; */
  /* width: 100%; */
  /* text-align: center; */
  margin: 0 5px;
`;

const Div2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: "Quicksand", sans-serif;
`;

const Span1 = styled.span`
  font-family: "Shadows Into Light", cursive;
  color: #0c0f0a;
  text-shadow: 1px 1px #41ead4;
`;
const Span2 = styled.span`
  font-family: "Shadows Into Light", cursive;
  color: #ff206e;
  text-shadow: 1px 1px #fbff12;
`;
const Span3 = styled.span`
  font-family: "Shadows Into Light", cursive;
  color: #fbff12;
  text-shadow: 1px 1px #0c0f0a;
  /* color: #41ead4; */
`;

const Span4 = styled.span`
  margin-left: 2px;
`;

export default Footer;
