import Banner from "@/components/Banner";
import CardOlhos from "@/components/CardsOlhos";
import CardsServicosSection from "@/components/CardsServicosSection";
import Comentarios from "@/components/Comentarios";
import ConveniosSection from "@/components/ConveniosSection";
import MedicosSection from "@/components/MedicosSection";
import ParallaxCardsSection from "@/components/ParallaxCardsSection";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Banner />
      <CardOlhos />
      <CardsServicosSection />
      <ParallaxCardsSection />
      <MedicosSection />
      <Comentarios/>
      <ConveniosSection />

    </main>
  );
}
