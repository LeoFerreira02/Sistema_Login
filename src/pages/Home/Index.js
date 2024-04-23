import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Index";
import useAuth from "../../hooks/useAuth";

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
      <div className="Container"> 
        <h2 className="Title">Home</h2>
        <Button Text="Sair" onClick={() => [signout(), navigate("/")]} >
          Sair
        </Button>
      </div>
  );
};

export default Home;