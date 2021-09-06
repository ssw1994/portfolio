import React from "react";
import { Switch, Route } from "react-router-dom";
import { links } from "../modals/page.model";
export default function Routing() {
  console.log(links);

  return (
    // <Switch>
    //   <Route path="/" exact component={links[0].component}></Route>
    // </Switch>
    <Switch>
      {links.map((page, index) => {
        return <Route exact {...page} key={index} />;
      })}
    </Switch>
  );
}
