const ColorText2 = ({ color, fontSize, children }) => {
  // props に任意の属性を設定して併用はOK
  const styles = {
    color,
    fontSize,
  };

  return (
    <>
      {/* props.children で値を取得 */}
      <p style={styles}>{children}</p>
    </>
  );
};

export default ColorText2;
