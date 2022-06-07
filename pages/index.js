import React, { useState, useEffect } from 'react';


// import Npm randomcolor Package
import randomColor from 'randomcolor';

// import Npm clipboard-copy Package
import copy from 'clipboard-copy';



const Colors = [];

export default function IndexPage() {
  const [bgColor, setbigColor] = useState('');

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

  useEffect(() => {
    let color = randomColor();
    setbigColor(color);
  }, []);

  return (
   <>
   
      {/*  Sucessfull Message Show block Inside Your Screen*/}
      {display ? (
        <div
          onClick={clickHideHandler}
          style={{ display: display ? 'flex' : 'none' }}
          className="Boxblock"
        >
          <h6> You Sucessfull Copy Color Code </h6>
          <h6 className="hideicon">click to close</h6>
        </div>
      ) : (
        ''
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
                  {' '}
                  {val}{' '}
                </button>
              );
            })}
          </div>

          <button
            className="copyall"
            onClick={(event) => copyclickvalue(event, Colors)}
          >
            <span>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                height="18px"
                width="25px"
                viewBox="0 0 50 50"
                style={{ enableBackground: 'new 0 0 50 50' }}
                xmlSpace="preserve"
              >
                <g id="Layer_1">
                  <path
                    d="M11,1v6H1v42h38v-6h10V8.586L41.414,1H11z M42,4.414L45.586,8H42V4.414z M37,47H3V9h8h19v7h7v27V47z M32,10.414L35.586,14
		H32V10.414z M39,41V14.586L31.414,7H13V3h27v7h7v31H39z"
                  />
                </g>
              </svg>
            </span>
            <span> Copy All Color </span>
          </button>
        </div>
      ) : null}
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
              <span>
                <svg
                  id="Layer_1"
                  style={{ enableBackground: 'new 0 0 32 32' }}
                  version="1.1"
                  viewBox="0 0 32 32"
                  xmlSpace="preserve"
                  height="25px"
                  width="25px"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <path d="M28,16c-1.219,0-1.797,0.859-2,1.766C25.269,21.03,22.167,26,16,26c-5.523,0-10-4.478-10-10S10.477,6,16,6  c2.24,0,4.295,0.753,5.96,2H20c-1.104,0-2,0.896-2,2s0.896,2,2,2h6c1.104,0,2-0.896,2-2V4c0-1.104-0.896-2-2-2s-2,0.896-2,2v0.518  C21.733,2.932,18.977,2,16,2C8.268,2,2,8.268,2,16s6.268,14,14,14c9.979,0,14-9.5,14-11.875C30,16.672,28.938,16,28,16z" />
                </svg>
              </span>
              <span>Change Color </span>
            </button>
            <button onClick={clickHandler} className="button">
              <span>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  height="25px"
                  width="25px"
                  viewBox="0 0 50 50"
                  style={{ enableBackground: 'new 0 0 50 50' }}
                  xmlSpace="preserve"
                >
                  <g id="Layer_1">
                    <path
                      d="M11,1v6H1v42h38v-6h10V8.586L41.414,1H11z M42,4.414L45.586,8H42V4.414z M37,47H3V9h8h19v7h7v27V47z M32,10.414L35.586,14
		H32V10.414z M39,41V14.586L31.414,7H13V3h27v7h7v31H39z"
                    />
                  </g>
                </svg>
              </span>
              <span> Copy Color </span>
            </button>
          </div>
        </div>
      </div>
      </>
  );
}
