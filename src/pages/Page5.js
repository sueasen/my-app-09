import { AuthContextConsumer } from '../contexts/AuthContext';
import { Button } from '@material-tailwind/react';

const Page5 = () => {
  const { loginStateLogOut, loginUser } = AuthContextConsumer();

  return (
    <>
      <p>Page5</p>
      <Button onClick={loginStateLogOut}>ログ出力</Button>
      <pre className="bg-gray-100 border-spacing-2">
        {JSON.stringify(loginUser, null, 4)}
      </pre>
    </>
  );
};
export default Page5;
