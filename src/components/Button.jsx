function Button({ children, className = "", onClick }) {
  return (
    <button className={`btn btn-info ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
