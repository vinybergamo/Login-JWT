import Link from "next/link";
import User from "../components/user";
import { useAppContext } from "../context";

export default function Home() {
  const { token } = useAppContext();
  const { id } = useAppContext();

  if (token) {
    return (
      <>
        <User />
      </>
    );
  }

  return (
    <div>
      <h1>Não autenticado</h1>
      <Link href="/login">Ir para o login</Link>
    </div>
  );
}
