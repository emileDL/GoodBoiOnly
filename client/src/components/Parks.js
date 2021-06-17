import React, { useState } from "react";
import Header from "./Header";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import CircularProgress from "@material-ui/core/CircularProgress";

const Parks = ({ allBusinesses, setSelectedPlace, hasLoaded }) => {
  const [searchTerm, setSearchTerm] = useState("");
  // const [categories, setCategories] = useState([]);
  // useEffect(() => {
  //   fetch("businesses")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCategories(data.data);
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
          <H1>Parks</H1>
          <Searchbar
            type="text"
            placeholder="Search for a park to go play with your goodboi"
            onChange={(ev) => {
              setSearchTerm(ev.target.value);
            }}
          />
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
              // let newArr = [];
              // if (e.categories === "park") {
              // newArr.push(e.name);
              // }
              // return <div>{newArr}</div>;
              return e.categories === "parks" ? (
                <div>
                  <CardLink
                    exact
                    to={"categories/businesses/business"}
                    onClick={() => setSelectedPlace(e.name)}
                  >
                    <Div>
                      <Img src={e.image_url} alt="image" />
                      <P>{e.name}</P>
                    </Div>
                  </CardLink>
                </div>
              ) : (
                ""
              );
            })}
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

const slideIn = keyframes`
from{
  transform: translateX(550px)
}
to{
  transform: translateX(0px)
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

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  left: 25%;
  /* :hover {
    padding-bottom: 10px;
  } */
`;

const Img = styled.img`
  width: 400px;
  height: auto;
  margin: 20px;
  border-radius: 10px;
  /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  transition: 0.5s;
  animation: ${showUp} 3000ms;

  :hover {
    transform: scale(1.2);
    margin-top: 150px;
    margin-bottom: 150px;
    margin-right: 50px;
  }
`;

const P = styled.p`
  font-family: "Quicksand", sans-serif;
  font-size: 30px;
  margin-left: 30px;
  /* animation: ${showUp} 3000ms; */
  animation: ${slideIn} 2500ms;
`;

const H1 = styled.h1`
  font-family: "Quicksand", sans-serif;
  font-weight: bolder;
  font-size: 30px;
  margin: 20px;
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

const CircularWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 100vh;
`;

export default Parks;
