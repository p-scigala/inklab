import Boxes from "./ui/components/boxes";
import Hero from "./ui/components/hero";
import Opinions from "./ui/components/opinions";
import TextWithImage from "./ui/components/text-with-image";
import Map from "./ui/components/map";
import Container from "./ui/structure/container";
import Heading from "@/app/ui/primitives/heading";
import { data } from "./data";
import Image, { ImageProps } from "next/image";
import Logo from "/public/logo.svg";
import { BoxProps } from "./ui/components/boxes/box";
import ContactData from "./ui/components/contact-data";
import MapImage from "/public/map.svg";
import Frame from "./ui/primitives/frame";

export default function HomePage() {
  return (
    <main>
      <Container id="home" noPadding fitScreen>
        <Hero images={data.hero.images as ImageProps[]}>
          <div className="flex flex-col items-center justify-center p-8">
            <Image src={Logo}
              alt="InkLab"
              width={240}
              height={240}
              className="sm:w-[320px] sm:h-[320px]" />
            <Heading tag="h1" content="InkLab Tattoo Studio" className="text-foreground-100 text-center mt-4" />
          </div>
        </Hero>
      </Container>

      <Container id="about-us">
        <TextWithImage
          images={data.aboutUs.images as ImageProps[]}
          text={data.aboutUs.text}
          title={data.aboutUs.title}
          textAlignMobile="center"
        />
      </Container>

      <Container>
        <div className="w-full flex flex-col items-center justify-center gap-4">
          <Heading tag="h2" content={data.aboutUs.boxes.title} className="mb-4" />
          <Boxes items={data.aboutUs.boxes.boxes as BoxProps[]} />
        </div>
      </Container>

      <Container id="opinions">
        <div className="w-full flex flex-col items-center justify-center gap-4">
          <Heading tag="h2" content="What people think about us" className="mb-12 text-center" />
          <Opinions items={data.opinions} />
        </div>
      </Container>

      <Container id="find-us">
        <div className="w-full flex flex-col items-center justify-center gap-4">
          <Heading tag="h2" content="Where can you find us" className="mb-4 text-center" />
          <Map
            image={MapImage}
            markers={[
              {
                ...data.contact.map.markers[0],
                content: <ContactData address={data.contact.address1} />
              },
              {
                ...data.contact.map.markers[1],
                content: <ContactData address={data.contact.address2} />
              },
              {
                ...data.contact.map.markers[2],
                content: <ContactData address={data.contact.address3} />
              },
            ]}
          />
          <div className="w-full max-w-[1024px] flex flex-col md:flex-row justify-center gap-4 md:gap-8 w-full md:mt-8">
            <Frame children={
              <ContactData address={data.contact.address1} />}
              className="w-full md:w-1/3 md:text-xl md:leading-[32px]"
            />
            <Frame children={
              <ContactData address={data.contact.address2} />}
              className="w-full md:w-1/3 md:text-xl md:leading-[32px]"
            />
            <Frame children={
              <ContactData address={data.contact.address3} />}
              className="w-full md:w-1/3 md:text-xl md:leading-[32px]"
            />
          </div>
        </div>
      </Container>
    </main>
  );
}
