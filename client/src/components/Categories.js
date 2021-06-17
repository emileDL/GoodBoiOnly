import React from "react";
// import { useHistory } from "react-router";
import Header from "./Header";
import styled, { keyframes } from "styled-components";
import { BiRestaurant } from "react-icons/bi";
import { BiDrink } from "react-icons/bi";
import { BiCar } from "react-icons/bi";
import { FiCoffee } from "react-icons/fi";
import { FiScissors } from "react-icons/fi";
import { RiShirtLine } from "react-icons/ri";
import cooldog1 from "../media/cool-dog-1.webp";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import CircularProgress from "@material-ui/core/CircularProgress";

const Categories = ({
  allBusinesses,
  // chosenCategories,
  setChosenCategories,
  hasLoaded,
}) => {
  // let history = useHistory();
  // const [categories, setCategories] = useState([]);
  // const [chosenCategories, setChosenCategories] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     await fetch("/businesses")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data.data);
  //         setCategories(data.data);
  //       });
  //   };
  //   fetchData();
  // }, [setCategories]);

  // console.log("TEST", chosenCategories);
  // useEffect(() => {
  //   switch (chosenCategories) {
  //     case "restaurants":
  //       history.push("/categories/businesses");
  //       break;
  //     case "coffee shops":
  //       history.push("/categories/businesses");
  //       break;
  //     case "bistros & bars":
  //       history.push("/categories/businesses");
  //       break;
  //     case "cars":
  //       history.push("/categories/businesses");
  //       break;
  //     case "fashion":
  //       history.push("/categories/businesses");
  //       break;
  //     case "hairdressers":
  //       history.push("/categories/businesses");
  //       break;
  //     case "default":
  //       history.push("/businesses");
  //       break;
  //   }
  // }, [chosenCategories, history]);

  if (!hasLoaded) {
    return (
      <CircularWrapper>
        {/* <CircularProgress /> */}
        <CircularProgress color="secondary" />
      </CircularWrapper>
    );
  }

  return (
    // <>
    // <Header />
    // <div>categories</div>
    // {categories.map((e) => {
    // return <div>{e.categories}</div>;
    // let newArr = e.categories;
    // let unique = [...new Set(newArr)];
    // let unique = [...new Set(e.categories)];
    // return <div>{unique}</div>;
    // })}
    // </>
    <>
      <Wrapper2>
        <Wrapper3>
          <Header />
          <CardLink exact to={"categories/businesses"}>
            <Wrapper>
              <Restaurants onClick={() => setChosenCategories("restaurants")}>
                <BiRestaurant size="20" />
                {allBusinesses[0].categories}
              </Restaurants>
              <CoffeeShop onClick={() => setChosenCategories("coffee shops")}>
                <FiCoffee size="20" />
                {allBusinesses[6].categories}
              </CoffeeShop>
              <BistrosBars
                onClick={() => setChosenCategories("bistros & bars")}
              >
                <BiDrink size="20" />
                {allBusinesses[3].categories}
              </BistrosBars>
              <Hairdressers onClick={() => setChosenCategories("hairdressers")}>
                <FiScissors size="20" />
                {allBusinesses[17].categories}
              </Hairdressers>
              <Cars onClick={() => setChosenCategories("cars")}>
                <BiCar size="20" />
                {allBusinesses[22].categories}
              </Cars>
              <Fashion onClick={() => setChosenCategories("fashion")}>
                <RiShirtLine size="20" />
                {allBusinesses[40].categories}
              </Fashion>
            </Wrapper>
          </CardLink>
          <Img src={cooldog1} alt="dog" />
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 20px;
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

const Restaurants = styled.button`
  font-family: "Major Mono Display", monospace;
  border: none;
  background-color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s;
  :hover {
    padding-right: 30px;
    font-size: large;
    /* color: red; */
    /* color: #41ead4; */
    color: #ff206e; //RED
    /* content: "»"; */
  }
  :active {
    color: #fcf75e; //YELLOW
  }
`;

const CoffeeShop = styled.button`
  font-family: "Major Mono Display", monospace;
  border: none;
  background-color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s;
  :hover {
    padding-right: 30px;
    padding-left: 30px;
    font-size: large;
    /* color: #41ead4; */
    /* color: #ff206e; */
    /* color: #fbff12; */
    color: #41ead4; //BLUE
    :active {
      color: #fcf75e; //YELLOW
    }
  }
`;

const BistrosBars = styled.button`
  font-family: "Major Mono Display", monospace;
  border: none;
  background-color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s;
  :hover {
    padding-right: 30px;
    padding-left: 30px;
    font-size: large;
    color: #ff206e;
    :active {
      color: #fcf75e; //YELLOW
    }
  }
`;

const Cars = styled.button`
  font-family: "Major Mono Display", monospace;
  border: none;
  background-color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s;
  :hover {
    padding-right: 30px;
    padding-left: 30px;
    font-size: large;
    /* color: #41ead4; */
    /* color: #ff206e; */
    /* color: #fbff12; */
    color: #ff206e;
  }
  :active {
    color: #fcf75e; //YELLOW
  }
`;

const Hairdressers = styled.button`
  font-family: "Major Mono Display", monospace;
  border: none;
  background-color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s;
  :hover {
    padding-right: 30px;
    padding-left: 30px;
    font-size: large;
    color: #41ead4; //BLUE
  }
  :active {
    color: #fcf75e; //YELLOW
  }
`;

const Fashion = styled.button`
  font-family: "Major Mono Display", monospace;
  border: none;
  background-color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s;
  :hover {
    padding-left: 30px;
    font-size: large;
    color: #41ead4; //BLUE
    /* color: #ff206e; */
  }
  :active {
    color: #fcf75e; //YELLOW
  }
`;

const Img = styled.img`
  max-width: 1000px;
  height: auto;
  position: relative;
  left: 10%;
  top: 100px;
  animation: ${showUp} 3000ms;
`;

const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const CircularWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 100vh;
`;

export default Categories;
