import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import AssistantIcon from "@material-ui/icons/Star";
// import StarOutlineIcon from "@material-ui/icons/StarOutline";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import DirectionsIcon from "@material-ui/icons/Directions";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ShareIcon from "@material-ui/icons/Share";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

const Wrapper = styled.div`
  * {
    font-family: Poppins;
    font-weight: 200;
  }
  .main-div {
    position: sticky;
    top: 0px;
    z-index: 3;
    background: rgb(255, 255, 255);
    align-self: flex-start;
  }
  .item-div {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }
  .name-div {
    margin-top: 1rem;
  }
  .item-name {
    line-height: 1.2;
    color: rgb(28, 28, 28);
    margin: 0px;
    font-weight: 500;
    font-size: 2rem;
    cursor: pointer;
  }
  .loc-div {
    font-size: 1.8rem;
    line-height: 1.5;
    color: rgb(130, 130, 130);
    margin-top: 0.5rem;
  }
  .loc-sec {
    font-size: 1.1rem;
    line-height: 1.5;
    color: rgb(130, 130, 130);
  }
  .loc-link {
    color: rgb(105, 105, 105);
    display: inline;
    text-decoration: none;
    font-size: 1rem;
  }
  .time-div {
    display: flex;
    flex-direction: column;
    margin-top: 0.5rem;
    align-items: flex-start;
    transition: opacity 0.2s ease-in-out 0s;
  }
  .time-sec {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    transition: opacity 0.2s ease-in-out 0s;
  }
  .time-close {
    color: rgb(244, 162, 102);
    font-size: 1.1rem;
    line-height: 1.5;
    margin-right: 10px;
  }
  .time-open {
    color: rgb(130, 130, 130);
    font-size: 1.1rem;
    line-height: 1.5;
    margin-right: 8px;
  }
  .info-icon {
    color: rgb(130, 130, 130);
  }
  .star-div {
    display: flex;
    margin-top: 1.5rem;
  }
  .star-sec {
    display: block;
    -webkit-box-align: unset;
    align-items: unset;
    width: max-content;
  }
  .ratings {
    display: flex;
  }
  .star-start {
    margin-left: 80px;
  }
  .star-icon {
    margin: auto;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    cursor: inherit;
    height: 20px;
  }
  .dine-rev {
    line-height: 1.5;
    margin: 0px;
    color: rgb(79, 79, 79);
    width: max-content;
    border-bottom: 1px dashed rgb(181, 181, 181);
    padding-bottom: 0.2rem;
    cursor: pointer;
    font-weight: 400;
    font-size: 1rem;
    display: block;
  }
  .blog-div {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
  }
  .blog-sec {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-top: 1.5rem;
    padding-bottom: 1rem;
    pointer-events: all;
    opacity: 1;
    transition: opacity 0.2s ease-in-out 0s;
  }
  .rev-btn {
    margin-right: 1rem;
    min-width: auto;
    min-height: 36px;
    display: inline-flex;
    -webkit-box-align: stretch;
    align-items: stretch;
    border-radius: 0.6rem;
    background: transparent;
    padding: 0px;
    border: none;
    cursor: pointer;
  }
  .add-rev {
    display: inline-flex;
    vertical-align: middle;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    min-width: auto;
    min-height: 36px;
    line-height: 36px;
    margin-top: 0px;
    margin-left: 0px;
    white-space: nowrap;
    font-size: 1.1rem;
    font-weight: 300;
    color: rgb(255, 255, 255);
    opacity: 1;
    background: border-box rgb(237, 90, 107);
    border-color: rgb(237, 90, 107);
    border-width: 0px;
    border-style: solid;
    border-radius: 0.6rem;
    padding: 0px 1.6rem;
    transition: transform 0.25s ease 0s, opacity 0.25s ease 0s,
      box-shadow 0.25s ease 0s;
    outline: none !important;
  }
  .rev-text {
    display: inline-block;
    vertical-align: middle;
    line-height: normal;
    font-size: inherit;
    transition: transform 0.4s ease 0s;
  }
  .add {
    display: inline-flex;
    vertical-align: middle;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    min-width: auto;
    min-height: 36px;
    line-height: 36px;
    margin-top: 0px;
    margin-left: 0px;
    white-space: nowrap;
    font-size: 1.1rem;
    font-weight: 300;
    color: rgb(237, 90, 107);
    opacity: 1;

    border-color: rgb(28, 28, 28);
    border-width: 0px;
    border-style: solid;
    border-radius: 0.6rem;
    padding: 0px 1.6rem;
    transition: transform 0.25s ease 0s, opacity 0.25s ease 0s,
      box-shadow 0.25s ease 0s;
    outline: none !important;
  }
  .btn {
    margin-right: 1rem;
    min-width: auto;
    min-height: 36px;
    display: inline-flex;
    -webkit-box-align: stretch;
    align-items: stretch;
    border-radius: 0.6rem;
    background: transparent;
    padding: 0px;
    border: 1px solid rgb(28, 28, 28);
    cursor: pointer;
  }

  .direction {
  }
`;

