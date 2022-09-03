import Link from "next/link";
import { useState, useEffect } from "react";
import api from "../../services/axios";
import Router from "next/router";

const url = "http://localhost:3001/auth/register";

const Register = () => {
  const [name, setName] = useState([{}]);
  const [email, setEmail] = useState([{}]);
  const [password, setPassword] = useState([{}]);
  const [confirmpassword, setConfirmPass] = useState([{}]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const resp = await api.post(url, {
        name,
        email,
        password,
        confirmpassword,
      });
      Router.push("/login");
    } catch (error) {
      const { data } = error.response;
      alert(data.msg);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <p></p>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <input
            type="password"
            name="confirmPass"
            onChange={(e) => setConfirmPass(e.target.value)}
            placeholder="Confirm Password"
          />
          <button type="submit">Enviar</button>
        </form>
        <Link href="/login">Ir para o login</Link>
      </div>
    </>
  );
};

export default Register;
