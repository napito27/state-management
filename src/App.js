import React from "react";
import Home from "./pages/home";

export const AppContext = React.createContext();
const initialState = {
  token: "klafljbsdfLMKAnljscajLJDLSJ",
};

function App() {
  const [state, setState] = React.useState(initialState);

  return (
    <AppContext.Provider value={{ state, setState }}>
      <Home />
    </AppContext.Provider>
  );
}

export default App;
