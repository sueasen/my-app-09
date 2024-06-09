import CssModules from '../components/CssModules';
import TailwindCss from '../components/TailwindCss';
import { DefaultAccordion } from '../components/Accordion';
import { BadgeOverlap } from '../components/Rensyu1Badge';
import { ProfileCard } from '../components/Rensyu2Card';
import { CarouselDefault } from '../components/Rensyu3Carousel';

const Page3 = () => {
  return (
    <>
      <p>Page3</p>
      <CssModules></CssModules>
      <TailwindCss></TailwindCss>
      <DefaultAccordion></DefaultAccordion>
      <BadgeOverlap cnt={100}></BadgeOverlap>
      <ProfileCard
        img={'https://docs.material-tailwind.com/img/team-3.jpg'}
        name={'こくさいりこ'}
        role={'えらいひと'}
      ></ProfileCard>
      <CarouselDefault
        images={[
          'https://source.unsplash.com/random',
          'https://source.unsplash.com/random',
          'https://source.unsplash.com/random',
          'https://source.unsplash.com/random',
        ]}
      ></CarouselDefault>
    </>
  );
};
export default Page3;
