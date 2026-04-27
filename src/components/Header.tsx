import logo from "../assets/logo.svg";

function Header() {
  return (
    <header>
      <img src={logo} alt="Pixell River Logo" className="logo" />

      <div>
        <h1>Pixell River Employee Directory</h1>
        <p>Welcome to the Pixell River Financial staff directory.</p>
      </div>
    </header>
  );
}

export default Header;