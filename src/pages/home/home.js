import React from "react";
import * as Components from "../../components";

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
//export default Home;
export default Components.PageWrapper(Home);
