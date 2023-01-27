import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import Header from "../../components/Header";
import "./style.scss";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    
    <section className="errorPage">
      <Header />
      <div className="errorContent">
        <img src={Logo} alt="Logo" />
        <h3 className="errorPage__subtitle">404</h3>
        <h1 className="errorPage__title">
          You’re officially in no man’s land.
        </h1>
        <p className="errorPage__text">Ooops! Check the URL and try again.</p>
        <button className="errorPage__button" onClick={() => navigate("/")}>
          Go back home
        </button>
      </div>
    </section>
  );
}
