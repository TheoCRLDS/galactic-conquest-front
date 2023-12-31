import "./Home.css";
import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const navLogin = () => {
    navigate("/login");
  };
  const navRegister = () => {
    navigate("/register");
  };

  return (
    <div id="home-container">
      <div className="logo">
        <img className="logo2" src="src/Components/img/logo.png" alt="" />
      </div>

      <div className="allbouton">
        <MDBBtn className="bouton" onClick={navRegister}>
          Créer un compte
        </MDBBtn>
        <MDBBtn className="bouton me-5" onClick={navLogin} >
         
          Connexion
        </MDBBtn>
      </div>
    </div>
  );
}

export default Home;
