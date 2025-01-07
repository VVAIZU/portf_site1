import { Container, Main, Section } from "@/components/craft";
import LoginForm from "@/components/shared/loginform";
import Link from "next/link";

export default function LoginPage() {
    return (
        <Main className="flex flex-col min-h-screen">
            <Section>
                <Container>
                    <LoginForm />
                    <Link href="/register">
                        <button style={{ padding: "10px", cursor: "pointer" }}>Go to Register</button>
                    </Link>
                </Container>
            </Section>
        </Main>
    );
}