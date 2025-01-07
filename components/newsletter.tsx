import * as Craft from "@/components/craft";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "./ui/dialog";
import Image from "next/image";
import Placeholder from "../public/HeroImage.png"
import Project1 from "../public/project1.png"
import Project2 from "../public/project2.png"
import Project3 from "../public/project3.png"
import Project4 from "../public/project4.png"
import Project5 from "../public/project5.png"
const projectImages = [
    Project1,
    Project2,
    Project3,
    Project4,
    Project5,

]

const Newsletter = () => {
    return (
        <Craft.Section className="md: -mb-20 mt-20">
            <div className="not-prose relative flex h-96 overflow-hidden">
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full"
                >
                    <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10" />
                    <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10" />
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="bg-[#E6DFCF] rounded-xl flex aspect-square items-center justify-center p-0">
                                            <Dialog>
                                                <DialogTrigger className="w-full h-full">
                                                    <span className="text-xl font-semibold">Project {index + 1}</span>
                                                </DialogTrigger>
                                                <DialogContent className="sm:max-w-[725px] bg-[#E6DFCF] rounded-xl">
                                                    <DialogTitle className="font-bold">Project {index + 1}</DialogTitle>
                                                    <Image
                                                        className="h-full w-full objct-c object-bottom"
                                                        src={projectImages[index] || Placeholder}
                                                        width={1107}
                                                        height={663}
                                                        alt={`Project ${index + 1} image`}
                                                    />
                                                    <DialogDescription className="text-center">
                                                        This Project was very interesting! I would rather to do smth like this.
                                                    </DialogDescription>
                                                </DialogContent>
                                            </Dialog>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </Craft.Section>
    )
}

export default Newsletter;