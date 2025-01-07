import * as Craft from "@/components/craft";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

import Placeholder from "@/public/AboutImage.png"


const Right = () => {
    return (
        <Craft.Section id="about" className="bg-[#E6DFCF]">
            <Craft.Container className="grid items-stretch md:grid-cols-2 md:gap-12">
                <div className="flex flex-col gap-6 py-8">
                    <h3>Who Am I</h3>
                    <p className="gont-light leading-[1.4] opacity-80">
                        Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                    </p>
                    <Button
                        className="w-fit rounded-xl"
                        size={"sm"} 
                        variant={"outline"}
                        asChild
                    >
                        <Link href="#" className="non-prose">Make request<ArrowRight className="ml-2 w-3" /></Link>
                    </Button>
                </div>
                <div className="not-prose overflow-hidden rounded-xl">
                    <Image
                        src={Placeholder}
                        width={669}
                        height={737}
                        alt="placeholder"
                        placeholder="blur"
                    />
                </div>
            </Craft.Container>
        </Craft.Section>
    )
}

export default Right;