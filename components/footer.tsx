import Link from "next/link";
import { Container, Section } from "./craft";
import Balancer from "react-wrap-balancer";
import Image from "next/image";

import Logo from "@/public/FooterLogo.png";
import { DividerHorizontalIcon } from "@radix-ui/react-icons";

export default function Footer() {
    return (
        <footer>
            <Section id="footer" className="w-full bg-[#1E1E1E]">
                <Container className=" text-[#E6DFCF] grid gap-12 md:grid-cols-[1.5fr_0.5fr_0.5fr]">
                    <div className="grid gap-3">
                        <Link href="/">
                            <Image
                                src={Logo}
                                alt="Logo"
                                width={120}
                                height={27.27}
                                className="transition-all hover:opacity-75 dark:invert"
                            />
                            <DividerHorizontalIcon />
                        </Link>
                        <p>
                            <Balancer>
                                This is portfolio site for some designer. Work in progress, test view of this project
                            </Balancer>
                        </p>
                        <p className="text-muted-foreground">
                            ©{" "}
                            <a href="https://github.com/brijr/components">SATORI Ent. 2024.</a>
                            
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 mt-20">
                        <h5>Social media</h5>
                        <Link href="/">VK</Link>
                        <Link href="/">Telegram</Link>
                        <Link href="/">Inst</Link>
                    </div>
                    <div className="flex flex-col gap-2 mt-20">
                        <h5>Other stuff</h5>
                        <Link href="/">Projects</Link>
                        <Link href="/">About me</Link>
                        <Link href="/">About SATORI</Link>
                    </div>
                </Container>
            </Section>
            <p className="text-xs text-center text-muted-foreground mt-10">Made by  ©{" "} <a href="/">SATORI</a> 2024. All rights reserved </p>
        </footer>
    )
}
