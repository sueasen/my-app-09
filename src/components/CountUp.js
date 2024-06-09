import { useState, useEffect } from 'react';

const CountUp = ({ title }) => {
  const [count, setCount] = useState(10);
  const [bgColor, setBgColor] = useState();

  useEffect(() => {
    setBgColor('#' + Math.random().toString(16).slice(-6));
  }, [count]);

  const clickBtn = () => {
    setCount(count + 1);
  };

  return (
    <>
      <p>{title}</p>
      <button onClick={clickBtn}>add</button>
      <p style={{ backgroundColor: bgColor, fontSize: count }}>
        {`${count}：${bgColor}`}
      </p>
    </>
  );
};

export default CountUp;
