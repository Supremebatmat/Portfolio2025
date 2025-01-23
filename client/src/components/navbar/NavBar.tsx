import "./NavBar.css";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  return (
    <div>
      <ul>
        <li>
          <button type="button" onClick={() => navigate("/")}>
            Home
          </button>
        </li>
        <li>
          <button type="button" onClick={() => navigate("/mes-projets")}>
            Mes projets
          </button>
        </li>
        <li>
          <button type="button" onClick={() => navigate("/contact")}>
            Contact
          </button>
        </li>
        <li>
          <button type="button" onClick={() => navigate("/guestbook")}>Livre d'Or</button>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
