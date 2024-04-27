import { Logo_section, HeroSection, Content } from "./components";

export default function Home() {
  return (
    <main className="w-full grow flex flex-col items-center">
      <Logo_section />
      <HeroSection />
      <Content />
    </main>
  );
}
