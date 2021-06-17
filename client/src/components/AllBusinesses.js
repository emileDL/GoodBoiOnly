import React, { useState } from "react";
import Header from "./Header";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { GoStar } from "react-icons/go";
import Footer from "./Footer";
import CircularProgress from "@material-ui/core/CircularProgress";

const AllBusinesses = ({ allBusinesses, setSelectedPlace, hasLoaded }) => {
  const [searchTerm, setSearchTerm] = useState("");
  // const [allBusinesses, setAllBusinesses] = useState([]);
  // useEffect(() => {
  //   fetch("businesses")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("DATA", data.data);
  //       setAllBusinesses(data.data);
  //     });
  // }, []);

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
      <Wrapper>
        <Wrapper2>
          <Header />
          <H1>Montreal businesses</H1>
          <Searchbar
            type="text"
            placeholder="Search for a business that is goodboi friendly"
            onChange={(ev) => {
              setSearchTerm(ev.target.value);
            }}
          />
          <Div2>
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
                // return (
                //   <>
                //     <Div>
                //       <P>{e.name}</P>
                //       <Img src={e.image_url} alt="image" />
                //     </Div>
                //   </>
                // );
                return e.categories !== "parks" ? (
                  <Div>
                    <CardLink
                      exact
                      to={"categories/businesses/business"}
                      onClick={() => setSelectedPlace(e.name)}
                    >
                      <P>{e.name}</P>
                      <Img src={e.image_url} alt="image" />
                      <Div3>
                        <P2>
                          <Span2>
                            {e.rating}
                            <GoStar />
                          </Span2>
                        </P2>
                        <P2>
                          {e.review_count} <Span>reviews</Span>
                        </P2>
                      </Div3>
                    </CardLink>
                  </Div>
                ) : (
                  ""
                );
              })}
          </Div2>
        </Wrapper2>
        <Footer />
      </Wrapper>
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

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Wrapper2 = styled.div`
  /* height: 100vh; */
`;

const P = styled.p`
  font-size: 20px;
  width: 200px;
  /* font-family: "Major Mono Display", monospace; */

  /* font-family: "Bad Script", cursive; */
  /* font-family: "Give You Glory", cursive; */
  /* font-family: "Nothing You Could Do", cursive; */
  /* font-family: "Kaushan Script", cursive; */
  /* font-family: "Marck Script", cursive; */
  /* font-family: "Quicksand", sans-serif; */
  font-family: "Reem Kufi", sans-serif;
  animation: ${showUp} 3000ms;
`;

const P2 = styled.p`
  font-size: 40px;
`;

const H1 = styled.h1`
  font-family: "Quicksand", sans-serif;
  font-weight: bolder;
  font-size: 30px;
  margin: 20px;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 15px;
  border: 0px;
  z-index: 1;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  /* :before { */
  /* content: ; */
  /* } */
  /* :hover { */
  /* filter: brightness(0.5); */
  /* } */
  animation: ${showUp} 3000ms;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 10px 10px 20px;
`;

const Div2 = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Div3 = styled.div`
  position: absolute;
  bottom: 3px;
  left: 0px;
  height: 200px;
  width: 200px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  opacity: 0%;
  transition: 0.5s;
  font-family: "Quicksand", sans-serif;

  :hover {
    transition: all 0.5s;
    opacity: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  }
`;

const Span = styled.span`
  font-size: 20px;
`;

const Span2 = styled.span`
  display: flex;
  align-items: center;
`;

const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  position: relative;
`;

const Searchbar = styled.input`
  width: 500px;
  height: 50px;
  font-size: 20px;
  padding: 0 10px;
  margin: 20px;
  border-radius: 10px;
  border: 0px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
`;

const CircularWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 100vh;
`;

export default AllBusinesses;