function ItemName() {
  return (
    <>
      <Wrapper>
        <section className="container main-div">
          <section className="item-div">
            <section className="name-div">
              <h1 className="item-name">Om Sweets & Snacks</h1>
              <section className="loc-div">
                <div className="loc-sec">
                  <Link className="loc-link">Quick Bites</Link>
                  <span>,</span>
                  <Link className="loc-link">Sweet Shop</Link>
                  <span> - </span>
                  <Link className="loc-link">North Indian</Link>
                  <span>,</span>
                  <Link className="loc-link">South Indian</Link>
                  <span>,</span>
                  <Link className="loc-link">Chinese</Link>
                  <span>,</span>
                  <Link className="loc-link">Mithai</Link>
                  <span>,</span>
                  <Link className="loc-link">Fast Food</Link>
                  <span>,</span>
                  <Link className="loc-link">Deserts</Link>
                </div>
                <Link className="loc-link">Sector 7 Gurgaon</Link>
              </section>
              <section className="time-div">
                <section className="time-sec">
                  <span className="time-close">Closed</span>
                  <span className="time-open">Open at 8am</span>
                  <div>
                    {["right"].map((placement) => (
                      <OverlayTrigger
                        trigger="hover"
                        key={placement}
                        placement={placement}
                        className="p-2 bd-highlight m-2"
                        overlay={
                          <Popover>
                            <Popover.Content>
                              <p>MON-SUN: 8am-10:30pm</p>
                            </Popover.Content>
                          </Popover>
                        }
                      >
                        <div variant="secondary">
                          <HelpOutlineIcon className="info-icon" />
                        </div>
                      </OverlayTrigger>
                    ))}
                  </div>
                </section>
              </section>
            </section>
            <section className="star-div">
              <section className="star-sec">
                <div className="ratings">
                  <AssistantIcon
                    className=" star-start"
                    style={{ marginLeft: "10px" }}
                  />
                  <AssistantIcon />
                  <AssistantIcon />
                  <AssistantIcon />
                  <AssistantIcon style={{ marginRight: "40px" }} />
                </div>
                <div>
                  <p className="dine-rev">1 Dining Reviews</p>
                </div>
              </section>
              <section className="star-sec">
                <div className="ratings">
                  <AssistantIcon
                    style={{ marginLeft: "18px", color: " rgb(237, 90, 107)" }}
                  />
                  <AssistantIcon style={{ color: " rgb(237, 90, 107)" }} />
                  <AssistantIcon style={{ color: " rgb(237, 90, 107)" }} />
                  <AssistantIcon style={{ color: " rgb(237, 90, 107)" }} />
                  <AssistantIcon
                    style={{
                      marginRight: "120px",
                      color: " rgb(237, 90, 107)",
                    }}
                  />
                </div>
                <div>
                  <p className="dine-rev">63 Delivery Reviews</p>
                </div>
              </section>
            </section>
          </section>
          <div className="blog-div">
            <section className="blog-sec">
              <button className="rev-btn">
                <span className="add-rev">
                  <StarBorderIcon />
                  <span className="rev-text">Add Review</span>
                </span>
              </button>
              <div className="btn">
                <span className="add">
                  <DirectionsIcon />
                  <span style={{ color: "rgb(28, 28, 28)" }}>Direction</span>
                </span>
              </div>
              <div className="btn">
                <span className="add">
                  <BookmarkBorderIcon />
                  <span style={{ color: "rgb(28, 28, 28)" }}>Bookmark</span>
                </span>
              </div>
              <div className="btn">
                <span className="add">
                  <ShareIcon />
                  <span style={{ color: "rgb(28, 28, 28)" }}>Share</span>
                </span>
              </div>
            </section>
          </div>
        </section>
      </Wrapper>
    </>
  );
}

export default ItemName;