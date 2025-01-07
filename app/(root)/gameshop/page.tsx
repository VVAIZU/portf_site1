import ComponentForm from "@/components/component-form";
import { Container, Main, Section } from "@/components/craft";
import Footer from "@/components/footer";
import GameShop from "@/components/gameshop";
import NewHero from "@/components/newhero";
import Newsletter from "@/components/newsletter";
import Left from "@/components/projects";
import Right from "@/components/right";
import Image from "next/image";

export default function Home() {
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
