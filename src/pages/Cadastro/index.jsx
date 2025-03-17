import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import api from "../../services/api";
import "./Cadastro.css";

const Cadastro = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await api.post("/cadastro", {
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      alert("Usuário cadastrado com sucesso!");
    } catch (error) {
      console.log(error);
      alert("Erro ao cadastrar usuário!");
    }
  };

  return (
    <div className="container">
      <div className="content">
        {/* Animação do Lottie via CDN */}
        <div className="animation">
          <iframe 
            src="https://lottie.host/embed/c4eae121-f563-4516-8959-cfdf78c25d5f/HOhpwqgmOT.lottie" 
            title="Lottie Animation"
            frameBorder="0"
            width="100%"
            height="100%"
          />
        </div>

        {/* Formulário de Cadastro */}
        <div className="form-section">
          <h2 className="title2">Cadastro</h2>
          <form className="form" onSubmit={handleSubmit}>
            <input ref={nameRef} className="input" type="text" placeholder="Nome" />
            <input ref={emailRef} className="input" type="email" placeholder="Email" />
            <input ref={passwordRef} className="input" type="password" placeholder="Senha" />
            <button className="button" type="submit">Cadastrar-se</button>
          </form>
          <Link className="link" to="/login">Já tem uma conta? Fazer login!</Link>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
