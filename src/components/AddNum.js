import { useState, useEffect } from 'react';

// コンポーネントを定義
const AddNum = ({ title }) => {
  const [int1, setInt1] = useState(0);
  const [int2, setInt2] = useState(0);
  const [intAdd, setIntAdd] = useState(0);

  useEffect(() => {
    setIntAdd(int1 + int2);
  }, [int1, int2]);

  // html 部分を戻す
  return (
    <>
      <p>{title}</p>
      <input type="number" onChange={(e) => setInt1(Number(e.target.value))} />
      +
      <input type="number" onChange={(e) => setInt2(Number(e.target.value))} />
      {`=${intAdd}`}
    </>
  );
};
// コンポーネントを export
export default AddNum;
