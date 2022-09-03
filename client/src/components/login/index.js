import Link from "next/link";
import { useState } from "react";
import api from "../../services/axios";
import Router from "next/router";
import { useAppContext } from "../../context/index";

import {
  Container,
  Section,
  Form,
  Content,
  LinkColor,
  P,
  Title,
  Content2,
  Image,
  Image2,
} from "./styles";

let error = "";

const url = "http://localhost:3001/auth/login";
const Login = () => {
  const [email, setEmail] = useState([{}]);
  const [password, setPassword] = useState([{}]);
  const { setToken } = useAppContext();
  const { setId } = useAppContext();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const resp = await api.post(url, {
        email,
        password,
      });
      setToken(resp.data.token);
      setId(resp.data.id);

      Router.push("/dashboard");
    } catch (error) {
      // error = error.response.data.msg;
      console.log(error);
    }
  };

  return (
    <>
      <Section>
        <Container>
          <Title>Bem-vindo de volta</Title>
          <Form onSubmit={handleSubmit}>
            <Content>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Content>
            <Content>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </Content>
            <button type="submit">Entrar</button>
          </Form>
          <P>
            Não possui conta?
            <span>
              <Link href="/register">
                <LinkColor> Registrar-se</LinkColor>
              </Link>
            </span>
          </P>
          <span id="erro"></span>
        </Container>
        <Content2>
          <Image src="/assets/images/1.png" />
        </Content2>
        <Image2 src="/assets/images/2.png" />
      </Section>
    </>
  );
};

export default Login;
