import { useNavigate } from "react-router";
import "../styles/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = (value: string) => {
    navigate(`/${value}`, { replace: true });
  };

  return (
    <div className="navbar">
      <h2 className="navbuttons" onClick={() => handleClick("")}>
        Home
      </h2>
      <h2 className="navbuttons" onClick={() => handleClick("staff")}>
        Staff
      </h2>
      <h2 className="navbuttons" onClick={() => handleClick("locations")}>
        Locations
      </h2>
    </div>
  );
};

export default Navbar;
