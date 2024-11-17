import Boxes from "./ui/components/boxes";
import Hero from "./ui/components/hero";
import Opinions from "./ui/components/opinions";
import TextWithImage from "./ui/components/text-with-image";
import Map from "./ui/components/map";
import Container from "./ui/structure/container";
import Heading from "@/app/ui/components/primitives/heading";
import { data } from "./data";
import Image, { ImageProps } from 'next/image';
import Logo from '/public/logo.svg';
import { BoxProps } from "./ui/components/boxes/box";
import ContactData from "./ui/components/contact-data";
import MapImage from '/public/map.svg';

export default function HomePage() {
  return (
    <main>
      <Container id="home" noPadding fitScreen>
        <Hero images={data.hero.images as ImageProps[]}>
          <div className="flex flex-col items-center justify-center">
            <Image src={Logo}
              alt="InkLab"
              width={320}
              height={320} />
            <Heading tag="h1" content="InkLab Tattoo Studio" className="text-white" />
          </div>
        </Hero>
      </Container>

      <Container id="about-us">
        <TextWithImage
          images={data.aboutUs?.images as ImageProps[]}
          text={data.aboutUs?.text}
        />
      </Container>

      <Container>
        <Boxes
          items={data.aboutUs.boxes.boxes as BoxProps[]}
          title={data.aboutUs.boxes.title}
        />
      </Container>

      <Container id="opinions">
        <Opinions items={data.opinions} title="What people think about us" />
      </Container>

      <Container id="find-us">
        <div className="flex flex-col items-center justify-center gap-4">
          <Map
            image={MapImage}
            markers={data.contact.map.markers}
          />
          <ContactData address={data.contact.address} withIcons inline />
        </div>
      </Container>
    </main>
  );
}
