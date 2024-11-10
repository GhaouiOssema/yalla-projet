function Button(props) {
  return (
    <button
      className="w-full bg-yellow-500 text-white font-medium hover:bg-yellow-600"
      onClick={props.handleClick}
    >
      {props.buttonName} {props.icons}
    </button>
  );
}

export default Button;
