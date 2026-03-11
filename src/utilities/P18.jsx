function P18({ children }) {
  return <p style={{ fontSize: "1.8rem" }}>{children}</p>;
}

export default P18;

export function P18B({ classname, children }) {
  return (
    <p className={classname} style={{ fontSize: "1.8rem", fontWeight: 900 }}>
      {children}
    </p>
  );
}
