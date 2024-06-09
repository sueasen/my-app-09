import { useState, useEffect } from 'react';

const GetImage = ({ title }) => {
  const [res, setRes] = useState();
  const [src, setSrc] = useState();

  useEffect(() => {
    setSrc(res?.url);
  }, [res]);

  const clickBtn = async () => {
    setRes(await fetch('https://source.unsplash.com/random'));
  };

  return (
    <>
      <p>{title}</p>
      <button onClick={clickBtn}>画像変更</button>
      <br />
      <img
        src={src || 'https://source.unsplash.com/random'}
        alt="img"
        style={{ width: '500px' }}
      />
    </>
  );
};

export default GetImage;
