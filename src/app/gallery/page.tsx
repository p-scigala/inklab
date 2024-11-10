import Gallery from '@/app/ui/components/gallery';
import Container from '../ui/structure/container';

export default function GalleryPage() {
  const items = [
    {
      url: '/works/work-01.svg',
    },
    {
      url: '/works/work-02.svg',
    },
    {
      url: '/works/work-03.svg',
    },
    {
      url: '/works/work-04.svg',
    },
    {
      url: '/works/work-05.svg',
    },
    {
      url: '/works/work-06.svg',
    },
    {
      url: '/works/work-07.svg',
    },
    {
      url: '/works/work-08.svg',
    },
    {
      url: '/works/work-09.svg',
    },
  ];

  return (
    <Container>
      <>
        <h2>Checkout our works!</h2>
        <Gallery items={items} />
      </>
    </Container>
  );
}
