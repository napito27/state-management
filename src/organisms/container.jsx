import React from "react";

import { AppContext } from "../app";
import Cuadro1 from "../molecules/cuadro1";
import Cuadro2 from "../molecules/cuadro2";
import Cuadro3 from "../molecules/cuadro3";

function Container() {
  const { state, setState } = React.useContext(AppContext);

  return (
    <>
      <Cuadro1 />
      <Cuadro2 />
      <Cuadro3 />
    </>
  );
}

export default Container;
