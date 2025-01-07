import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import Placeholder from "../public/back1.png"
import { Button } from "./ui/button";
import Link from "next/link";

const slides = [
    {
        id: 1,
        background: Placeholder, // Укажите путь к изображению
        buttonLabel: "O SATORI Ent.",
        heading: "Команда студентов - знающих и горящих своим делом",
        text: "Создаем сайты, телеграм-ботов для вашего бизнеса. Делаем медиа-продукты, которые интересны нам самим.",
        naming: "About"
    },
    {
        id: 2,
        background: Placeholder,
        buttonLabel: "Скачать Демо",
        heading: "BERENICE: Videogame",
        text: "Главный герой, поддавшись ностальгии и воспоминаниям о своей возлюбленной, попадает в бескрайний дворец, который, кажется... дышит.",
        naming: "BERENICE",
    },
    {
        id: 3,
        background: Placeholder,
        buttonLabel: "Перейти на канал",
        heading: "NewStation",
        text: " Развивающийся новостной канал об игровой индустрии. Впереди всех игровых информеров. Игры и только игры",
        naming: "NewStation"
    },
];

export default function DynamicSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleSlideChange = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] overflow-hidden">
            {/* Фон с анимацией */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={slides[currentSlide].id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.1 }}
                    className="absolute inset-0 w-full h-full"
                >
                    <Image
                        src={slides[currentSlide].background}
                        alt="Background Image"
                        width={1811} // Укажите размеры, если нужно
                        height={583}
                    />
                </motion.div>
            </AnimatePresence>

            {/* Верхний левый блок с кнопками */}
            <div className="absolute top-5 left-4 md:top-10 md:left-8 px-4 md:px-6 py-2 w-full md:w-auto flex flex-wrap gap-2 md:gap-4 border dark:border-zinc-900 dark:bg-black bg-opacity-90 backdrop-filter backdrop-blur-lg border-white border-opacity-20 rounded-xl shadow-lg">
                {slides.map((slide, index) => (
                    <Button
                        key={slide.id}
                        onClick={() => handleSlideChange(index)}
                        className={`px-4 py-2 rounded-xl transition text-[clamp(12px, 2.5vw, 16px)] leading-[clamp(14px, 3vw, 18px)] ${currentSlide === index
                            ? "bg-white text-black"  // Активная кнопка
                            : "text-black hover:bg-gray-50"
                            }`}
                        size="sm"
                        variant={"default"}
                    >
                        {slide.naming}
                    </Button>
                ))}
            </div>


            {/* Нижний левый блок */}
            <div className="absolute mt-40 w-[816px] h-[130px] left-6 text-black space-y-4">
                <Button
                    className="w-fit rounded-xl "
                    size={"lg"}
                    variant={"outline"}
                    asChild
                >
                    <Link href="#" className="non-prose"> {slides[currentSlide].buttonLabel}</Link>
                </Button>
                <h1 className="text-[49px] font-bold">{slides[currentSlide].heading}</h1>
                <p className="text-[21px]">{slides[currentSlide].text}</p>
            </div>
        </div>
    );
}