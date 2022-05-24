import "../assets/styles/Header.scss";
import { useState } from "react";
import { useNavigate  } from "react-router-dom";

export default function Header({ setNewMarker }) {
  const [logout, setLogout] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    logout ? setLogout(false) : setLogout(true);
  };

  return (
    <header>
      <p>Kite</p>
      <div>
        {logout && (
          <button className="logout-button" onClick={() => navigate("/")} >
            Logout
          </button>
        )}

        <button className="newMarker-button" onClick={() => setNewMarker(true)}>
          Add Spot
        </button>
        <button className="account-button" onClick={handleClick}></button>
      </div>
    </header>
  );
}
