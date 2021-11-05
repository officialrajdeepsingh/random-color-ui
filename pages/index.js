import React, { useState } from "react";

// import Npm randomcolor Package
import randomColor from "randomcolor";

// import Npm clipboard-copy Package
import copy from "clipboard-copy";

const Colors = [];
export default function IndexPage() {
  const [bgColor, setbigColor] = useState("");

  const [display, setdisplay] = useState(false);

  //  Click Function  Working Olny  When Click on Screen

  const clickHandler = (event) => {
    event.stopPropagation();
    event.preventDefault();
    copy(bgColor);

    //  Show Suceess Full Message On Your Screen
    setdisplay(true);
  };

  // clickHideHandler Function Hide Suceess Full Message On Your Screen
  const clickHideHandler = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setdisplay(false);
  };

  // MouseHover Function Work only Mouse Hovering

  function MouseHover(event) {
    event.stopPropagation();
    event.preventDefault();
    let color = randomColor();
    Colors.push(color);
    setbigColor(color);
  }

  function copyclickvalue(event, val) {
    event.stopPropagation();
    event.preventDefault();
    copy(val);

    //  Show Suceess Full Message On Your Screen
    setdisplay(true);
  }

  return (
    <>
      {/*  Sucessfull Message Show block Inside Your Screen*/}
      {display ? (
        <div
          onClick={clickHideHandler}
          style={{ display: display ? "flex" : "none" }}
          className="Boxblock"
        >
          <h6> You Sucessfull Copy Color Code </h6>
          <h6 className="hideicon">click to close</h6>
        </div>
      ) : (
        ""
      )}
      {Colors.length > 0 ? (
        <div className="colorcopybutton">
          <div className="colorbox">
            {Colors.map((val) => {
              return (
                <button
                  style={{ backgroundColor: val }}
                  key={val}
                  className="colorvalebutton"
                  onClick={(event) => copyclickvalue(event, val)}
                >
                  {" "}
                  {val}{" "}
                </button>
              );
            })}
          </div>

          <button
            className="copyall"
            onClick={(event) => copyclickvalue(event, Colors)}
          >
            {" "}
            Copy All Color{" "}
          </button>
        </div>
      ) : (
        <p> no color </p>
      )}
      {/* Mouse Hover color Change Inside You Screen */}
      <div className="divOuter">
        <div
          style={{
            backgroundColor: bgColor
          }}
          className="App"
        >
          <div className="cardbox">
            {/* <p className="cardboxtitle"> Start click on canvas </p> */}

            <button onClick={MouseHover} className="button">
              {" "}
              Change Color{" "}
            </button>
            <button onClick={clickHandler} className="button">
              {" "}
              Copy Color{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
