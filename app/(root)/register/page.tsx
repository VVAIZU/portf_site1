import { Container, Main, Section } from "@/components/craft";
import Register from "@/components/shared/lib/registerform";
import LoginForm from "@/components/shared/loginform";

export default function LoginPage() {
    return (
        <Main className="flex flex-col min-h-screen">
            <Section>
                <Container>
                    <Register />
                </Container>
            </Section>
        </Main>
    );
}