import { useEffect, useState } from "react";
import api from "../../services/axios";
import { useAppContext } from "../../context";
import Link from "next/link";

const User = () => {
  const [user, setUser] = useState([{}]);
  const { token } = useAppContext();
  const { id } = useAppContext();

  useEffect(() => {
    api
      .get(`/user/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUser(response.data.user);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, []);

  return (
    <>
      <p>Seja bem-vindo: {user.name}</p>
      <Link href="/">Sair</Link>
    </>
  );
};

export default User;
