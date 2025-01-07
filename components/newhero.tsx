"use client"
import Image from "next/image";

import { motion } from "framer-motion"
// import { motion } from "framer-motion";
import { Container, Section } from "./craft";

import Placeholder from "../public/buffer/homebuffer.png"
import Name from "../public/namepic.png"
import Balancer from "react-wrap-balancer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useRef, useState } from "react";
import DynamicSlider from "./slider";

const NewHero = () => {
    return (
        <div className="mt-20 w-full flex flex-col items-center justify-center h-screen">
            {/* Заголовок */}
            <div className="flex justify-center items-center w-[776px] h-[150px] mx-auto">
                <h1 className="text-[70px] font-bold text-center">
                    Место, где технологии становятся искусством
                </h1>
            </div>

            {/* Подзаголовок */}
            <p className="mt-[47px] text-[21px]">
                Ваши идеи — наша реализация. Создаем с вниманием к деталям.
            </p>

            {/* Кнопки */}
            <div className="mt-[29px] flex justify-center items-center gap-4">
                <Button
                    className="w-fit rounded-xl bg-black text-white"
                    size={"sm"}
                    variant={"default"}
                    // asChild
                >
                    <Link href="#" className="non-prose font-thin p-12">
                        Видеоигры
                    </Link>
                </Button>
                <Button
                    className="w-fit rounded-xl"
                    size={"sm"}
                    variant={"outline"}
                    asChild
                >
                    <Link href="#" className="non-prose p-y-12">
                        Заказ разработки
                        <ArrowRight className="ml-2 w-3" />
                    </Link>
                </Button>
            </div>

            <DynamicSlider />
            {/* Изображение */}
            {/* <div className="mt-[65px] w-full">
                <Image
                src={Placeholder} // Замените на путь к вашей картинке
                alt="Описание изображения"
                width={1811} // Укажите размеры, если нужно
                    height={583}
                    className="w-full object-cover"
                />
            </div> */}

        </div>
    )
}

export default NewHero