import logo from "./logo.svg";
import "./App.css";
import Mayg1 from "./Mayg1";
import Mayg2 from "./Mayg2";
import { useState } from "react";
import { Button } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import Mayg3 from "./Mayg3";
import Mayg4 from "./Mayg4";
import AM22Д from "./АМ22Д";
import AM22Е from "./АМ22Е";
import AM22Ж from "./АМ22Ж";
import AM22Й from "./АМ22Й";
import AM22К from "./АМ22К1";
import AM22К2 from "./АМ22К2";
import AM24Б from "./AM24Б";
import AM23 from "./AM23";

function App() {
  const [type, setType] = useState(1);
  return (
    <div>
      <Button onClick={() => setType(1)}>Mayg1</Button>
      <Button onClick={() => setType(2)}>Mayg2</Button>
      <Button onClick={() => setType(3)}>Mayg3</Button>
      <Button onClick={() => setType(4)}>Mayg4</Button>
      {type === 1 ? <AM24Б /> : null}
      {type === 2 ? <Mayg2 /> : null}
      {type === 3 ? <Mayg3 /> : null}
      {type === 4 ? <Mayg4 /> : null}
    </div>
  );
}

export default App;
