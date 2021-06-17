import React, { useEffect, useState } from "react";
import Header from "./Header";
import { GoStar } from "react-icons/go";
// import { ImPencil } from "react-icons/im";
import { VscTrash } from "react-icons/vsc";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import Footer from "./Footer";
import cooldog3 from "../media/cool-dog-3.jpeg";
import yelp from "../media/yelp-logo-transparent-background-4.png";
import CircularProgress from "@material-ui/core/CircularProgress";

const Business = ({ selectedPlace, allBusinesses, hasLoaded }) => {
  // console.log("1", allBusinesses);
  // console.log("2", selectedPlace);
  const { user, isAuthenticated } = useAuth0();
  const [reviewContent, setReviewContent] = useState("");
  const [reviews, setReviews] = useState([]);
  const [newReviews, setNewReviews] = useState(true);
  const [reviewId, setReviewId] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    fetch("/reviews", {
      method: "POST",
      body: JSON.stringify({
        status: reviewContent,
        business: selectedPlace,
        name: user.name,
        picture: user.picture,
        email: user.email,
      }),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        // console.log("REVIEW", json);
        setNewReviews(true);
        setReviewContent("");
      });
  };

  // useEffect(() => {
  const handleDelete = (ev) => {
    // ev.preventDefault();
    // setReviewId(e._id);
    // try {
    fetch(`/review/${reviewId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log("JSON", json);
        setNewReviews(true);
      });

    // } catch (err) {
    // console.log("ERROR MESSAGE", err);
    // }
  };
  // }, [setReviewId]);

  // const handleEdit = () => {};

  useEffect(() => {
    if (!newReviews) {
      return;
    }
    fetch("/reviews")
      .then((res) => res.json())
      .then((data) => {
        // console.log("DATA", data.data);
        setReviews(data.data);
        setNewReviews(false);
      });
  }, [setReviews, newReviews]);

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
          {/* <div>{`${selectedPlace}`}</div> */}
          {allBusinesses.map((e) => {
            return e.name === selectedPlace ? (
              <Div>
                <Img src={e.image_url} alt="img" />
                <Div2>
                  <P>
                    <Span>{e.name}</Span>
                  </P>
                  <P>
                    {/* <Span2>Category :</Span2> */}
                    {e.categories}
                  </P>
                  <P>
                    {/* <Span2>Phone number :</Span2> */}
                    {e.display_phone}
                  </P>
                  <P>
                    {/* <Span2>Address :</Span2> */}
                    {e.location.display_address[0]}
                  </P>

                  <P>{e.location.display_address[1]}</P>
                  <P>
                    <Span4>
                      {e.rating} {/* <Span5> */} <GoStar />
                      {/* </Span5> */}
                      <Img3
                        // src="https://centerforsightlv.com/wp-content/uploads/2018/10/yelp-logo-transparent-background-4.png"
                        src={yelp}
                        alt="yelp"
                      />
                    </Span4>
                  </P>
                  <Span4>
                    <P>{e.review_count} reviews </P>
                    <Img4 src={yelp} alt="yelp" />
                  </Span4>

                  <P>
                    <Span2> Size allowed : </Span2>
                    {e.size_allowed}
                  </P>
                  <P>
                    <Span2>Max allowed : </Span2>
                    {e.max_allowed}
                  </P>
                  <P>
                    {" "}
                    <Span2>Transport :</Span2> {e.transport}
                  </P>
                  <P>
                    <Span2>Ratio :</Span2> {e.ratio}
                  </P>
                  <P>
                    <Span2>Is closed due to COVID19 : </Span2>
                    <Span3>{e.is_closed}</Span3>
                  </P>
                </Div2>
              </Div>
            ) : (
              ""
            );
          })}
          <Div5>
            <P2>let us know how was your experience!</P2>
            <StyledInput
              type="text"
              placeholder={
                isAuthenticated ? "Write a review..." : "please sign in"
              }
              disabled={!isAuthenticated}
              value={reviewContent}
              onChange={(ev) => setReviewContent(ev.target.value)}
            />
            <StyledInput2
              type="submit"
              value="comment"
              onClick={handleSubmit}
              disabled={!isAuthenticated}
            />
            {reviews.map((e) => {
              // console.log(selectedPlace);
              // console.log("E", e);
              return e.business === selectedPlace ? (
                <Div3>
                  <Div6>
                    <Img2 src={e.picture} alt="gmail picture" />
                    <Div4>
                      <P3>{e.name}</P3>
                      <P4>{e.status}</P4>
                      {/* <p>{e._id}</p> */}
                    </Div4>
                  </Div6>
                  {/* {user.name === e.name ? ( */}
                  <Div7>
                    {/* <Btn
                      onClick={() => {
                        handleEdit();
                      }}
                    >
                      EDIT <ImPencil />
                    </Btn> */}
                    <Btn
                      onClick={() => {
                        handleDelete();
                        setReviewId(e._id);
                      }}
                    >
                      {/* <Btn> */}
                      DELETE <VscTrash />
                    </Btn>
                  </Div7>
                  {/* ) : (  */}
                  {/* ""  */}
                  {/* )  */}
                  {/* };  */}
                </Div3>
              ) : (
                ""
              );
            })}
          </Div5>
        </Wrapper2>
        <Footer />
      </Wrapper>
    </>
  );
};

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
  /* border-left: 1px solid black; */
`;

const Div2 = styled.div`
  border-left: 1px solid black;
  margin: 30px;
`;

const Div3 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 590px;
  /* background: gray; */
  margin-bottom: 10px;
`;

const Div4 = styled.div`
  display: flex;
  flex-direction: column;
`;

const Div5 = styled.div`
  margin: 10px;
`;

const Div6 = styled.div`
  display: flex;
  flex-direction: row;
`;

const Div7 = styled.div``;

const P = styled.p`
  /* width: 500px; */
  margin: 30px;
  font-family: "Quicksand", sans-serif;
  /* font-family: 'Reem Kufi', sans-serif; */
`;

const P2 = styled.p`
  font-family: "Major Mono Display", monospace;
`;

const P3 = styled.h1`
  /* font-family: "Quicksand", sans-serif; */
  font-family: "Reem Kufi", sans-serif;
  font-weight: bolder;
  /* text-shadow: 1px 1px black; */
`;

const P4 = styled.p`
  font-family: "Quicksand", sans-serif;
  width: 400px;
`;

const Img = styled.img`
  max-height: 700px;
  max-width: 700px;
  min-width: 400px;
  margin: 30px 0 30px 30px;
  /* padding-right: 30px; */
  /* border-right: 1px solid black; */
  /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
  /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px; */
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  border-radius: 5px;
`;

const Span = styled.span`
  font-size: 30px;
`;

const Span2 = styled.span`
  font-weight: bolder;
`;

const Span3 = styled.span`
  color: red;
  font-style: italic;
`;

const Span4 = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: -30px 0px;
`;

// const Span5 = styled.span`
// margin-left: 5px;
// margin-top: 2px;
// `;

const Img2 = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 5px;
`;

const Img3 = styled.img`
  width: 90px;
  margin-left: 67px;
  /* margin-top: -50px; */
  /* margin-bottom: -10px; */
  position: relative;
  left: 75px;
  /* padding-top: 20px; */
`;

const Img4 = styled.img`
  width: 90px;
  position: relative;
  left: 75px;
`;

const Btn = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    color: #ff206e;
    transform: scale(1.1);
    transform: translateY(-5px);
  }
`;

const StyledInput = styled.input`
  margin: 10px 0;
  width: 575px;
  padding: 5px 0px 50px 5px;
  border-radius: 5px;
  border: 0px solid black;
  /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  background-image: url(${cooldog3});
  background-size: contain;
  background-repeat: no-repeat;
  /* background-position: center; */
  text-indent: 100px;
`;

const StyledInput2 = styled.input`
  font-family: "Major Mono Display", monospace;
  font-size: 12px;
  position: relative;
  right: 80px;
  top: 45px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  background: #41ead4;
  transition: 0.4s;
  :hover {
    background: #fbff12;
    color: #ff206e;
  }
  :active {
    color: white;
  }
`;

const CircularWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 100vh;
`;

export default Business;
