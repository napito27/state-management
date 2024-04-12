import React from "react";

import { AppContext } from "../app";

import Container from "../organisms/container";

function Home() {
  const { state, setState } = React.useContext(AppContext);

  const handleClick = () => {
    setState({
      ...state,
      name: "Napo",
    });
  };

  return (
    <>
      <div>
        <Container />
        <div>
          <button onClick={handleClick}>Add Name</button>
        </div>
      </div>
    </>
  );
}

export default Home;
