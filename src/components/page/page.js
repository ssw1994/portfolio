import React from "react";
import "./page.scss";
function PageWrapper(PageComponent) {
  return function () {
    return (
      <div className="page">
        <PageComponent></PageComponent>
      </div>
    );
  };
}

export default PageWrapper;
