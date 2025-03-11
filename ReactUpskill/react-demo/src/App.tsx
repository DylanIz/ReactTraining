import React from "react";
import Navbar from "./Components/Navbar";
import TempDrawer from "./Components/Drawer";

type Props = {};

const App = ({}: Props) => {
  return (
    <>
      <Navbar />
      <TempDrawer />
    </>
  );
};

export default App;
