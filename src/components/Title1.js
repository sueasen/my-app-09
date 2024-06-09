const Title1 = ({ h1text, h1style, divstyle, children }) => {
  return (
    <>
      <h1 style={h1style}>{h1text}</h1>
      <div style={divstyle}>{children}</div>
    </>
  );
};

export default Title1;
