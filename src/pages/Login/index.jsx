import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import api from "../../services/api";
import "./Login.css";

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
      console.log(error);
      alert("Email ou senha incorretos!");
    }
  };

  return (
    <div className="container">
      <div className="content">
        {/* Animação do Lottie */}
        <div className="animation">
          <iframe 
            src="https://lottie.host/embed/8b0cdcc2-2d53-4e00-88e5-61986641fbce/HfMWWXNsk2.lottie" 
            title="Lottie Animation"
            frameBorder="0"
            width="100%"
            height="100%"
          />
        </div>

        {/* Formulário de Login */}
        <div className="form-section">
          <h2 className="title2">Login</h2>
          <form className="form" onSubmit={handleSubmit}>
            <input ref={emailRef} className="input" type="email" placeholder="Email" />
            <input ref={passwordRef} className="input" type="password" placeholder="Senha" />
            <button className="button" type="submit">Login</button>
          </form>
          <Link className="link" to="/">Não tem uma conta? Cadastre-se!</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
