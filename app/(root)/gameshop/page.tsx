import { Container, Main, Section } from "@/components/craft";
import Footer from "@/components/footer";
import GameShop from "@/components/gameshop";

export default function GameShopPage() {

  
  return (
    <Main className="flex flex-col min-h-screen">
      <Section className="flex-grow">
        <Container>
          <GameShop />
          <Footer />
        </Container>
      </Section>
    </Main>
  );
}
