import "./App.css";
import { useState } from "react";
import { Button } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import T6_8_1 from "./Tushaal/T6_8_1";

function App() {
  const [type, setType] = useState(1);
  return (
    <div>
      <Button onClick={() => setType(1)}>Mayg1</Button>
      {type === 1 ? <T6_8_1 /> : null}
    </div>
  );
}

export default App;
