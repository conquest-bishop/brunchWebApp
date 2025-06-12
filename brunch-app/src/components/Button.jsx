function Button(props) {
  const{ onClick, disabled, title} = props

  return (
    <button className="btn" onClick={onClick} title={title} disabled={disabled} >
      {title}
    </button>
  );
}

export default Button;
