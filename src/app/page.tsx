import Boxes from "./ui/components/boxes";
import Hero from "./ui/components/hero";
import Opinions from "./ui/components/opinions";
import TextWithImage from "./ui/components/text-with-image";
import Map from "./ui/components/map";
import Container from "./ui/molecules/container";
import Heading from "@/app/ui/components/primitives/heading";
import { data } from "@/app/data/home";
import Image from 'next/image';
import Logo from '/public/logo.svg';

export default function HomePage() {
  return (
    <main>
      <Container>
        <Hero images={data.hero.images}>
          <>
            <Image src={Logo}
              alt="InkLab"
              width={320}
              height={320} />
            <Heading tag="h1" content="InkLab" />
          </>
        </Hero>
      </Container>

      <Container>
        <TextWithImage />
      </Container>

      <Container>
        <Boxes />
      </Container>

      <Container>
        <Opinions />
      </Container>

      <Container>
        <Map />
      </Container>
    </main>
  );
}
