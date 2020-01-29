import React, { useState } from "react";
import "./App.css";
import TeamList from "./components/TeamList";
import TeamForm from "./components/TeamForm";

function App() {
  const [team, setTeam] = useState([
    {
      id: 1,
      name: "Lihuang Zheng",
      email: "webdev@lihuang.com",
      role: "Full-Stack Web Dev"
    }
  ]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setTeam([...team, newMember]);
  };

  return (
    <div className="App">
      <h1>Team</h1>
      <TeamForm addNewMember={addNewMember} />
      <TeamList team={team} />
    </div>
  );
}

export default App;
