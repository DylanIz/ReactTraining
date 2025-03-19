import React, { useState } from "react";

type Props = {};

const Profile = (props: Props) => {
  const [profile, setProfile] = useState({
    name: "",
    age: 0,
  });

  const handleChange = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;

    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };
  return (
    <>
      <h1>Profile</h1>

      <input
        type="text"
        name="name"
        value={profile.name}
        onChange={handleChange}
      ></input>
      <input
        type="number"
        name="age"
        value={profile.age}
        onChange={handleChange}
      ></input>
      <button type="submit">Submit</button>

      <h2>Name:{profile.name}</h2>
      <h2>Age:{profile.age}</h2>
    </>
  );
};

export default Profile;
