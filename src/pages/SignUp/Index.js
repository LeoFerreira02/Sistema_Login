import React, { useState } from "react";
import Input from "../../components/Input/Index";
import Button from "../../components/Button/Index";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { CSSTransition } from 'react-transition-group';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email || !emailConf || !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    const res = signup(email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadastrado com sucesso!");
    navigate("/");
  };

  return (
    <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
      <div className="Container">
          <label className="Title">Registre-se</label>
          <div className="Content">
            <Input
              type="email"
              placeholder="Digite seu E-mail"
              value={email}
              onChange={(e) => [setEmail(e.target.value), setError("")]}
            />
            <Input
              type="email"
              placeholder="Confirme seu E-mail"
              value={emailConf}
              onChange={(e) => [setEmailConf(e.target.value), setError("")]}
            />
            <Input
              type="password"
              placeholder="Digite sua Senha"
              value={senha}
              onChange={(e) => [setSenha(e.target.value), setError("")]}
            />
            <label className="labelError">{error}</label>
            <Button Text="Inscrever-se" onClick={handleSignup} />
            <label className="LabelLink">
              Já tem uma conta?
              <strong>
                <Link to="/">&nbsp;Entre</Link>
              </strong>
            </label>
          </div>
      </div>
    </CSSTransition>
  );
};

export default Signup;