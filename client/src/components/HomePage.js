import React, { useEffect, useState, useRef } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import styled, { keyframes } from "styled-components";
import { RiSearch2Line } from "react-icons/ri";
import { GiSittingDog } from "react-icons/gi";
import { GiTronArrow } from "react-icons/gi";
import goodBoys2 from "../media/good-boys-2.jpeg";
// import cooldog3 from "../media/cool-dog-3.jpeg";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";
// import { SiFurrynetwork } from "react-icons/si";
import { FaPaw } from "react-icons/fa";
// import CircularProgress from "@material-ui/core/CircularProgress";

const calc = (x, y, rect) => [
  -(y - rect.top - rect.height / 2) / 5,
  (x - rect.left - rect.width / 2) / 5,
  1.4,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const HomePage = ({ setSelectedPlace }) => {
  const ref = useRef(null);
  const [xys, set] = useState([0, 0, 1]);
  // const config = useControls({
  //   mass: 1,
  //   tension: 170,
  //   friction: 26,
  //   clamp: false,
  //   precision: 0.01,
  //   velocity: 0,
  //   easing: (t) => t,
  // });
  const props = useSpring({ xys });

  const [searchTerm, setSearchTerm] = useState([]);
  const [searchTermCat, setSearchTermCat] = useState("");
  const [value, setValue] = useState("");
  const [selectedSuggestions, setSelectedSuggestions] = useState(0);
  // const history = useHistory();

  useEffect(() => {
    // fetch("/search")
    fetch("/businesses")
      .then((res) => res.json())
      .then((data) => {
        // console.log("TEST", data.data);
        setSearchTerm(data.data);
        setSearchTermCat(data.data);
      });
    // fetch("/get/:id")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log("TEST2", data.data);
    //     setSearchTermId(data.data);
    // });
  }, [setSearchTerm]);

  const matchedSuggestions = searchTerm.filter((suggestion) => {
    return (
      suggestion.name.toLowerCase().includes(value.toLowerCase()) &&
      value.length >= 2
    );
  });

  // if (!hasLoaded) {
  //   return (
  //     <CircularWrapper>
  //       {/* <CircularProgress /> */}
  //       <CircularProgress color="secondary" />
  //     </CircularWrapper>
  //   );
  // }

  return (
    <>
      <Wrapper>
        <Wrapper2>
          <div>
            <Navigation />
            <Div2>
              <Span5>
                {" "}
                <GiSittingDog color="#ff206e" size="110" />{" "}
              </Span5>
              <animated.div
                style={{ transform: props.xys.to(trans) }}
                onMouseLeave={() => set([0, 0, 1])}
                onMouseMove={(e) => {
                  const rect = ref.current.getBoundingClientRect();
                  set(calc(e.clientX, e.clientY, rect));
                }}
                ref={ref}
              >
                <Div>
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
              </animated.div>
              {/* <Img2 src={cooldog3} /> */}
              <Searchbar
                type="text"
                placeholder="Search for a place to bring your goodboi with you!"
                value={value}
                onChange={(ev) => setValue(ev.target.value)}
                // onKeyDown={(ev) => {
                //   switch (ev.key) {
                //     case "Enter": {
                //       setSelectedPlace(ev.target.value);
                //       history.push("/categories/businesses/business");
                //       return;
                //     }
                //     case "ArrowUp": {
                //       setSelectedSuggestions(selectedSuggestions - 1);
                //       return;
                //     }
                //     case "ArrowDown": {
                //       setSelectedSuggestions(selectedSuggestions + 1);
                //       return;
                //     }
                //   }
                // }}
              />
              <Ul>
                {matchedSuggestions.map((suggestion, index) => {
                  // let newString = "";
                  // searchTermCat.map((i) => {
                  // if (i[0] === suggestion.categories) {
                  //   return (newString = i[1].name);
                  // }
                  // });

                  return (
                    <CardLink
                      exact
                      to={"categories/businesses/business"}
                      onClick={() => setSelectedPlace(suggestion.name)}
                    >
                      <StyledLi
                        // key={suggestion.name}
                        onMouseEnter={() => setSelectedSuggestions(index)}
                        // onClick={() => handleSelect(suggestion.title)}
                      >
                        <Span7>
                          {/* <SiFurrynetwork /> */}
                          <FaPaw />
                        </Span7>
                        {suggestion.name}
                      </StyledLi>
                    </CardLink>
                  );
                })}
              </Ul>
              <Span4>
                <RiSearch2Line size="30" />
              </Span4>
            </Div2>
          </div>
          <div>
            <Div3>
              <Span>NEW FEATURE</Span>
              <P2>click here to see all the dog parks in montreal</P2>
              <Span6>
                {" "}
                <GiTronArrow size="30" />
              </Span6>
            </Div3>
            <Navlink exact to="/parks">
              {/* <Img src={goodBoys2} alt="dog park" /> */}
              <DivImg>
                <Img />
              </DivImg>
            </Navlink>
          </div>
        </Wrapper2>
        <Footer />
      </Wrapper>
    </>
  );
};

const slideIn = keyframes`
from{
  transform: translateX(-500px)
}
to{
  transform: translateX(0px)
}
`;

const showUp = keyframes`
from{
  opacity: 0%;
}
to{
  opacity: 100%;
}
`;

const Wrapper2 = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

const H1 = styled.h1`
  font-size: 200px;
  font-family: "Shadows Into Light", cursive;
`;

const P = styled.p`
  font-size: 30px;
  font-family: "Rock Salt", cursive;
  position: relative;
  /* left: 100px; */
  bottom: 75px;
`;

const P2 = styled.p`
  font-family: "Major Mono Display", monospace;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Div3 = styled.div`
  position: relative;
  left: 150px;
  top: 150px;
  width: 300px;
  animation: ${slideIn} 2500ms;
`;

const Searchbar = styled.input`
  width: 500px;
  height: 50px;
  font-size: 20px;
  padding: 0 10px;
  /* border-radius: 10px 10px 0px 0px; */
  border-radius: 10px;
  border: 0px solid black;
  position: relative;
  top: 15px;
  /* box-shadow: blue 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px,
    rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px,
    rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px,
    rgb(255, 156, 85) 30px -30px, rgb(255, 255, 255) 40px -40px 0px -3px,
    rgb(255, 85, 85) 40px -40px; */
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  :focus {
    outline: none;
  }
`;

const Ul = styled.ul`
  /* display: flex; */
  /* box-shadow: 5px 10px lightGray; */
  background-color: white;
  border: 0px solid black;
  position: absolute;
  top: 603px;
  width: 500px;
  border-radius: 0px 0px 10px 10px;
  z-index: 10;
  text-align: left;
  padding-left: 20px;
  padding-top: 10px;
  /* list-style-type: circle; */
  list-style-type: none;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
  font-family: "Quicksand", sans-serif;
  /* font-family: 'Reem Kufi', sans-serif; */
`;

const StyledLi = styled.li`
  :hover {
    background-color: lightcyan;
  }
`;

const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Span = styled.span`
  font-family: "Faster One", cursive;
  font-size: 25px;
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
  left: 225px;
  bottom: 25px;
`;

const Span6 = styled.span`
  position: relative;
  left: 155px;
  bottom: 10px;
`;

const Span5 = styled.span`
  position: relative;
  right: 200px;
  top: 242px;
`;

const Span7 = styled.span`
  position: relative;
  right: 10px;
`;

const DivImg = styled.div`
  height: 300px;
  width: 300px;
  border-radius: 50%;
  margin-bottom: 100px;
  overflow: hidden;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  transition: 0.5s;
  animation: ${showUp} 6000ms;
  background-image: url(${goodBoys2});
  :hover {
    transform: scale(1.2);
  }
`;

// const Img = styled.img`
const Img = styled.div`
  /* border-radius: 50%; */
  /* height: 300px; */
  /* width: 300px; */
  height: 100%;
  width: 100%;
  /* margin-bottom: 100px; */
  /* box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; */
  transition: 0.5s;
  animation: ${showUp} 1000ms;
  background-image: url(${goodBoys2});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: -15px -20px;
  :hover {
    height: 300px;
    transform: scale(1.4);
    width: 300px;
  }
`;

// const Img2 = styled.img`
//   height: 300px;
//   border-radius: 50% 50% 0 0;
//   z-index: 0;
// `;

const Navlink = styled(NavLink)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-content: center;
  position: relative;
  left: 500px;
  width: 300px;
`;

// const CircularWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   align-content: center;
//   height: 100vh;
// `;

export default HomePage;
