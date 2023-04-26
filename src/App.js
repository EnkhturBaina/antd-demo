import "./App.css";
import { useState } from "react";
import { Button } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import EIM_5_2 from "./EIM/EIM_5_2";

function App() {
  // zaswar 16А zurj bga1
  const [type, setType] = useState(1);
  return (
    <div>
      <Button onClick={() => setType(1)}>Mayg1</Button>
      {type === 1 ? <EIM_5_2 /> : null}
    </div>
  );
}

export default App;
