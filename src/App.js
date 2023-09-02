import "./App.css";
import { useState } from "react";
import { Button } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import CT_1 from "./CT/CT_1";
import AM1V from "./AM/AM1V";
import EMT201_4_2 from "./EMT/EMT201_4_2";

function App() {
  const [type, setType] = useState(1);
  return (
    <div>
      <Button onClick={() => setType(1)}>Mayg1</Button>
      {type === 1 ? <EMT201_4_2 /> : null}
    </div>
  );
}

export default App;
