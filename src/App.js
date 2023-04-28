import "./App.css";
import { useState } from "react";
import { Button } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import CT_2 from "./CT/CT_2";

function App() {
  const [type, setType] = useState(1);
  return (
    <div>
      <Button onClick={() => setType(1)}>Mayg1</Button>
      {type === 1 ? <CT_2 /> : null}
    </div>
  );
}

export default App;
