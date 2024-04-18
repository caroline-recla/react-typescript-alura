interface Props {
  type: string;
  placeholder: string;
  value: string;
}

function InputTexto({ type, placeholder, value }: Props) {
  return (
    <>
      <input type={type} value={value} placeholder={placeholder} required />
    </>
  );
}

export default InputTexto;
