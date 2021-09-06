import React from "react";
import * as Components from "../../components";

function About() {
  return (
    <div className="about">
      <Components.IntroCard></Components.IntroCard>
    </div>
  );
}
//export default About;
export default Components.PageWrapper(About);
