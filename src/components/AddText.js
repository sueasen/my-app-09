import { useState, useEffect } from 'react';

// コンポーネントを定義
const AddText = ({ title }) => {
  const [str1, setStr1] = useState('');
  const [str2, setStr2] = useState('');
  const [strAdd, setAdd] = useState('');

  useEffect(() => {
    setAdd(str1 + str2);
  }, [str1, str2]);

  // html 部分を戻す
  return (
    <>
      <p>{title}</p>
      <input type="text" onChange={(e) => setStr1(e.target.value)} />
      +
      <input type="text" onChange={(e) => setStr2(e.target.value)} />
      {`=${strAdd}`}
    </>
  );
};
// コンポーネントを export
export default AddText;
