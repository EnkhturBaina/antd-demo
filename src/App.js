import "./App.css";
import Mayg2 from "./Mayg2";
import { useState } from "react";
import { Button } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import Mayg3 from "./Mayg3";
import Mayg4 from "./Mayg4";
import AM16A from "./AM16A";

function App() {
  // zaswar 16А zurj bga
  const [type, setType] = useState(1);
  return (
    <div>
      <Button onClick={() => setType(1)}>Mayg1</Button>
      <Button onClick={() => setType(2)}>Mayg2</Button>
      <Button onClick={() => setType(3)}>Mayg3</Button>
      <Button onClick={() => setType(4)}>Mayg4</Button>
      {type === 1 ? <AM16A /> : null}
      {type === 2 ? <Mayg2 /> : null}
      {type === 3 ? <Mayg3 /> : null}
      {type === 4 ? <Mayg4 /> : null}
    </div>
  );
}

export default App;
