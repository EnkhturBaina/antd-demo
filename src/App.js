import "./App.css";
import Mayg2 from "./Mayg2";
import { useState } from "react";
import { Button } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import Mayg3 from "./Mayg3";
import Mayg4 from "./Mayg4";
import CT_10A from "./CT_10A";

function App() {
  // zaswar AM_18 zurj bga 2 doh huudas zurj ehleh
  const [type, setType] = useState(1);
  return (
    <div>
      <Button onClick={() => setType(1)}>Mayg1</Button>
      <Button onClick={() => setType(2)}>Mayg2</Button>
      <Button onClick={() => setType(3)}>Mayg3</Button>
      <Button onClick={() => setType(4)}>Mayg4</Button>
      {type === 1 ? <CT_10A /> : null}
      {type === 2 ? <Mayg2 /> : null}
      {type === 3 ? <Mayg3 /> : null}
      {type === 4 ? <Mayg4 /> : null}
    </div>
  );
}

export default App;
