import "./App.css";
import { useState } from "react";
import { Button } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import CT_3 from "./CT/CT_3";

function App() {
  // CT_3 16А zurj bga
  const [type, setType] = useState(1);
  return (
    <div>
      <Button onClick={() => setType(1)}>Mayg1</Button>
      {type === 1 ? <CT_3 /> : null}
    </div>
  );
}

export default App;
