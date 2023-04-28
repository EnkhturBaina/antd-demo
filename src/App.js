import "./App.css";
import { useState } from "react";
import { Button } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import CT2_5 from "./CT/CT2_5";

function App() {
  // CT_3 16А zurj bga
  const [type, setType] = useState(1);
  return (
    <div>
      <Button onClick={() => setType(1)}>Mayg1</Button>
      {type === 1 ? <CT2_5 /> : null}
    </div>
  );
}

export default App;
