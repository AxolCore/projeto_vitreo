import CardsServicosSection from "@/components/CardsServicosSection";
import ConveniosSection from "@/components/ConveniosSection";
import ParallaxCardsSection from "@/components/ParallaxCardsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <CardsServicosSection />
      <ParallaxCardsSection />
      <ConveniosSection />
    </main>
  );
}
