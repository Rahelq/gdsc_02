import { useState } from "react";
import "./App.css";
import GroupMembers from "./GroupMembers";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Group 2 members are:</h2>
      <GroupMembers/>

    
    </>
  );
}

export default App;