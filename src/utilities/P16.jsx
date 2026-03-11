export function P16({ classname, children }) {
  return (
    <p className={classname} style={{ fontSize: "1.6rem" }}>
      {children}
    </p>
  );
}
export default P16;

export function P16B({ children }) {
  return <p style={{ fontSize: "1.6rem", fontWeight: "700" }}>{children}</p>;
}
