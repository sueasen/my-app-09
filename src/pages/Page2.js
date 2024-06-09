import AddText from '../components/AddText';
import AddNum from '../components/AddNum';
import CountUp from '../components/CountUp';
import GetImage from '../components/GetImage';

const Page2 = (props) => {
  return (
    <>
      <p>Page2 {props.text}</p>
      <AddText title="AddText 文字連結"></AddText>
      <AddNum title="AddNum 足し算"></AddNum>
      <CountUp title="CountUp かうんとあっぷ"></CountUp>
      <GetImage title="GetImage 画像取得"></GetImage>
    </>
  );
};
export default Page2;
