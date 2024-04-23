import React, { useState } from "react";
import Input from "../../components/Input/Index";
import Button from "../../components/Button/Index";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { TfiEmail, TfiLock } from "react-icons/tfi";
import { CSSTransition } from 'react-transition-group';

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };

  const handleSignupClick = () => {
    navigate("/signup");
  };

  return (
    <div className="Container">
        <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
            <div className="Content">
            <h2 className="Title">Entre</h2>
                <div className="input-wrapper">
                    <Input
                        type="email"
                        placeholder="Digite seu E-mail"
                        value={email}
                        onChange={(e) => [setEmail(e.target.value), setError("")]}
                    />
                    <TfiEmail className="icon"/>
                </div>
                <div className="input-wrapper">
                    <Input
                        type="password"
                        placeholder="Digite sua Senha"
                        value={senha}
                        onChange={(e) => [setSenha(e.target.value), setError("")]}
                    />
                    <TfiLock className="icon"/>
                </div>
                <label className="labelError">{error}</label>
                <Button Text="Entrar" onClick={handleLogin} />
                
                <label className="LabelLink">
                    Não tem uma conta?
                    <strong>
                    <Link to="/signup" onClick={handleSignupClick}>&nbsp;Registre-se</Link>
                    </strong>
                </label>
            </div>
        </CSSTransition>
    </div>
  );
};

export default Signin;