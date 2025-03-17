import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import api from "../../services/api";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data: token } = await api.post("/login", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      localStorage.setItem("token", token);
      console.log(token);

      navigate("/listar-usuarios");
    } catch (error) {
      console.log(err);
      alert("Email ou senha incorretos!");
    }
  };

  return (
    <div className="container">
      <h2 className="title">Cadastro</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          ref={emailRef}
          className="input"
          type="email"
          placeholder="Email"
        />
        <input
          ref={passwordRef}
          className="input"
          type="password"
          placeholder="Senha"
        />
        <button className="button" type="submit">
          Login
        </button>
      </form>
      <Link className="link" to="/">
        Não tem uma conta? Cadastre-se!
      </Link>
    </div>
  );
};

export default Login;
