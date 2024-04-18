interface Props {
  texto: string;
}

function Label({ texto }: Props) {
  return (
    <div>
      <label>Insira seu login:</label>
    </div>
  );
}

export default Label;
