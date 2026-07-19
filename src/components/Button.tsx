interface ButtonProps {
  txt: string;
  link: string;
}

const Button = (props: ButtonProps) => {
  const handleClick = () => window.open(props.link, "_blank");
  return (
    <div>
      <button onClick={handleClick}>{props.txt}</button>
    </div>
  );
};

export default Button;
