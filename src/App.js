import "./App.css";
import { useState } from "react";
import { Button } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import CM_1_11 from "./CM/CM_1_11";

function App() {
  // zaswar 16А zurj bga1
  const [type, setType] = useState(1);
  return (
    <div>
      <Button onClick={() => setType(1)}>Mayg1</Button>
      {type === 1 ? <CM_1_11 /> : null}
    </div>
  );
}

export default App;
