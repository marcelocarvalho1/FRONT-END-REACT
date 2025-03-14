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
      console.log(err);
      alert("Erro ao cadastrar usuário!");
    }
  };

  return (
    <div className="container">
      <h2 className="title">Cadastro</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input ref={nameRef} className="input" type="text" placeholder="Nome" />
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
          Cadastrar-se
        </button>
      </form>
      <Link className="link" to="/login">
        Já tem uma conta? Fazer login!
      </Link>
    </div>
  );
};

export default Cadastro;
