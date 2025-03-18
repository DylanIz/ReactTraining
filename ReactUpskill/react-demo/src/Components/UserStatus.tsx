type Props = {
  loggedIn: boolean;
  isAdmin: boolean;
};

const UserStatus = ({ loggedIn, isAdmin }: Props) => {
  if (loggedIn && isAdmin) {
    return <h2>Welcome Admin</h2>;
  } else if (loggedIn && !isAdmin) {
    return <h2>Welcome User</h2>;
  } else {
    return <h2>Welcome Guest</h2>;
  }
};

export default UserStatus;
