import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import LandingPage from "./LandingPage";
import Work from "./Work";
import { Stack } from "@mui/material";
import React from "react";
import About from "./About";
import Projects from "./Projects";

class App extends React.Component {
  constructor(props) {
    super(props);

    // Initializing the state
    this.state = { color: "lightgreen" };
  }
  componentDidMount() {
    const script = document.createElement("script");

    script.src = "/assets/js/main.js";
    script.async = true;

    document.body.appendChild(script);
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div style={{marginLeft:"20%", marginRight:"20%"}}>
          <Work />
        </div>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <Stack direction="column" gap="20rem">
//         <Header />
//         <LandingPage />
//       </Stack>
//     </div>
//   );
// }

export default App;
