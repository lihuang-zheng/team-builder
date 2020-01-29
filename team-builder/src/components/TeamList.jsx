import React from "react";

const TeamList = props => {
  return (
    <div className="member-list">
      {props.team.map(member => (
        <div className="member" key={member.id}>
          <h2>{member.name}</h2>
          <p>{member.email}</p>
          <p>{member.role}</p>
        </div>
      ))}
    </div>
  );
};

export default TeamList;
