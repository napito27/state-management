import React from "react";
import { AppContext } from "../app";

function Cuadro2() {
  const { state } = React.useContext(AppContext);

  return <div>{state.token}</div>;
}

export default Cuadro2;
