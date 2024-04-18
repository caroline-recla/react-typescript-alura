import Label from "../../atom/Label";
import Botao from "../../atom/Botao";
import InputTexto from "../../atom/InputTexto";

interface Props {
  login: string;
}

function Login({ login }: Props) {
  //const [login, setLogin] = useState("");

  return (
    <>
      <Label texto={"Insira seu login"} />
      <InputTexto placeholder={"maria@gmail.com"} type={"text"} value={login} />
      <Botao onClick={() => console.log("Cliquei aqui")} />
    </>
  );
}

export default Login;
