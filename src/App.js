import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header";
import "./App.css";
import WhatWeDo from "./components/WhatWeDo";
import Clients from "./components/Clients";

import { Grid } from "react-flexbox-grid";
import Footer from "./components/Footer";
import Works from "./components/Works";

const openMessenger = () => {
  document
    .querySelector(".b24-widget-button-wrapper")
    .firstElementChild.click();
};
function App() {
  return (
    <div>
      <Navbar />
      <Header onButtonClick={openMessenger} />
      <Grid>
        <WhatWeDo />
        <Clients />
        <Works />
      </Grid>
      <Footer onButtonClick={openMessenger} />
    </div>
  );
}

export default App;
