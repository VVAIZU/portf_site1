import { Container, Main, Section } from "@/components/craft";
import Hero from "@/components/hero";
import Left from "@/components/projects";
import Image from "next/image";

export default function Home() {
  return (
    <Main>
      <Section>
        <Container>
          <Hero />
          <Left />
        </Container>
      </Section>
    </Main>
  );
}
