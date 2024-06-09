import { useState } from 'react';

const Page1 = () => {
  // チェックボックス用の変数
  const [flg, setFlg] = useState(false);
  // 入力テキスト用の変数
  const [text, setText] = useState();

  const func = () => {
    alert('333ssssss');
  };

  const func2 = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <p>Page1</p>
      {/* // チェックボックス type の指定、 checked に値設定、onCange に変更時処理設定 */}
      <input type="checkbox" checked={flg} onChange={() => setFlg(!flg)} />
      <p>{String(flg)}</p>

      {/* // 入力テキスト onCange に変更時処理設定 */}
      <input onChange={(e) => func2(e)} />
      <input onChange={func2} />
      <p>{text}</p>

      <p>れんしゅう１</p>
      {flg && <p>ちぇっくあり</p>}

      <p>れんしゅう２</p>
      {text === 'react' ? <p>なんとかる</p> : <p>{text} が入力されたよ</p>}

      <button onClick={() => alert('12aaaaa!!!')}>実行テスト</button>

      <button onClick={func}>実行テストに</button>
    </>
  );
};
export default Page1;
