import React from "react";

function SearchField() {
  return (
    <div className="d-flex flex-column align-items-center">
      <>
        <input
          type="text"
          name=""
          placeholder="Search keywords"
          id=""
          style={{
            width: '600px',
            height: '60px',
            paddingLeft: '30px',
            borderRadius:"5rem",
            border:"none",
            backgroundColor:"#fff"
          }}
        />

        {/* <button
        //   style={{
        //     width: '822px',
        //     height: '79px',
        //     top: '478px',
        //     left: '153px',
        //     padding: '1px 0px 0px 0px',
        //   }}
        >
          Find Now
        </button> */}
      </>

      <br />

      <button
        style={{
          width: '150px',
          height: '32px',
          
          border: '3px solid rgba(255, 251, 251, 1)',
        }}
      >
        Upload Now
      </button>
    </div>
  );
}

export default SearchField;
