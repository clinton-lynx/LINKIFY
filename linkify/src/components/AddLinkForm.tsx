import React from "react";
import "../asset/styles/components/add-link-form.scss";
const AddLinkForm = () => {
  return (
    <div className="page-wrapper">
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
            <button className="cancel">cancel</button>
            <button className="add-tab">add tab</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddLinkForm;
