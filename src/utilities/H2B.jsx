function H2B({ children, classname }) {
  return (
    <h2 className={classname} style={{ fontSize: "3.6rem", fontWeight: "900" }}>
      {children}
    </h2>
  );
}

export default H2B;

export function H2L({ children, classname }) {
  return (
    <h2 className={classname} style={{ fontSize: "3.6rem", fontWeight: "500" }}>
      {children}
    </h2>
  );
}
