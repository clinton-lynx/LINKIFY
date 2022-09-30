import React from "react";
import Header from './Header';
import "../asset/styles/components/add-link-form.scss";
const AddLinkForm = () => {
  return (
    <div className="page-wrapper">
    <div className="logo">
    <svg
              width="87"
              height="30"
              viewBox="0 0 87 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.18 8.04V22H25.38V8.04H28.18ZM42.8864 22H40.0864L33.7464 12.42V22H30.9464V8.02H33.7464L40.0864 17.62V8.02H42.8864V22ZM53.5334 22L48.4534 15.78V22H45.6534V8.04H48.4534V14.3L53.5334 8.04H56.9134L51.1534 14.96L57.0734 22H53.5334ZM61.7152 8.04V22H58.9152V8.04H61.7152ZM73.1016 8.04V10.3H67.2816V13.88H71.7416V16.1H67.2816V22H64.4816V8.04H73.1016ZM86.187 8.04L81.467 17.14V22H78.667V17.14L73.927 8.04H77.087L80.087 14.42L83.067 8.04H86.187Z"
                fill="#588DE4"
              />
              <rect
                y="2"
                width="23"
                height="24.2105"
                rx="3.63158"
                fill=" #588DE4"
              />
              <path
                d="M8.21364 8.76755H12.0296V18.4068H8.21364V8.76755ZM13.2496 17.733C13.2496 16.7542 13.817 16.0898 14.9519 15.7399C15.3869 15.6075 15.9473 15.5413 16.6329 15.5413H17.1933V18.421H13.2496V17.733Z"
                fill="white"
              />
            </svg>
    </div>
      <div className="main">
        <form action="" className="add-link-form">
          <div className="add-title">
            <input type="text" required placeholder="add title" className="add-title" />
          </div>
          <div className="add-link-wrapper">
            {" "}
            <input type="text" required placeholder="paste your url" className="add-link" />
          </div>

          <div className="btn-wrapper">
            <div className="btn-left">
            <button className="cancel">cancel</button>
            <button className="add-tab">add tab</button>
            </div>
            <button className="add-tab">shorten url</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddLinkForm;
