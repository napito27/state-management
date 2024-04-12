import React from "react";

import { AppContext } from "../app";

function Cuadro3() {
  const { state } = React.useContext(AppContext);

  return <div>{state.name || "No name available"}</div>;
}

export default Cuadro3;
