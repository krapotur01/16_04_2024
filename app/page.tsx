import {
  Blogs,
  CardsProducts,
  Feature,
  Hero,
  Offer,
  SpecialOffer,
  Testimonials,
} from "./(site)/Content";

export default function Home() {
  return (
    <main className="w-full grow flex flex-col items-center">
      <Hero />
      <Feature />
      <Offer />
      <CardsProducts header="TRENDING" />
      <CardsProducts header="OUR PRODUCTS" />
      <SpecialOffer />
      <Testimonials />
      <Blogs />
    </main>
  );
}
