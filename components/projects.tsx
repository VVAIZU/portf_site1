import * as Craft from "@/components/craft";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "./ui/dialog";
import Image from "next/image";
import Placeholder from "../public/HeroImage.png"
const Left = () => {
    return (
        <Craft.Section>
            <Craft.Container className="grid items-stretch md:grid-cols-2 md:gap-12">
                <div className="not-prose relative flex h-96 overflow-hidden">
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        className="w-full"
                    >
                        <CarouselNext />
                        <CarouselPrevious />
                        <CarouselContent>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <Card>
                                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                                <Dialog>
                                                    <DialogTrigger>
                                                        <Button className="w-full h-full text-3xl font-semibold">{index + 1}</Button>
                                                    </DialogTrigger>
                                                    <DialogContent className="sm:max-w-[725px] bg-white rounded-xl">
                                                        <DialogTitle className="font-bold">Project {index + 1}</DialogTitle>
                                                        <Image
                                                            className="h-full w-full objct-c object-bottom"
                                                            src={Placeholder}
                                                            width={1107}
                                                            height={663}
                                                            alt="Hero mage"
                                                            placeholder="blur"
                                                        />
                                                        <DialogDescription className="text-center">
                                                            SomeProject is very interesting! I would rather to do smth like this
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
                <div className="flex flex-col gap-6 py-8">
                    <h3 className="!my-0">Header Project Section</h3>
                    <p className="font-light leading-[1.4] opacity-70">
                        Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                    </p>
                    <div className="not-prose flex items-center gap-2">
                        <Button className="w-fit" asChild>
                            <Link href="#">Контакты</Link>
                        </Button>
                        <Button className="w-fit" variant="link" asChild>
                            <Link href="#">Сделать заказ <ArrowRight className="ml-2 w-3"/></Link>
                        </Button>
                    </div>
                </div>
            </Craft.Container>
        </Craft.Section>
    )
}

export default Left;