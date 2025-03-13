type Props = {};

const Header = (props: Props) => {
  return (
    <header className="header">
      <h1>Welcome to My Website!</h1>
      <nav>
        <a>Home</a>
        <a>About</a>
        <a>Contact</a>
      </nav>
    </header>
  );
};

export default Header;
