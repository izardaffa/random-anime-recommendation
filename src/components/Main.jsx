function Main({ children }) {
  return (
    <div
      className={`relative flex justify-center items-center min-h-screen py-28`}
    >
      <div
        className="absolute inset-0 opacity-30 bg-cover bg-fixed bg-center bg-no-repeat"
        style={{ backgroundImage: "url('bg.png')" }}
      ></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default Main;
