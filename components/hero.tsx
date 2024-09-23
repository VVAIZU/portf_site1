import Image from "next/image";
import { Container, Section } from "./craft";

import Placeholder from "../public/HeroImage.png"
import Balancer from "react-wrap-balancer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
    return (
        <Section>
            <Container>
                <div>
                    <div className="not-prose overflow-hidden mb-5 rounded-lg border md:rounded-xl">
                        <Image
                            className="h-full w-full objct-c object-bottom"
                            src={Placeholder}
                            width={1107}
                            height={663}
                            alt="Hero mage"
                            placeholder="blur"
                        />
                    </div>
                    <div className="flex flex-col justify-between items-center">
                        <h1 className="font-bold"> 
                            <Balancer>
                                THE SELF-PROCLAIM CREATIVE GENIUS
                            </Balancer>
                        </h1>
                        <h3 className="text-muted-foreground text-center mt-4">
                            <Balancer>
                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Balancer>
                        </h3>
                        <Button
                            asChild
                            className="mt-4 mb-6 w-fit rounded-xl"
                            size={"sm"}
                            variant={"outline"}
                        >
                            <Link className="not-prose justif-center" href="/">
                                READ MORE
                                {/* READ MORE <ArrowRight className="ml-2 w-3" /> */}
                            </Link>
                        </Button>

                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default Hero;