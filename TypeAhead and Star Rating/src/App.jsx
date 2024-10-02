import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import StarRating from "./StarRating";
import Typeahead from "./Typeahead";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <StarRating /> */}
      <Typeahead />
    </div>
  );
}

export default App;
