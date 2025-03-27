import { useContext } from "react";
import { UserContext } from "../UserContext";

const UserProfile = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
    </div>
  );
};

export default UserProfile;
