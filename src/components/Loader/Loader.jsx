import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={3}
    width={400}
    height={150}
    viewBox="0 0 400 150"
    backgroundColor="#000000"
    foregroundColor="#ff9494"
    {...props}
  >
    <circle cx="30" cy="35" r="25" />
  </ContentLoader>
);

export default MyLoader;
