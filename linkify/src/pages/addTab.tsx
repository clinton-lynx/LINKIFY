import React from "react";
import Header from "../components/Header";
// import AddLinkForm from '../components/AddLinkForm'
import LinkItem from "../components/LinkItem";
import "../asset/styles/pages/add-tab.scss";

const AddTab = () => {
  return (
    <>
      <div className="page-wrapper">
        <Header headerTitle="home">
          <svg
            id="Layer_1"
            data-name="Layer 1"
            width="28px"
            height="22px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <title>Back</title>
            <path d="M352,170.667H94.17l70.249-70.248a21.334,21.334,0,1,0-30.171-30.171L27.581,176.915a21.336,21.336,0,0,0,0,30.171L134.248,313.752a21.334,21.334,0,1,0,30.171-30.171L94.17,213.333H352a96,96,0,0,1,0,192H128A21.333,21.333,0,1,0,128,448H352c76.461,0,138.667-62.205,138.667-138.667S428.461,170.667,352,170.667Z" />
          </svg>

          {/* <span className="back">back</span> */}
        </Header>
        <main className="main">
          <div className="add-link">
            <button className="add-tab">add new tab</button>
            <button className="save-tab">save current tab</button>
          </div>

          {/* <AddLinkForm /> */}

          <LinkItem />
        </main>
      </div>
    </>
  );
};

export default AddTab;