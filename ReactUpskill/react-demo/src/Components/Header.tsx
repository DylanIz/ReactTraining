type Props = {};

const Header = (props: Props) => {
  return (
    <div className="header">
      <h1>Welcome to My Website!</h1>
      <nav>
        <a href="Home" style={{ marginRight: "10px" }}>
          Home
        </a>
        <a href="About" style={{ marginRight: "10px" }}>
          About
        </a>
        <a href="Contact" style={{ marginRight: "10px" }}>
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Header;
