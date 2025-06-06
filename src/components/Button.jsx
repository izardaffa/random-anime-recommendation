function Button({ children, className="" }) {
  return (
    <button className={`btn btn-info ${className}`}>
      {children}
    </button>
  );
}

export default Button;
