import "./App.css";
import { useState } from "react";
import { Button } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import CT_7 from "./CT/CT_7";

function App() {
  // zaswar 16А zurj bga1
  const [type, setType] = useState(1);
  return (
    <div>
      <Button onClick={() => setType(1)}>Mayg1</Button>
      {type === 1 ? <CT_7 /> : null}
    </div>
  );
}

export default App;
