import React from "react";
import "../asset/styles/components/link-item.scss";

const LinkItem = () => {
  return (
    <>
      <div className="links">
        <div className="link-item">
          <h5 className="link-title">deeperlifebible chirch</h5>
          <p className="link-wrapper">
            <a href="/" className="link">
              jlfzjxlfjxflsjflsjfsl ......
            </a>
          </p>
          <div className="date">
           
            <span className="date__text">
              {" "}
              <span className="date__icon">
                {" "}
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="18px" fill=" #9CA2A9"  viewBox="0 0 24 24">
                  <path d="M19,4H17V3a1,1,0,0,0-2,0V4H9V3A1,1,0,0,0,7,3V4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm1,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12H20Zm0-9H4V7A1,1,0,0,1,5,6H7V7A1,1,0,0,0,9,7V6h6V7a1,1,0,0,0,2,0V6h2a1,1,0,0,1,1,1Z" />
                </svg>
              </span>{" "}
              10 apr 2022
            </span>
          </div>
        </div>
        <div className="link-features">
          <span className="link-delete">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              fill="#9CA2A9"
              height="18px"
              viewBox="0 0 64 58.67"
            >
              <g>
                <g>
                  <path d="M61.33,5.33H48V2.67A2.66,2.66,0,0,0,45.33,0H18.67A2.66,2.66,0,0,0,16,2.67V5.33H2.67a2.67,2.67,0,0,0,0,5.34H8v40a8,8,0,0,0,8,8H48a8,8,0,0,0,8-8v-40h5.33a2.67,2.67,0,1,0,0-5.34ZM50.67,50.67A2.67,2.67,0,0,1,48,53.33H16a2.67,2.67,0,0,1-2.67-2.66v-40H50.67Z" />
                  <path d="M24,45.33a2.67,2.67,0,0,0,2.67-2.66V21.33a2.67,2.67,0,0,0-5.34,0V42.67A2.67,2.67,0,0,0,24,45.33Z" />
                  <path d="M40,45.33a2.67,2.67,0,0,0,2.67-2.66V21.33a2.67,2.67,0,0,0-5.34,0V42.67A2.67,2.67,0,0,0,40,45.33Z" />
                </g>
              </g>
            </svg>
          </span>
          <span className="link-copy">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28px"
              height="26px"
              fill="#9CA2A9"
              viewBox="0 0 64 64"
            >
              <g id="Layer_100" data-name="Layer 100">
                <path d="M44.84,10.5H24.9a5,5,0,0,0-5,5V42.8a5,5,0,0,0,5,5H44.84a5,5,0,0,0,5-5V15.46A5,5,0,0,0,44.84,10.5Zm2,32.3a2,2,0,0,1-2,2H24.9a2,2,0,0,1-2-2V15.46a2,2,0,0,1,2-2H44.84a2,2,0,0,1,2,2Z" />
                <path d="M39.07,50.5H19.18a2,2,0,0,1-2-2V21.23a1.5,1.5,0,0,0-3,0V48.51a5,5,0,0,0,5,5H39.07A1.5,1.5,0,0,0,39.07,50.5Z" />
              </g>
            </svg>
          </span>
          <span className="link-share">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              fill="#9CA2A9"
              height="18px"
              viewBox="0 0 50.67 64"
            >
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path d="M40,42.67a10.74,10.74,0,0,0-7.6,3.17L20,37.15a10.64,10.64,0,0,0,0-10.3l12.4-8.69a10.67,10.67,0,1,0-3.07-7.49,10.6,10.6,0,0,0,.4,2.88L16.29,23a10.41,10.41,0,0,0-5.62-1.63,10.67,10.67,0,0,0,0,21.34A10.41,10.41,0,0,0,16.29,41l13.44,9.41A10.67,10.67,0,1,0,40,42.67ZM40,5.33A5.34,5.34,0,0,1,40,16a5.24,5.24,0,0,1-3.2-1.09A5.32,5.32,0,0,1,40,5.33ZM15.57,34.05A5.27,5.27,0,0,1,11,37.31a1.32,1.32,0,0,1-.29,0,5.33,5.33,0,1,1,0-10.66,1.32,1.32,0,0,1,.29,0A5.27,5.27,0,0,1,15.57,30a5.1,5.1,0,0,1,0,4.1ZM40,58.67a5.32,5.32,0,0,1-3.2-9.58A5.24,5.24,0,0,1,40,48a5.34,5.34,0,0,1,0,10.67Z" />
                </g>
              </g>
            </svg>
          </span>
        </div>
      </div>
      {/* <hr className="seperator" /> */}
    </>
  );
};

export default LinkItem;
