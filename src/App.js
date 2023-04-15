import "./App.css";
import Mayg2 from "./Mayg2";
import { useState } from "react";
import { Button } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import Mayg3 from "./Mayg3";
import Mayg4 from "./Mayg4";
import СТ_32А from "./СТ_32А";

function App() {
  const [type, setType] = useState(1);
  return (
    <div>
      {/* 39 iig zurj ehelj bga */}
      <Button onClick={() => setType(1)}>Mayg1</Button>
      <Button onClick={() => setType(2)}>Mayg2</Button>
      <Button onClick={() => setType(3)}>Mayg3</Button>
      <Button onClick={() => setType(4)}>Mayg4</Button>
      {type === 1 ? <СТ_32А /> : null}
      {type === 2 ? <Mayg2 /> : null}
      {type === 3 ? <Mayg3 /> : null}
      {type === 4 ? <Mayg4 /> : null}
    </div>
  );
}

export default App;
