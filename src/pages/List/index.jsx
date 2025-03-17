import api from "../../services/api";
import { useEffect, useState } from "react";
import "./List.css";

const ListarUsuarios = () => {
  const [allusers, setAllUsers] = useState();

  useEffect(() => {
    async function loadUsers() {
      const token = localStorage.getItem("token");

      const {
        data: { users },
      } = await api.get("/listar-usuarios", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setAllUsers(users);
    }

    loadUsers();
  }, []);

  return (
    <div className="container-list">
      <h2> Lista de usuários </h2>
      <ul>
        {allusers && allusers.map((user) => (
          <li key={user.id} className="user">
            <p className="id"> Id: {user.id} </p>
            <p className="nome"> Nome: {user.name}</p>
            <p className="email"> E-mail: {user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListarUsuarios;
