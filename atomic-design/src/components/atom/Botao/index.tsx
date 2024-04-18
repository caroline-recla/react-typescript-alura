interface Props {
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
}
function Botao({ onClick, type }: Props) {
  return (
    <div>
      <button onClick={onClick} type={type}>
        Botao
      </button>
    </div>
  );
}

export default Botao;
