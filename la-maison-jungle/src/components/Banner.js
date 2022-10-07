import "../styles/Banner.css";
import logo from "../assets/logo.png";

function Banner() {
  const titre = "La maison jungle";
  return (
    <div className="lmj-banner">
      <img src={logo} alt="Logo la maison jungle" className="lmj-logo" />
      <h1>{titre}</h1>
    </div>
  );
}

export default Banner;
