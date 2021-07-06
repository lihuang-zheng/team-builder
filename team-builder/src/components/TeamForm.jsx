import React, { useState } from "react";

const TeamForm = props => {
  const [member, setMember] = useState({
    name: "",
    email: "",
    role: ""
  });

  const handleChanges = e => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    props.addNewMember(member);
    setMember({ name: "", email: "", role: "" });
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Member Name</label>
      <input
        id="name"
        type="text"
        name="name"
        onChange={handleChanges}
        placeholder="Apple Seed"
        value={member.name}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        name="email"
        onChange={handleChanges}
        placeholder="abc@abc.com"
        value={member.email}
      />
      <label htmlFor="role">Role</label>
      <input
        id="role"
        type="text"
        name="role"
        onChange={handleChanges}
        placeholder="full-stack-dev"
        value={member.role}
      />
      <button type="submit">Add Member</button>
    </form>
  );
};

export default TeamForm;
