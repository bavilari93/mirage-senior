import React from 'react';

const Park = () => {
  console.log("this")
  return (
    <>
    <h1>About</h1>
    <iframe
      title="Static Map"
      src= "../../htmls/forsyth/build/index.html"
      width="100%"
      height="100%"
      frameBorder="0"
    />
    </>
  );
};

export default Park;