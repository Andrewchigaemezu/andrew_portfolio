function H1({ children }) {
  return (
    <h1
      style={{
        fontSize: "2.4rem",
        fontWeight: "900",
        color: "var(--secondary-color)",
      }}
    >
      {children}
    </h1>
  );
}

export default H1;
