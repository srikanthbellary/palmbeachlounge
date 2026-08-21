import { Atelier } from "@/components/Atelier";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Lounge } from "@/components/Lounge";
import { Visit } from "@/components/Visit";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <Lounge />
      <Atelier />
      <Visit />
      <Contact />
    </main>
  );
}
