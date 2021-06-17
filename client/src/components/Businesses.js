import React, { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { GoStar } from "react-icons/go";
import Footer from "./Footer";
import CircularProgress from "@material-ui/core/CircularProgress";

const Businesses = ({
  allBusinesses,
  chosenCategories,
  setSelectedPlace,
  hasLoaded,
}) => {
  // console.log(allBusinesses);
  // console.log(chosenCategories);
  const [searchTerm, setSearchTerm] = useState("");

  if (!hasLoaded) {
    return (
      <CircularWrapper>
        {/* <CircularProgress /> */}
        <CircularProgress color="secondary" />
      </CircularWrapper>
    );
  }

  return (
    <>
      <Wrapper2>
        <Wrapper3>
          <Header />
          <H1>{`${chosenCategories}`}</H1>
          <Searchbar
            type="text"
            placeholder="Search for a specific place... "
            onChange={(ev) => {
              setSearchTerm(ev.target.value);
            }}
          />
          <Wrapper>
            {allBusinesses
              .filter((e) => {
                if (searchTerm === "") {
                  return e;
                } else if (
                  e.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return e;
                }
              })
              .map((e) => {
                return e.categories === chosenCategories ? (
                  <div>
                    <CardLink
                      exact
                      to={"/categories/businesses/business"}
                      onClick={() => setSelectedPlace(e.name)}
                    >
                      <Div>
                        {/* <Div3> */}
                        {/* Click here to see more info! */}
                        <Img src={e.image_url} alt="img" />
                        {/* </Div3> */}
                        <Div2>
                          <P>
                            <Span>{e.name}</Span>
                          </P>
                          <P>{e.location.display_address[0]}</P>
                          <P>{e.location.display_address[1]}</P>
                          <P>
                            {e.rating} <GoStar />
                          </P>
                          <P>{e.review_count} reviews</P>
                        </Div2>
                      </Div>
                    </CardLink>
                  </div>
                ) : (
                  ""
                );
              })}
          </Wrapper>
        </Wrapper3>
        <Footer />
      </Wrapper2>
    </>
  );
};

const showUp = keyframes`
from{
  opacity: 0%;
}
to{
  opacity: 100%;
}
`;

const Wrapper2 = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Wrapper3 = styled.div`
  /* height: 100vh; */
`;

const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Searchbar = styled.input`
  width: 500px;
  height: 50px;
  font-size: 20px;
  padding: 0 10px;
  margin: 20px;
  border-radius: 10px;
  border: 1px solid black;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Quicksand", sans-serif;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* align-content: center; */
  /* align-items: center; */
  margin: 20px;
  width: 800px;
  transition: 0.5s;
  /* background-color: whitesmoke; */
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  :hover {
    transform: translateX(100px);
  }
`;

const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 20px;
`;

// const H2 = styled.h2`
//   font-size: 30px;
//   font-weight: bold;
// `;

// const Div3 = styled.div``;

const H1 = styled.h1`
  font-family: "Quicksand", sans-serif;
  font-weight: bolder;
  font-size: 30px;
  margin: 20px;
`;

const P = styled.p`
  font-size: 25px;
  /* margin: 20px; */
  width: 200px;
`;

const Span = styled.span`
  font-weight: 900;
  font-size: 30px;
`;

const Img = styled.img`
  max-width: 500px;
  /* width: 500px; */
  /* max-height: 600px; */
  position: relative;
  right: 40px;
  animation: ${showUp} 3000ms;
`;

const CircularWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 100vh;
`;

export default Businesses;
